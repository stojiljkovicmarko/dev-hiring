import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { developerActions } from "../../store/dev-slice";
import Card from "../../ui/Card";
import DateModal from "../DatePickerModal/DateModal";

import classes from "./DevelopersList.module.css";

const DevelopersList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [devId, setDevId] = useState(null);
  const developers = useSelector((state) => state.developer.developers);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const editDevHandler = (id) => {
    navigate(`/edit-developer/${id}`);
  };

  const deleteDevHandler = (id) => {
    dispatch(developerActions.removeDeveloper(id));
  };

  const onShowDatePicker = (id) => {
    setDevId(id);
    setIsModalVisible(!isModalVisible);
  };

  if (developers.length === 0) {
    return <h1>No developers to hire!</h1>;
  }

  return (
    <Fragment>
      {isModalVisible && (
        <DateModal id={devId} showDatePicker={onShowDatePicker} />
      )}
      <div className={classes["list-container"]}>
        <ul>
          {developers.map((dev) => {
            return (
              <Card
                key={dev.id}
                editDeveloper={editDevHandler}
                deleteDeveloper={deleteDevHandler}
                showDatePicker={onShowDatePicker}
                dev={dev}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default DevelopersList;
