import {ShoppingCartState} from "./ShoppingCartState";

export interface OrderDetails {
    name?: string,
    email: string,
    address: string,
    items: number,
    amount: number,
    books: ShoppingCartState[]
}