import { useState } from "react";

import classes from "./Card.module.css";
import avatar from "../assets/avatar.png";

const Card = (props) => {
  const [isMoreDataVisible, setIsMoreDataVisible] = useState(false);
  const dev = props.dev;

  const onImgErrorHandler = (event) => {
    event.targe.src = avatar;
  };

  const showMoreDataHandler = () => {
    setIsMoreDataVisible(!isMoreDataVisible);
  };

  return (
    <li className={classes["card-li"]}>
      <div className={classes["card-info"]}>
        <div className={classes["img-container"]}>
          <img
            onError={onImgErrorHandler}
            src={dev.img || avatar}
            alt="Profile"
          />
        </div>
        <div className={classes["dev-info-container"]}>
          <div className={classes["dev-name"]}>
            <p>{dev.name}</p>
          </div>
          <div className={classes["dev-info"]}>
            <div>
              <p>Tech</p>
              <p>{dev.technology}</p>
              <p>Years of exp</p>
              <p>{dev.yearsOfExp}</p>
              <p>Price/hour</p>
              <p>{dev.pricePerHour}$</p>
            </div>
            <div>
              <p>Native language</p>
              <p>{dev.nativeLanguage}</p>
              <p>Based in</p>
              <p>{dev.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes["card-actions"]} ${
          isMoreDataVisible ? "less" : "more"
        }`}
      >
        <button onClick={showMoreDataHandler}>
          {isMoreDataVisible ? "less" : "more"}
        </button>
      </div>
      <div
        className={`${classes["card-more"]} ${
          classes[isMoreDataVisible ? "visible" : "hidden"]
        }`}
      >
        <div>
          <p>Email</p>
          <p>{dev.email}</p>
          <p>Phone</p>
          <p>{dev.phone}</p>
          <p>LinkedIn</p>
          <p>{dev.linkedin || "..."}</p>
        </div>
        <div>
          <p>Description</p>
          <p>{dev.description || "No descirption"}</p>
        </div>
        <div className={classes["card-actions-buttons"]}>
          <button
            onClick={() => {
              props.editDeveloper(dev.id);
            }}
            className={classes["edit-btn"]}
          >
            EDIT
          </button>
          <button
            onClick={() => {
              props.deleteDeveloper(dev.id);
            }}
            className={classes["delete-btn"]}
          >
            DELETE
          </button>
          <button
            onClick={() => {
              props.showDatePicker(dev.id);
            }}
            className={classes["hire-btn"]}
          >
            HIRE
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
