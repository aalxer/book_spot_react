import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";
import './App.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "../routes";

export default function App() {

    return <div className="main-content-container">
        <Header/>
        <RouterProvider router={routes}/>
        <Footer/>
    </div>
}