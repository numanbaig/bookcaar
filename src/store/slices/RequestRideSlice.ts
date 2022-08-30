import { createSlice } from "@reduxjs/toolkit";

import {
    //   getRequestedRideBids,
    getRequestedRideList,
    requestRide,
} from "../services/RequestRide";

const initialState = {
    isLoading: false,
    rideList: [],
    myRequests: [],
};
const requestRideSlice = createSlice({
    name: "requestRide",
    initialState,
    reducers: {
        storeRequest: (state, action) => {
            state.myRequests = [...state.myRequests, action.payload];
        },
        rides: (state, action) => {
            state.rideList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestRide.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(requestRide.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(getRequestedRideList.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getRequestedRideList.fulfilled, (state, action) => {
                console.log(action.payload, 'payload');
                state.isLoading = false;
                state.rideList = action.payload;
            })
    },
});
export const { storeRequest, rides } = requestRideSlice.actions;
export default requestRideSlice.reducer;
