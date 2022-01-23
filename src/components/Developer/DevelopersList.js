import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { developerActions } from "../../store/dev-slice";
import Card from "../../ui/Card";
import DateModal from "../DatePickerModal/DateModal";
import Error from "../Error/Error";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import classes from "./DevelopersList.module.css";

const DevelopersList = (props) => {
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

  console.log("loading... ", props.isLoading);

  if (props.isLoading) {
    return <LoadingSpinner />;
  }

  if (!props.isLoading && props.error) {
    return (
      <Error
        error={{ message: "Error loading developers. Please try again later." }}
      />
    );
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
