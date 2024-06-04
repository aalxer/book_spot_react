import Header from "./header/Header";
import Footer from "./footer/Footer";
import React from "react";
import './App.css'
import DisplayBookContainer from "./body/DisplayBookContainer";
import HomePageBody from "./body/HomePageBody"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

export default function App() {

    const routers = createBrowserRouter([
        {path: "/", element: <App/>},
        {path: "/book", element: <DisplayBookContainer/>}
    ]);

    return <div className="main-content-container">
        <Header/>
        <DisplayBookContainer/>
        <Footer/>
    </div>
}