import { FamilyRestroomOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

import { requestRide } from "../services/RequestRide";

const initialState = {
  isLoading: false,
  myRequests: [],
};
const requestRideSlice: any = createSlice({
  name: "requestRide",
  initialState,
  reducers: {
    storeRequest: (state: any, action: any) => {
      state.myRequests = [...state.myRequests, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestRide.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(requestRide.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const { storeRequest } = requestRideSlice.actions;
// export const { u } = requestRideSlice.actions;

export default requestRideSlice.reducer;
