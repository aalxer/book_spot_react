import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";
import HomePageBody from "../screens/Homepage"
import '../styles/App.css'
import {Outlet} from "react-router-dom";

export default function App() {

    return <div className="main-content-container">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}