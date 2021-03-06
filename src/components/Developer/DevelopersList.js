import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { developerActions } from "../../store/dev-slice";
import AdminCard from "../../ui/AdminCard";
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

  let isAdmin = false;
  const location = useLocation();
  const path = location.pathname.split("/");
  if (path[1] === "admin") {
    isAdmin = true;
  }
  const navigate = useNavigate();

  const editDevHandler = (id) => {
    navigate(`/admin/edit-developer/${id}`);
  };

  const deleteDevHandler = (id) => {
    dispatch(developerActions.removeDeveloper(id));
  };

  const onShowDatePicker = (id) => {
    setDevId(id);
    setIsModalVisible(!isModalVisible);
  };

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

  let listToRender;

  if (isAdmin) {
    listToRender = developers.map((dev) => {
      return (
        <AdminCard
          key={dev.id}
          editDeveloper={editDevHandler}
          deleteDeveloper={deleteDevHandler}
          showDatePicker={onShowDatePicker}
          dev={dev}
        />
      );
    });
  } else {
    listToRender = developers.map((dev) => {
      return (
        <Card
          key={dev.id}
          editDeveloper={editDevHandler}
          deleteDeveloper={deleteDevHandler}
          showDatePicker={onShowDatePicker}
          dev={dev}
        />
      );
    });
  }

  return (
    <Fragment>
      {isModalVisible && (
        <DateModal id={devId} showDatePicker={onShowDatePicker} />
      )}
      <div className={classes["list-container"]}>
        <ul>{listToRender}</ul>
      </div>
    </Fragment>
  );
};

export default DevelopersList;
