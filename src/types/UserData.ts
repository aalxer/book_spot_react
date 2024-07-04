import {ShoppingCartState} from "./ShoppingCartState";


export interface UserData {
    username: string,
    accessToken: string,
    admin: boolean,
    userId: number,
    nickname?: string,
    shoppingCart?: ShoppingCartState[]
}