import { User } from "@/api/UserApi";
import { createSlice } from "@reduxjs/toolkit";

const initLoggedInUser: User = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : { user_id: '', username: '' }
const initIsLoggedIn = localStorage.getItem('user') ? true : false

interface AuthContextState {
    isLoggedIn: boolean,
    loggedInUser: User
}

const initialState: AuthContextState = {
    isLoggedIn: initIsLoggedIn,
    loggedInUser: initLoggedInUser
}

const authContextSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthContext: (state, action) => {
            state.isLoggedIn = true
            state.loggedInUser = action.payload
            localStorage.setItem('user', JSON.stringify(state.loggedInUser))
        },
        clearAuthContext: (state) => {
            state.isLoggedIn = false
            state.loggedInUser = initLoggedInUser
            localStorage.removeItem('user')
        },
    }
})

export const { setAuthContext, clearAuthContext } = authContextSlice.actions
export default authContextSlice.reducer
