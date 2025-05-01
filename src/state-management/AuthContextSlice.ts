import { User } from "@/api/UserApi";
import { createSlice } from "@reduxjs/toolkit";

const initLoggedInUser = { user_id: '', username: '', password: '' }

interface AuthContextState {
    isLoggedIn: boolean,
    loggedInUser: User
}

const initialState: AuthContextState = {
    isLoggedIn: false,
    loggedInUser: { user_id: "", username: "", password: "" }
}

const authContextSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthContext: (state, action) => {
            state.isLoggedIn = true
            state.loggedInUser = action.payload
            localStorage.setItem('user_id', state.loggedInUser.user_id)
        },
        clearAuthContext: (state) => {
            state.isLoggedIn = false
            state.loggedInUser = initLoggedInUser
            localStorage.removeItem('user_id')
        },
    }
})

export const { setAuthContext, clearAuthContext } = authContextSlice.actions
export default authContextSlice.reducer
