import {configureStore} from "@reduxjs/toolkit";
import LoginSlice from "../features/login/loginSlice";
import ShoppingCart from "../features/shoppingCart/ShoppingCartSlice";

export const store = configureStore({
    reducer: {
        login: LoginSlice,
        shoppingCart: ShoppingCart
    }
})

type RootState = ReturnType<typeof store.getState>;
export const selectUserFromState = (state: RootState) => state.login.user;
export const selectProduktsFromState = (state: RootState) => state.shoppingCart;