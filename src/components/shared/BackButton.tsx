import BackIcon from "../../assets/icons/back-icon-pink.png"
import "../../styles/BackButton.css"
import {useNavigate} from "react-router-dom";

export default function BackButton() {

    const navigate = useNavigate();

    return <div onClick={() => navigate(-1)} className="back-btn-container">
        <img src={BackIcon} alt="back-icon"/>
        <p>Back</p>
    </div>
}