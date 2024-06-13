import LikeIcon from '../../assets/images/like-icon-outlined.png'
import '../../styles/LikeCounterContainer.css'
import {useState} from "react";
import {useCounter} from "../../hooks/useCounter";

export default function LikeCounter() {

    const {counter, increment} = useCounter(0);

    return <div className="like-counter-container">
        <img onClick={increment} src={LikeIcon} alt="like-icon"/>
        <p>{counter === 0 ? "" : counter}</p>
    </div>
}