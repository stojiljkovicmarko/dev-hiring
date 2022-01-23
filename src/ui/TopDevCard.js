import avatar from "../assets/avatar.png";

import classes from "./TopDevCard.module.css";

const TopDevCard = (props) => {
  return (
    <div className={classes["welcome-dev-card"]}>
      <img src={props.img || avatar} alt="Developer" />
      <div className={classes["dev-info"]}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.tech}>{props.tech}</p>
      </div>
    </div>
  );
};

export default TopDevCard;
