import LikeIcon from '../../images/like-icon-outlined.png'
import './LikeCounterContainer.css'

export default function LikeCounter() {
    return <div className="like-counter-container">
        <img src={LikeIcon} alt="like-icon"/>
        <p>0</p>
    </div>
}