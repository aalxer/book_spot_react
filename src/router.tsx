import {createBrowserRouter} from 'react-router-dom';
import BookDetailsContainer from "./components/body/BookDetailsContainer";
import React from "react";
import HomePageBody from "./components/body/HomePageBody";
import ErrorScreen from "./components/body/ErrorScreen";
import AddNewBook from "./components/dashboard/AddNewBook";
import Impressum from "./components/body/Impressum";
import DashboardHome from "./components/dashboard/DashboardHome";
import UpdateBookContainer from "./components/dashboard/UpdateBookContainer";
import App from "./components/App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorScreen/>,
        children: [
            {
                path: "/home",
                element: <HomePageBody/>
            },
            {
                path: "/home/:bookId",
                element: <BookDetailsContainer/>
            },
            {
                path: "/impressum",
                element: <Impressum/>
            },
            {
                path: "/dashboard",
                element: <DashboardHome/>,
            },
            {
                path: "add",
                element: <AddNewBook/>
            }
        ]
    },
    {
        path: "/update",
        element: <UpdateBookContainer/>
    },
    {
        path: "/book",
        element: <BookDetailsContainer/>
    }
]);