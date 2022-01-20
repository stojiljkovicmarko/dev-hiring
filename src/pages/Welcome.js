import WelcomeTopDevs from "../components/Welcome/WelcomeTopDevs";
import WelcomeInfo from "../components/Welcome/WelcomeInfo";

import classes from "./Welcome.module.css";
import DeveloperForm from "../components/Developer/DeveloperForm";

const Welcome = () => {
  return (
    <section className={classes.section}>
      <DeveloperForm />
      <WelcomeInfo />
      <WelcomeTopDevs />
    </section>
  );
};

export default Welcome;
