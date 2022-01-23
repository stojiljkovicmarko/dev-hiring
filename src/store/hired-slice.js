import { createSlice } from "@reduxjs/toolkit";

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
        state.changedHired = true;
      } else {
        state.hired.push(action.payload);
        state.changedHired = true;
      }
    },
    replaceHiredData(state, action) {
      state.hired = action.payload;
    },
  },
});

export const hiredReducer = hiredSlice.reducer;
export const hiredActions = hiredSlice.actions;
export default hiredSlice;
