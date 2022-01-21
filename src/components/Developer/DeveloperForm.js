import { useLocation } from "react-router-dom";
import useInput from "../../hooks/useInput";
import classes from "./DeveloperForm.module.css";
import Developer from "../../model/Developer";

const DeveloperForm = (props) => {
  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const location = useLocation();

  const {
    value: nameValue,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => emailRegex.test(value));

  const {
    value: phoneValue,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    valueInputBlurHandler: phoneInputBlurHandler,
    reset: resetPhone,
  } = useInput((value) => value.trim() !== "");

  const {
    value: locationValue,
    hasError: locationInputHasError,
    valueChangeHandler: locationChangeHandler,
    valueInputBlurHandler: locationInputBlurHandler,
    reset: resetLocation,
  } = useInput((value) => value.trim() !== "");

  const {
    value: priceValue,
    hasError: priceInputHasError,
    valueChangeHandler: priceChangeHandler,
    valueInputBlurHandler: priceInputBlurHandler,
    reset: resetPrice,
  } = useInput((value) => value.trim() !== "");

  const {
    value: technologyValue,
    hasError: technologyInputHasError,
    valueChangeHandler: technologyChangeHandler,
    valueInputBlurHandler: technologyInputBlurHandler,
    reset: resetTechnology,
  } = useInput((value) => value.trim() !== "");

  const {
    value: yearsOfExpValue,
    hasError: yearsOfExpInputHasError,
    valueChangeHandler: yearsOfExpChangeHandler,
    valueInputBlurHandler: yearsOfExpInputBlurHandler,
    reset: resetYearsOfExp,
  } = useInput((value) => value.trim() !== "");

  const {
    value: languageValue,
    hasError: languageInputHasError,
    valueChangeHandler: languageChangeHandler,
    valueInputBlurHandler: languageInputBlurHandler,
    reset: resetLanguage,
  } = useInput((value) => value.trim() !== "");

  const {
    value: imgValue,
    hasError: imgInputHasError,
    valueChangeHandler: imgChangeHandler,
    valueInputBlurHandler: imgInputBlurHandler,
    reset: resetImg,
  } = useInput((value) => true);

  const {
    value: descriptionValue,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangeHandler,
    valueInputBlurHandler: descriptionInputBlurHandler,
    reset: resetDescription,
  } = useInput((value) => true);

  const {
    value: linkedinValue,
    hasError: linkedinInputHasError,
    valueChangeHandler: linkedinChangeHandler,
    valueInputBlurHandler: linkedinInputBlurHandler,
    reset: resetLinkedin,
  } = useInput((value) => true);

  let formIsValid = false;

  if (
    !nameInputHasError &&
    nameValue &&
    !emailInputHasError &&
    emailValue &&
    !phoneInputHasError &&
    phoneValue &&
    !locationInputHasError &&
    locationValue &&
    !priceInputHasError &&
    priceValue &&
    !technologyInputHasError &&
    technologyValue &&
    !yearsOfExpInputHasError &&
    yearsOfExpValue &&
    !languageInputHasError &&
    languageValue
  ) {
    formIsValid = true;
  }

  const resetForm = () => {
    resetName();
    resetEmail();
    resetPhone();
    resetLocation();
    resetPrice();
    resetTechnology();
    resetYearsOfExp();
    resetLanguage();
    resetImg();
    resetDescription();
    resetLinkedin();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !nameValue ||
      !emailValue ||
      !phoneValue ||
      !locationValue ||
      !priceValue ||
      !technologyValue ||
      !yearsOfExpValue ||
      !languageValue
    ) {
      return;
    }

    const developer = new Developer(
      Math.floor(Math.random() * 1000000),
      nameValue,
      emailValue,
      phoneValue,
      locationValue,
      imgValue,
      priceValue,
      technologyValue,
      descriptionValue,
      yearsOfExpValue,
      languageValue,
      linkedinValue
    );

    console.log(developer);

    resetForm();
    //ovde cemo dispatch za notifikaciju
  };

  const inputClasses = (inputFieldHasError) => {
    return !inputFieldHasError ? "" : classes.invalid;
  };

  return (
    <div className={classes["form-container"]}>
      <div className={classes.heading}>
        <p>
          {location.pathname === "/new-developer"
            ? "Create developer"
            : "Edit developer"}
        </p>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <input
            type="text"
            className={inputClasses(nameInputHasError)}
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
            placeholder="Name*"
          />
          <input
            type="email"
            className={inputClasses(emailInputHasError)}
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            placeholder="Email*"
          />
          <input
            type="text"
            className={inputClasses(phoneInputHasError)}
            value={phoneValue}
            onChange={phoneChangeHandler}
            onBlur={phoneInputBlurHandler}
            placeholder="Phone* (example 060-123-4567)"
          />
          <input
            type="text"
            className={inputClasses(locationInputHasError)}
            value={locationValue}
            onChange={locationChangeHandler}
            onBlur={locationInputBlurHandler}
            placeholder="Location*"
          />
          <input
            type="number"
            className={inputClasses(priceInputHasError)}
            value={priceValue}
            onChange={priceChangeHandler}
            onBlur={priceInputBlurHandler}
            placeholder="Price per hour*"
            min="0"
          />
          <select
            className={inputClasses(technologyInputHasError)}
            value={technologyValue}
            onChange={technologyChangeHandler}
            onBlur={technologyInputBlurHandler}
            name="technology"
          >
            <option defaultValue="" selected>
              Technology*
            </option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value=".Net">.Net</option>
            <option value="Flutter">Flutter</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
          </select>
        </div>
        <div>
          <textarea
            className={inputClasses(descriptionInputHasError)}
            value={descriptionValue}
            onChange={descriptionChangeHandler}
            onBlur={descriptionInputBlurHandler}
            placeholder="Description"
          />
          <input
            type="number"
            className={inputClasses(yearsOfExpInputHasError)}
            value={yearsOfExpValue}
            onChange={yearsOfExpChangeHandler}
            onBlur={yearsOfExpInputBlurHandler}
            placeholder="Years of experience*"
            min="0"
          />
          <select
            name="language"
            className={inputClasses(languageInputHasError)}
            value={languageValue}
            onChange={languageChangeHandler}
            onBlur={languageInputBlurHandler}
          >
            <option defaultValue="" selected>
              Language*
            </option>
            <option value="Serbian">Serbian</option>
            <option value="English">English</option>
            <option value="Bulgarian">Bulgarian</option>
          </select>
          <input
            type="text"
            className={inputClasses(linkedinInputHasError)}
            value={linkedinValue}
            onChange={linkedinChangeHandler}
            onBlur={linkedinInputBlurHandler}
            placeholder="LinkedIn profile url"
          />

          <div
            className={`${classes["image-container"]} ${inputClasses(
              imgInputHasError
            )}`}
          >
            <label htmlFor="img">Select profile image: </label>
            <input
              type="file"
              value={imgValue}
              onChange={imgChangeHandler}
              onBlur={imgInputBlurHandler}
              name="img"
              placeholder="Name"
              accept="image/png, image/jpg"
            />
          </div>
        </div>
        <div className={classes["form-actions"]}>
          <button type="reset" onClick={resetForm}>
            Reset
          </button>
          <button type="submit" disabled={!formIsValid}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeveloperForm;
