import LikeIcon from '../../images/like-icon-outlined.png'
import './LikeCounterContainer.css'
import {useState} from "react";
import {useCounter} from "../../domain/Counter";

export default function LikeCounter() {

    const {counter, increment} = useCounter(0);

    return <div className="like-counter-container">
        <img onClick={increment} src={LikeIcon} alt="like-icon"/>
        <p>{counter === 0 ? "" : counter}</p>
    </div>
}