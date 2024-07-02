import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";
import '../styles/App.css'
import {Outlet} from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

export default function App() {
    ScrollToTop()

    return <div className="main-content-container">
        <Outlet/>
    </div>
}