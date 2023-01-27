import tripsSlice from "./containers/tripsSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tripsList: tripsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
