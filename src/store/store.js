import { configureStore } from "@reduxjs/toolkit";

import { developerReducer } from "./dev-slice";
import { hiredReducer } from "./hired-slice";
import { uiReducer } from "./ui-slice";

const store = configureStore({
  reducer: {
    developer: developerReducer,
    ui: uiReducer,
    hired: hiredReducer,
  },
});

export default store;
