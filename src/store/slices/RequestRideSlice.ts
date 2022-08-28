import { FamilyRestroomOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

import { requestRide } from "../services/RequestRide";

const initialState = {
    isLoading: false,
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
    },
});

// export const { u } = requestRideSlice.actions;

export default requestRideSlice.reducer;
