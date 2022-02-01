import DevelopersList from "../components/Developer/DevelopersList";
import Section from "../ui/Section";

const HireDeveloper = (props) => {

  return (
    <Section>
      <DevelopersList isLoading={props.isLoading} error={props.error} />
    </Section>
  );
};

export default HireDeveloper;
