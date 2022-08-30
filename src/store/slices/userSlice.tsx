import { FamilyRestroomOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

import { createUserWithEmail, loginWithEmail } from "../services/Auth";

const initialState = {
  user: null,
  isLoading: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser(state, action) {
      state.user = action.payload;
    },
    userRemoved(state, action) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserWithEmail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUserWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginWithEmail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { currentUser, userRemoved } = userSlice.actions;

export default userSlice.reducer;
