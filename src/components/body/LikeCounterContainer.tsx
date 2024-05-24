import LikeIcon from '../../images/like-icon-outlined.png'
import './LikeCounterContainer.css'

export default function LikeCounter() {

    let counter: number = 0;

    const increment = function () {
        counter += 1;
        //console.log("Counter incremented: ", counter);
    }

    return <div className="like-counter-container">
        <img onClick={increment} src={LikeIcon} alt="like-icon"/>
        <p>{counter}</p>
    </div>
}