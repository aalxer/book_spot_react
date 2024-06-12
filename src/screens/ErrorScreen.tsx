import ErrorIcon from '../images/error-icon-red.png'
import './ErrorScreen.css'
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export default function ErrorScreen() {

    const error = useRouteError();
    const errorMessage = isRouteErrorResponse(error) ?
        error.statusText : error instanceof Error ? error.message :
            "An unknown error occurred";

    return <div className="errorScreenContentContainer">
        <img src={ErrorIcon} alt="error-icon"/>
        <p>Oops! Something went wrong</p>
        <p>{errorMessage}</p>
    </div>
}