import React from "react";
import './LoadingContainer.css'

export default function LoadingContainer() {
    return <div className="LoaderContentContainer">
        <div className="loader"></div>
        <p className={"stateText"}>loading</p>
    </div>
}