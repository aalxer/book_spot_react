import {Book} from "../../types/Book";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    shoppingCart : [] as Book[]
}

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: initialState,
    reducers: {
        addItemsToShoppingCart: (state, action:PayloadAction<Book>) => {
            state.shoppingCart.push(action.payload);
        },
        removeItemFromShoppingCart: (state, action:PayloadAction<number>) => {
            // TODO book löschen
        }

    }
})

export const {addItemsToShoppingCart, removeItemFromShoppingCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;