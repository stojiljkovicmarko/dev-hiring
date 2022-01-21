import { createSlice } from "@reduxjs/toolkit";

const developerInitialState = {
  developers: [
    {
      id: 970748,
      name: "Marko",
      email: "asd@asd.com",
      phone: "0631234567",
      location: "Belgrade",
      img: "",
      pricePerHour: "20",
      technology: "JavaScript",
      description: "Some description",
      yearsOfExp: "2",
      nativeLanguage: "Serbian",
      linkedin: "",
    },
    {
      id: 227806,
      name: "Milan",
      email: "asd@asd.com",
      phone: "0631234567",
      location: "Belgrade",
      img: "",
      pricePerHour: "40",
      technology: "Java",
      description: "Some description that is more or lesss...",
      yearsOfExp: "2",
      nativeLanguage: "English",
      linkedin: "",
    },
    {
      id: 653884,
      name: "Jelena",
      email: "asd@asd.com",
      phone: "0631234567",
      location: "Belgrade",
      img: "",
      pricePerHour: "20",
      technology: "JavaScript",
      description: "Some description",
      yearsOfExp: "2",
      nativeLanguage: "Serbian",
      linkedin: "",
    },
  ],
  changedDevList: false,
};

const developerSlice = createSlice({
  name: "developer",
  initialState: developerInitialState,
  reducers: {
    addDeveloper(state, action) {
      state.developers.push(action.payload);
    },
    editDeveloper(state, action) {
      const existingDevIndex = state.developers.findIndex(
        (dev) => dev.id === action.payload.id
      );
      state.developers[existingDevIndex] = action.payload;
    },
    removeDeveloper(state, action) {
      state.developers = state.developers.filter(
        (dev) => dev.id !== action.payload
      );
    },
    replaceDeveloperList(state, action) {
      state.developers = action.payload;
    },
  },
});

export const developerReducer = developerSlice.reducer;
export const developerActions = developerSlice.actions;
export default developerSlice;
