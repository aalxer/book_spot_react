import {Book} from "./Book";

export interface UserData {
    username: string,
    accessToken: string,
    admin: boolean,
    userId: number,
    nickname?: string,
    books?: Book[],
}