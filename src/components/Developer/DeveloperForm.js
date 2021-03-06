import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useInput from "../../hooks/useInput";
import { developerActions } from "../../store/dev-slice";

import classes from "./DeveloperForm.module.css";

const DeveloperForm = (props) => {
  const devs = useSelector((state) => state.developer.developers);
  const dispatch = useDispatch();
  const location = useLocation();

  const pathList = location.pathname.split("/");
  let id = null;
  console.log(pathList);
  if (pathList[2] === "edit-developer") {
    id = pathList[pathList.length - 1];
  }

  const {
    value: nameValue,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName,
    fillForm: fillName,
  } = useInput((value) => value.trim() !== "");

  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const {
    value: emailValue,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
    fillForm: fillEmail,
  } = useInput((value) => emailRegex.test(value));

  const {
    value: phoneValue,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    valueInputBlurHandler: phoneInputBlurHandler,
    reset: resetPhone,
    fillForm: fillPhone,
  } = useInput((value) => value.trim() !== "");

  const {
    value: locationValue,
    hasError: locationInputHasError,
    valueChangeHandler: locationChangeHandler,
    valueInputBlurHandler: locationInputBlurHandler,
    reset: resetLocation,
    fillForm: fillLocation,
  } = useInput((value) => value.trim() !== "");

  const {
    value: priceValue,
    hasError: priceInputHasError,
    valueChangeHandler: priceChangeHandler,
    valueInputBlurHandler: priceInputBlurHandler,
    reset: resetPrice,
    fillForm: fillPrice,
  } = useInput((value) => value.trim() !== "");

  const {
    value: technologyValue,
    hasError: technologyInputHasError,
    valueChangeHandler: technologyChangeHandler,
    valueInputBlurHandler: technologyInputBlurHandler,
    reset: resetTechnology,
    fillForm: fillTechnology,
  } = useInput((value) => value.trim() !== "");

  const {
    value: yearsOfExpValue,
    hasError: yearsOfExpInputHasError,
    valueChangeHandler: yearsOfExpChangeHandler,
    valueInputBlurHandler: yearsOfExpInputBlurHandler,
    reset: resetYearsOfExp,
    fillForm: fillYearsOfExp,
  } = useInput((value) => value.trim() !== "");

  const {
    value: languageValue,
    hasError: languageInputHasError,
    valueChangeHandler: languageChangeHandler,
    valueInputBlurHandler: languageInputBlurHandler,
    reset: resetLanguage,
    fillForm: fillLanguage,
  } = useInput((value) => value.trim() !== "");

  let imgRegex = new RegExp("(.png|gif|jpe?g|webp|bmp)$");

  const {
    value: imgValue,
    hasError: imgInputHasError,
    valueChangeHandler: imgChangeHandler,
    valueInputBlurHandler: imgInputBlurHandler,
    reset: resetImg,
    fillForm: fillImg,
  } = useInput((value) => imgRegex.test(value) || value.trim() === "");

  const {
    value: descriptionValue,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangeHandler,
    valueInputBlurHandler: descriptionInputBlurHandler,
    reset: resetDescription,
    fillForm: fillDescription,
  } = useInput((value) => true);

  const {
    value: linkedinValue,
    hasError: linkedinInputHasError,
    valueChangeHandler: linkedinChangeHandler,
    valueInputBlurHandler: linkedinInputBlurHandler,
    reset: resetLinkedin,
    fillForm: fillLinkedin,
  } = useInput((value) => true);

  const fillAllFields = useCallback((dev) => {
    fillName(dev.name);
    fillEmail(dev.email);
    fillPhone(dev.phone);
    fillLocation(dev.location);
    fillImg(dev.img);
    fillPrice(dev.pricePerHour);
    fillTechnology(dev.technology);
    fillDescription(dev.description);
    fillYearsOfExp(dev.yearsOfExp);
    fillLanguage(dev.nativeLanguage);
    fillLinkedin(dev.linkedin);
  }, []);

  useEffect(() => {
    if (id) {
      const idExists = devs.find((dev) => {
        return dev.id === id;
      });
      if (idExists) {
        const dev = devs.filter((dev) => dev.id === id)[0];
        fillAllFields(dev);
      }
    }
  }, [id, devs, fillAllFields]);

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
    languageValue &&
    !imgInputHasError
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

    let developer = {
      id: null,
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      location: locationValue,
      img: imgValue,
      pricePerHour: priceValue,
      technology: technologyValue,
      description: descriptionValue,
      yearsOfExp: yearsOfExpValue,
      nativeLanguage: languageValue,
      linkedin: linkedinValue,
    };

    if (id) {
      developer.id = id;
      dispatch(developerActions.editDeveloper(developer));
    } else {
      developer.id = "" + Math.floor(Math.random() * 1000000);
      dispatch(developerActions.addDeveloper(developer));
    }
    resetForm();
  };

  const inputClasses = (inputFieldHasError) => {
    return !inputFieldHasError ? "" : classes.invalid;
  };

  const isCreatePage = location.pathname.includes("/new-developer");

  return (
    <div className={classes["form-container"]}>
      <div className={classes.heading}>
        <p>{isCreatePage ? "Create developer" : "Edit developer"}</p>
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
            <option defaultValue="">Technology*</option>
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
            <option defaultValue="">Language*</option>
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
            placeholder="LinkedIn (https://www.linkedin.com/in/username/)"
          />
          <input
            type="text"
            className={inputClasses(imgInputHasError)}
            value={imgValue}
            onChange={imgChangeHandler}
            onBlur={imgInputBlurHandler}
            name="img"
            placeholder="Image url (valid image formats .jpg/.png/.gif...)"
          />
        </div>
        <div className={classes["form-actions"]}>
          <button type="reset" onClick={resetForm}>
            Reset
          </button>
          <button type="submit" disabled={!formIsValid}>
            {isCreatePage ? "Create" : "Edit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeveloperForm;
