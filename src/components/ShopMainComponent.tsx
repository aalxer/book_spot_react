import ScrollToTop from "../utils/ScrollToTop";
import Header from "./shared/header/Header";
import {Navigate, Outlet} from "react-router-dom";
import Footer from "./shared/Footer";
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
        // Customer
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

        // Admin
        : isAdmin ?
            <Navigate to="/dashboard" replace/>

            // Gast
            : <>
                <Header/>
                <Homepage/>
                <Footer/>
            </>
}