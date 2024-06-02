import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";
import './App.css'
import DisplayBookContainer from "./body/DisplayBookContainer";

export default function App() {
    return <div className="main-content-container">
        <Header/>
        <DisplayBookContainer/>
        <Footer/>
    </div>
}