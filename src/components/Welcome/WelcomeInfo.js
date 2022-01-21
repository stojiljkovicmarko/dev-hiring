import { useNavigate } from "react-router-dom";
import classes from "./WelcomeInfo.module.css";

const WelcomeInfo = () => {

  const navigate = useNavigate();

  const hireDevHandler = () => {
    navigate("/hire-developer");
  }

  return (
    <div className={classes["welcome-info"]}>
      <h2>Here are the best devs you can hire immediately!</h2>
      <p>
        This is the place for hiring top developers across the globe. Top
        companies are hiring developers from our platform.
      </p>
      <button onClick={hireDevHandler}>Hire a developer</button>
    </div>
  );
};

export default WelcomeInfo;
