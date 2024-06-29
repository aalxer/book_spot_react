import {useState} from "react";
import {State} from "../types/State";
import {login} from "../domain/Api"

export const useLogin = () => {
    const [state, setState] = useState<State>("initial");
    const [token, setToken] = useState("");
    const [errorMessageFromServer, setErrorMessage] = useState("");

    async function loginThrowApi(username: string, password: string) {

        setState("loading");
        try {
            let response = await login(username, password);

            if(response.ok) {
                setState("success");
                let responseObject = await response.json();
                setToken(responseObject.accessToken);
                setErrorMessage("")
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

    return {state, token, errorMessageFromServer, loginThrowApi}
}