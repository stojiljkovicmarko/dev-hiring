import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.payload, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      return initialInputState;
  }
};

function useInput(validateInputValue) {
  const [state, dispatch] = useReducer(inputStateReducer, initialInputState);

  const enteredValueIsValid = validateInputValue(state.value);
  const hasError = !enteredValueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", payload: event.target.value });
  };

  const valueInputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  //we return function to change states of value and touched
  //and we return if we want to show error nad value
  return {
    value: state.value,
    hasError,
    valueChangeHandler,
    valueInputBlurHandler,
    reset,
  };
}

export default useInput;
