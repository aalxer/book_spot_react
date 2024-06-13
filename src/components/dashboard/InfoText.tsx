import InfoIcon from "../../assets/icons/info-icon-blue.png"
import SuccessIcon from "../../assets/icons/success-icon-green.png"
import ErrorIcon from "../../assets/icons/not-success-icon-red.png"
import "../../styles/InfoText.css"

interface InfoTextProps {
    displaySuccessIcon: boolean,
    displayErrorIcon: boolean,
    text: string
}

export default function InfoText(props:InfoTextProps) {
    return <div className="infoTextContainer">
        {
            props.displaySuccessIcon ? <img src={SuccessIcon} alt="success-icon"/>
                : props.displayErrorIcon ? <img src={ErrorIcon} alt="error-icon"/>
                    : <img src={InfoIcon} alt="info-icon"/>
        }
        <p>{props.text}</p>
    </div>
}