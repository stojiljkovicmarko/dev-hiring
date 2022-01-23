import classes from "./Error.module.css";

const Error = (props) => {
  if (!props.error) {
    return (
      <div className={classes["error-container"]}>
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div className={classes["error-container"]}>
      <p>{props.error.message}</p>
    </div>
  );
};

export default Error;
