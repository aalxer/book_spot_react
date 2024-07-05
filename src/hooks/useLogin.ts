import {useState} from "react";
import {State} from "../types/State";
import {login} from "../domain/Api"
import {UserData} from "../types/UserData";

export const useLogin = () => {

    const [state, setState] = useState<State>("initial");
    const [errorMessageFromServer, setErrorMessage] = useState("");
    const [user, setUser] = useState({} as UserData);

    async function loginThrowApi(username: string, password: string) {

        setState("loading");
        try {
            let response = await login(username, password);

            if (response.ok) {

                let responseObject = await response.json();
                const loggedInUser: UserData = responseObject.user.role === "admin" ? {
                    username: responseObject.user.email,
                    accessToken: responseObject.accessToken,
                    admin: true,
                    userId: responseObject.user.id,
                    nickname: responseObject.user.nickname
                } : {
                    username: responseObject.user.email,
                    accessToken: responseObject.accessToken,
                    admin: false,
                    userId: responseObject.user.id,
                    nickname: responseObject.user.nickname,
                    shoppingCart: responseObject.user.shoppingCart
                };

                setUser(loggedInUser);
                setState("success");
                setErrorMessage("");
            } else {

                setState("error");
                let responseMessage = await response.json();
                setErrorMessage(responseMessage);
            }
        } catch (reject) {
            setState("error");
            setErrorMessage("cannot login please try again !");
        }
    }

    return {state, user, errorMessageFromServer, loginThrowApi}
}