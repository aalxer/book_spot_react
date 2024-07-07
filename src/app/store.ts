import {configureStore} from "@reduxjs/toolkit";
import LoginSlice from "../features/login/loginSlice";
import ShoppingCart from "../features/shoppingCart/ShoppingCartSlice";
import {updateUserShoppingCart} from "../domain/Api";

export const store = configureStore({
    reducer: {
        login: LoginSlice,
        shoppingCart: ShoppingCart
    }
})

store.subscribe(() => {
    if (store.getState().login.user != null && !store.getState().login.user!.admin) {
        console.log("updating user products in DB .. ");
        updateUserShoppingCart(store.getState().login.user!.userId, store.getState().shoppingCart);
        // TODO Error handling
    }
})

type RootState = ReturnType<typeof store.getState>;
export const selectUserFromState = (state: RootState) => state.login.user;
export const selectProduktsFromState = (state: RootState) => state.shoppingCart;
export const selectItemsNumberFromState = (state: RootState) => state.shoppingCart.reduce((total, item) => total + item.count, 0);