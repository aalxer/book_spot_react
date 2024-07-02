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
                const loggedInUser: UserData = {
                    username: responseObject.user.email,
                    accessToken: responseObject.accessToken,
                    admin: responseObject.user.role === "admin",
                    userId: responseObject.user.id,
                    nickname: responseObject.user.nickname,
                    books: [{title: "test", isbn: "883278327"}]
                }
                setState("success");
                setUser(loggedInUser);
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