import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";
import './App.css'
import DisplayBookContainer from "./body/DisplayBookContainer";
import HomePageBody from "./body/HomePageBody"

export default function App() {
    return <div className="main-content-container">
        <Header/>
        <HomePageBody/>
        <Footer/>
    </div>
}