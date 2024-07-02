import {configureStore} from "@reduxjs/toolkit";
import LoginSlice from "../features/login/loginSlice";
import {Book} from "../types/Book";

export const store = configureStore({
    reducer: {
        login: LoginSlice
    }
})

type RootState = ReturnType<typeof store.getState>;
export const selectUserFromState = (state: RootState) => state.login.user;
export const selectProduktsFromState = (state: RootState) => state.login.user!.books!.length > 0 ? state.login.user!.books : [] as Book[] ;