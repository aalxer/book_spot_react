import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserData} from "../../types/UserData";
import {LoginState} from "../../types/LoginState";

const initialState:LoginState = {
    user: null
}

createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        login: (state, action:PayloadAction<UserData>) => {
            initialState.user = action.payload;
        },

        logout: (state) => {
            initialState.user = null;
        }
    }
})
