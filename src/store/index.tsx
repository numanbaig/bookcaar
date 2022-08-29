import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import RequestRideSlice from "./slices/RequestRideSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    bookRide: RequestRideSlice,
  },
});
