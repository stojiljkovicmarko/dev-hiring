import { createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";

const hiredInitialState = {
  hired: [],
  changedHired: false,
};

const hiredSlice = createSlice({
  name: "hired",
  initialState: hiredInitialState,
  reducers: {
    addHiredDates(state, action) {
      const existingIndex = state.hired.findIndex((dev) => {
        return dev.id === action.payload.id;
      });
      if (existingIndex !== -1) {
        state.hired[existingIndex].dates = [
          ...state.hired[existingIndex].dates,
          ...action.payload.dates,
        ];
      } else {
        state.hired.push(action.payload);
      }
    },
  },
});

export const hiredReducer = hiredSlice.reducer;
export const hiredActions = hiredSlice.actions;
export default hiredSlice;
