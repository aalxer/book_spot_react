import LikeIcon from '../../images/like-icon-outlined.png'
import './LikeCounterContainer.css'
import {useState} from "react";

export default function LikeCounter() {

    const [counter, setCounter] = useState(0);

    const increment = function () {
        // setzt den neuen Counter und die Komponente wird automatisch neu gerendert
        setCounter(counter + 1)
    }

    return <div className="like-counter-container">
        <img onClick={increment} src={LikeIcon} alt="like-icon"/>
        <p>{counter === 0 ? "" : counter}</p>
    </div>
}