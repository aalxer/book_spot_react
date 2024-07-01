import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserData} from "../../types/UserData";
import {LoginState} from "../../types/LoginState";

const initialState:LoginState = {
    user: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action:PayloadAction<UserData>) => {
            state.user = action.payload;
        },

        logoutSuccess: (state) => {
            state.user = null;
        }
    }
})

export const {loginSuccess, logoutSuccess} = loginSlice.actions;
export default loginSlice.reducer;
