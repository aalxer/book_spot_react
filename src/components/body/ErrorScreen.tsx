import ErrorIcon from '../../images/error-icon-red.png'
import './ErrorScreen.css'

export default function ErrorScreen() {
    return <div className="errorScreenContentContainer">
        <img src={ErrorIcon} alt="error-icon"/>
        <p>Oops! Something went wrong</p>
        <p>reload the page ..</p>
    </div>
}