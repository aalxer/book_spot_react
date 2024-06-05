import {createBrowserRouter} from 'react-router-dom';
import DisplayBookContainer from "./components/body/DisplayBookContainer";
import React from "react";
import HomePageBody from "./components/body/HomePageBody";
import ErrorScreen from "./components/body/ErrorScreen";
import AddNewBook from "./components/body/AddNewBook";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePageBody/>
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
    }
]);