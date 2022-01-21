import useInput from "../../hooks/useInput";
import classes from "./DeveloperForm.module.css";

const DeveloperForm = (props) => {
  const {
    value: nameValue,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const {
    value: emailValue,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => emailRegex.test(value));

  let formIsValid = false;

  if (!nameInputHasError && !emailInputHasError) {
    formIsValid = true;
  }

  const resetForm = () => {
    resetName();
    resetEmail();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameValue || !emailValue) {
      return;
    }

    resetForm();
    //ovde cemo dispatch za notifikaciju
  };

  const inputClasses = (inputFieldHasError) => {
    return !inputFieldHasError ? "" : classes.invalid;
  };

  console.log(formIsValid);

  return (
    <div className={classes["form-container"]}>
      <div className={classes.heading}>
        <p>Create/Edit Developer</p>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <input
            type="text"
            className={inputClasses(nameInputHasError)}
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
            placeholder="Name"
          />
          <input
            type="email"
            className={inputClasses(emailInputHasError)}
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            placeholder="Email"
          />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Location" />
          <input type="number" placeholder="Price per hour" min="0" />
          <select name="technology">
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value=".Net">.Net</option>
            <option value="Flutter">Flutter</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
          </select>
        </div>
        <div>
          <textarea value="" placeholder="Description" />
          <input type="number" placeholder="Years of experience" min="0" />
          <select name="language">
            <option value="Serbian">Serbian</option>
            <option value="English">English</option>
            <option value="Bulgarian">Bulgarian</option>
          </select>
          <input type="text" placeholder="LinkedIn profile url" />

          <div className={classes["image-container"]}>
            <label htmlFor="img">Select profile image: </label>
            <input
              type="file"
              name="img"
              placeholder="Name"
              accept="image/png, image/jpg"
            />
          </div>
        </div>
        <div className={classes["form-actions"]}>
          <button type="submit">Reset</button>
          <button type="submit" disabled={!formIsValid}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeveloperForm;
