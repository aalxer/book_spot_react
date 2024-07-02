import React from "react";
import '../styles/App.css'
import {Navigate, Outlet} from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import {useSelector} from "react-redux";
import {selectUserFromState} from "../app/store";

export default function App() {

    const user = useSelector(selectUserFromState);

    ScrollToTop()

    return <div className="main-content-container">
        {user && user.admin && <Navigate to="/dashboard" replace/>}
        <Outlet/>
    </div>
}