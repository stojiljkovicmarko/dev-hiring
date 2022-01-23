import { useSelector } from "react-redux";

import TopDevCard from "../../ui/TopDevCard";

import classes from "./WelcomeTopDevs.module.css";

const WelcomeTopDevs = () => {
  const developers = useSelector((state) => state.developer.developers);

  return (
    <div className={classes["welcome-dev-container"]}>
      {developers.slice(0, 8).map((dev) => (
        <TopDevCard
          key={dev.id}
          name={dev.name}
          tech={dev.technology}
          img={dev.img}
        />
      ))}
    </div>
  );
};

export default WelcomeTopDevs;
