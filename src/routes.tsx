import {createBrowserRouter} from 'react-router-dom';
import DisplayBookContainer from "./components/body/DisplayBookContainer";
import React from "react";
import HomePageBody from "./components/body/HomePageBody";
import ErrorScreen from "./components/body/ErrorScreen";
import AddNewBook from "./components/body/AddNewBook";
import Impressum from "./components/body/Impressum";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePageBody/>,
        errorElement: <ErrorScreen/>
    },
    {
        path: "/book",
        element: <DisplayBookContainer/>
    },
    {
        path: "/error",
        element: <ErrorScreen/>
    },
    {
        path: "/add",
        element: <AddNewBook/>
    },
    {
        path: "/impressum",
        element: <Impressum/>
    }
]);