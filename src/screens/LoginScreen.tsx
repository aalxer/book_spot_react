import '../styles/LoginScreen.css'
import BackButton from "../components/body/BackButton";
import UsernameIcon from "../assets/icons/username-icon-pink.png";
import PasswordIcon from "../assets/icons/password-icon-pink.png";
import React, {useEffect, useState} from "react";
import {useInputsValidate} from "../hooks/useValidate";
import {useLogin} from "../hooks/useLogin";
import InfoText from "../components/login/InfoText";
import {useNavigate} from "react-router-dom";
import {loginSuccess} from "../features/login/loginSlice";
import {useDispatch} from "react-redux";

export default function LoginScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {errorsMap, validate} = useInputsValidate();
    const {state, user, errorMessageFromServer, loginThrowApi} = useLogin();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (state === "success") {
            handleSuccessLogin();
        }
    }, [state])

    function getLoginForm() {
        return <div className="loginContentContainer">
            <form onSubmit={(event) => {
                handleLogin(event)
            }} className="loginFormContainer">
                <p className="loginTitle">sign in</p>
                {
                    errorMessageFromServer ?
                        <InfoText displaySuccessIcon={false} displayErrorIcon={true} text={errorMessageFromServer}/>
                        : ""
                }
                <div className="loginFormInputContainer">
                    <img src={UsernameIcon} alt="username-icon"/>
                    <input type="text" placeholder="email" value={username}
                           className={errorsMap.has("username") ? "fieldNotFilled" : ""}
                           onChange={(event) => {
                               setUsername(event.target.value);
                           }}/>
                </div>
                <p className="inputValidationText">{errorsMap.get("username")}</p>
                <div className="loginFormInputContainer">
                    <img src={PasswordIcon} alt="password-icon"/>
                    <input type="password" placeholder="password" value={password}
                           className={errorsMap.has("password") ? "fieldNotFilled" : ""}
                           onChange={(event) => {
                               setPassword(event.target.value);
                           }}/>
                </div>
                <p className="inputValidationText">{errorsMap.get("password")}</p>
                <div className="loginFormLoginContainer">
                    <p>Do you need help ?</p>
                    <button type={"submit"}>login</button>
                </div>
            </form>
        </div>
    }

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let inputsMap: Map<string, string> = new Map<string, string>();
        inputsMap.set("username", username);
        inputsMap.set("password", password);

        if (validate(inputsMap)) {
            loginThrowApi(username, password);
        }

    }

    function handleSuccessLogin() {

        // user in shop speichern:
        dispatch(loginSuccess(user));
        navigate("/");
    }

    return <div className="loginMainContainer">
        <BackButton/>
        {getLoginForm()}
    </div>
}