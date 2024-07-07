import {Book} from "../../types/Book";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ShoppingCartState} from "../../types/ShoppingCartState";

const initialState:ShoppingCartState[] = [];

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: initialState,
    reducers: {
        updateShoppingCartInitialState: (state, action:PayloadAction<ShoppingCartState[]>) => {
            return action.payload;
        },

        addItemsToShoppingCart: (state, action: PayloadAction<Book>) => {
            const existingItem = state.find(item => item.book.id === action.payload.id);
            existingItem ? existingItem.count += 1 : state.push({
                book: action.payload,
                count: 1
            })

        },

        removeItemFromShoppingCart: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.book.id !== action.payload);
        },

        clearShoppingCart: (state) => {
            return [];
        }
    }
})

export const {addItemsToShoppingCart, removeItemFromShoppingCart, updateShoppingCartInitialState, clearShoppingCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;