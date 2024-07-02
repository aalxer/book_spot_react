import ScrollToTop from "../utils/ScrollToTop";
import Header from "./shared/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./shared/Footer";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectUserFromState} from "../app/store";
import LoginScreen from "../screens/LoginScreen";

export default function DashboardMainComponent() {

    const user = useSelector(selectUserFromState);
    const isAdmin = user && user.admin ? true : false;

    ScrollToTop();

    return isAdmin ?
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
        : <LoginScreen />

}