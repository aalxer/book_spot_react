import {useState} from "react";
import {State} from "../types/State";
import {logout} from "../features/login/loginSlice";
import {useDispatch} from "react-redux";

export const useLogout = () => {

    const [state, setState] = useState<State>("initial");
    const dispatch = useDispatch();

    function logoutThrowRedux() {
        dispatch(logout());
    }

    return {state, logoutThrowRedux}
}