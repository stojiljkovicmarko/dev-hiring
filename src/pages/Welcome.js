import WelcomeInfo from "../components/Welcome/WelcomeInfo";
import WelcomeTopDevs from "../components/Welcome/WelcomeTopDevs";

import Section from "../ui/Section";

const Welcome = () => {
  return (
    <Section>
      <WelcomeInfo />
      <WelcomeTopDevs />
    </Section>
  );
};

export default Welcome;
