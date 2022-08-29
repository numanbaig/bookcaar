import { createSlice } from "@reduxjs/toolkit";

import {
  getRequestedRideBids,
  getRequestedRideList,
  requestRide,
} from "../services/RequestRide";

const initialState = {
  isLoading: false,
  rideList: [],
  rideBids: [],
  myRequests: [],
};
const requestRideSlice = createSlice({
  name: "requestRide",
  initialState,
  reducers: {
    storeRequest: (state: any, action: any) => {
      state.myRequests = [...state.myRequests, action.payload];
    },
    extraReducers: (builder) => {
      builder
        .addCase(requestRide.pending, (state: any) => {
          state.isLoading = true;
        })
        .addCase(requestRide.fulfilled, (state: any) => {
          state.isLoading = false;
        })
        .addCase(getRequestedRideList.pending, (state: any) => {
          state.isLoading = true;
        })
        .addCase(getRequestedRideList.fulfilled, (state: any, action) => {
          state.isLoading = false;
          state.rideList = action.payload;
        })
        .addCase(getRequestedRideBids.pending, (state: any) => {
          state.isLoading = true;
        })
        .addCase(getRequestedRideBids.fulfilled, (state: any, action) => {
          state.isLoading = false;
          state.rideBids = action.payload;
        });
    },
  },
});
export const { storeRequest } = requestRideSlice.actions;
export default requestRideSlice.reducer;
