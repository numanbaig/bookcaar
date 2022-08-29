import { createSlice } from "@reduxjs/toolkit";

import { getRequestedRideBids, getRequestedRideList, requestRide } from "../services/RequestRide";

const initialState = {
    isLoading: false,
    rideList: [],
    rideBids: [],
};
const requestRideSlice = createSlice({
    name: "requestRide",
    initialState,
    reducers: {


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
                state.isLoading = false;
                state.rideBids = action.payload;
            })
            .addCase(getRequestedRideBids.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getRequestedRideBids.fulfilled, (state, action) => {
                state.isLoading = false;
                state.rideBids = action.payload;
            })
    },
});

export default requestRideSlice.reducer;
