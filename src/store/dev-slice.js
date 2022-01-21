import { createSlice } from "@reduxjs/toolkit";

const developerInitialState = {
  developers: [],
  changedDevList: false,
};

const developerSlice = createSlice({
  name: "developer",
  initialState: developerInitialState,
  reducers: {
    addDeveloper(state, action) {
      state.developers.push(action.payload);
      state.changedDevList = true;
    },
    editDeveloper(state, action) {
      const existingDevIndex = state.developers.findIndex(
        (dev) => dev.id === action.payload.id
      );
      state.developers[existingDevIndex] = action.payload;
      state.changedDevList = true;
    },
    removeDeveloper(state, action) {
      state.developers = state.developers.filter(
        (dev) => dev.id !== action.payload
      );
      state.changedDevList = true;
    },
    replaceDeveloperList(state, action) {
      state.developers = action.payload;
    },
  },
});

export const developerReducer = developerSlice.reducer;
export const developerActions = developerSlice.actions;
export default developerSlice;
