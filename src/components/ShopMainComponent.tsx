import ScrollToTop from "../utils/ScrollToTop";
import Header from "./header/Header";
import {Navigate, Outlet} from "react-router-dom";
import Footer from "./footer/Footer";
import React from "react";
import {useSelector} from "react-redux";
import {selectUserFromState} from "../app/store";
import Homepage from "../screens/shop/Homepage";

export default function ShopMainComponent() {

    const user = useSelector(selectUserFromState);
    const isCustomer = !!(user && !user.admin);
    const isAdmin = !!(user && user.admin);

    ScrollToTop();

    return isCustomer ?
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

        : isAdmin ?
            <Navigate to="/dashboard" replace/>

            : <>
                <Header/>
                <Homepage/>
                <Footer/>
            </>
}