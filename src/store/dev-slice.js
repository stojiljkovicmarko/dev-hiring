import { createSlice } from "@reduxjs/toolkit"

const developerInitialState = {
    developers: [],
    totalDevelopers: 0,
    changedDevList: false,
}

const developerSlice = createSlice({
    name: "developer",
    initialState: developerInitialState,
    reducers: {
        addDeveloper() {},
        editDeveloper() {},
        removeDeveloper() {},
        replaceDeveloperList() {},
    }
});


export const developerReducer = developerSlice.reducer;
export const developerActions = developerSlice.actions;
export default developerSlice;