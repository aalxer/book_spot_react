import ScrollToTop from "../utils/ScrollToTop";
import Header from "./header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer";
import React from "react";

export default function ShopMainComponent() {
    ScrollToTop()

    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}