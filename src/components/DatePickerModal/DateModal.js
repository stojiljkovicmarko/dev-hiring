import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateRange } from "react-date-range";

import { hiredActions } from "../../store/hired-slice";
import Modal from "../../ui/Modal";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import classes from "./DateModal.module.css";

const convertRangeIntoArrayOfDates = (dateRangeMs) => {
  const oneDayInMs = 86400000;
  let day = dateRangeMs.endDateMs;
  let dayDifference =
    (dateRangeMs.endDateMs - dateRangeMs.startDateMs) / oneDayInMs;
  const arrayOfDays = [];

  for (let i = 0; i <= dayDifference; i++) {
    let date = new Date(day).toDateString();
    arrayOfDays.unshift(date);
    day = day - oneDayInMs;
  }

  return arrayOfDays;
};

const DateModal = (props) => {
  const hired = useSelector((state) => state.hired);
  const dispatch = useDispatch();

  const devId = props.id;
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const onCloseHandler = () => {
    props.showDatePicker(false);
  };

  const onHireHandler = () => {
    const dates = convertRangeIntoArrayOfDates({
      startDateMs: new Date(dateRange[0].startDate).getTime(),
      endDateMs: new Date(dateRange[0].endDate).getTime(),
    });
    dispatch(hiredActions.addHiredDates({ id: devId, dates: dates }));
    onCloseHandler();
  };

  const hasHiredDates = hired.hired.find((dev) => dev.id === devId);
  let daysToDisable;

  if (hasHiredDates) {
    daysToDisable = hasHiredDates.dates.map((date) => new Date(date));
  }

  return (
    <Modal onClose={onCloseHandler}>
      <DateRange
        weekStartsOn={1}
        showDateDisplay={false}
        shownDate={new Date()}
        disabledDates={daysToDisable}
        showSelectionPreview={false}
        minDate={new Date()}
        editableDateInputs={false}
        onChange={(item) => {
          setDateRange([item.selection]);
        }}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
      />
      <div className={classes["modal-actions"]}>
        <button className={classes["modal-hire"]} onClick={onHireHandler}>
          HIRE
        </button>
        <button className={classes["modal-close"]} onClick={onCloseHandler}>
          CLOSE
        </button>
      </div>
    </Modal>
  );
};

export default DateModal;
