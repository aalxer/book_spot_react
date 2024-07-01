import {configureStore} from "@reduxjs/toolkit";
import LoginSlice from "../features/login/loginSlice";

export const store = configureStore({
    reducer: {
        login: LoginSlice
    }
})

type RootState = ReturnType<typeof store.getState>;
export const selectUserNameFromState = (state: RootState) => state.login.user?.username;