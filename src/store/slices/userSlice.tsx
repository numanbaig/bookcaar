import { FamilyRestroomOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

import { createUserWithEmail, loginWithEmail } from "../services/Auth";

const initialState = {
  user: null,
  isLoading: false,
  errorMessage: null,
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
        state.errorMessage = null;
      })
      .addCase(createUserWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createUserWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      })
      .addCase(loginWithEmail.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.isLoading = false;
          state.errorMessage = action.error.message;
      });
  },
});

export const { currentUser, userRemoved } = userSlice.actions;

export default userSlice.reducer;
