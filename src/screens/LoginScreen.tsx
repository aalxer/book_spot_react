import UsernameIcon from '../assets/icons/username-icon-pink.png'
import PasswordIcon from '../assets/icons/password-icon-pink.png'
import '../styles/LoginScreen.css'
import BackButton from "../components/body/BackButton";

export default function LoginScreen() {
    return <div className="loginMainContainer">
        <BackButton/>
        <div className="loginContentContainer">
            <form className="loginFormContainer">
                <p className="loginTitle">sign in</p>
                <div className="loginFormInputContainer">
                    <img src={UsernameIcon} alt="username-icon"/>
                    <input type="text" placeholder="username"/>
                </div>
                <p className="inputValidationText"></p>
                <div className="loginFormInputContainer">
                    <img src={PasswordIcon} alt="password-icon"/>
                    <input type="password" placeholder="password"/>
                </div>
                <p className="inputValidationText"></p>
                <div className="loginFormLoginContainer">
                    <p>Do you need help ?</p>
                    <button>login</button>
                </div>
            </form>
        </div>
    </div>
}