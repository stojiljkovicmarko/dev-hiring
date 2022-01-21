import { configureStore } from "@reduxjs/toolkit";

import { developerReducer } from "./dev-slice";
import { uiReducer } from "./ui-slice";

const store = configureStore({
  reducer: {
    developer: developerReducer,
    ui: uiReducer,
  },
});

export default store;
