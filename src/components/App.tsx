import Header from "./header/Header";
import HomePageBody from "./body/HomePageBody";
import Footer from "./footer/Footer";
import React from "react";
import './App.css'

export default function App() {
    return <div className="main-content-container">
        <Header/>
        <HomePageBody/>
        <Footer/>
    </div>
}