import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducer: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    closeNotification(state) {
        state.notification = null;
    }
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;

export default uiSlice;
