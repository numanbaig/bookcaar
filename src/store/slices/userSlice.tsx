import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    user: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userAdded(state, action) {
            state.user = action.payload
        },
        userRemoved(state, action) {
            state.user = null
        },
    },
})

export const { userAdded, userRemoved } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer
