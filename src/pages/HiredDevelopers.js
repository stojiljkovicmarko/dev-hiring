import { useSelector } from "react-redux";

const HiredDevelopers = (props) => {
  const hiredDevelopers = useSelector((state) => state.hired.hired);
  console.log(hiredDevelopers);
  return (
    <div>
      <h1>coming soon</h1>
    </div>
  );
};

export default HiredDevelopers;
