import {createBrowserRouter, redirect} from 'react-router-dom';
import BookDetails from "./screens/BookDetails";
import React from "react";
import HomePageBody from "./screens/Homepage";
import ErrorScreen from "./screens/ErrorScreen";
import AddNewBook from "./components/dashboard/AddNewBook";
import Impressum from "./screens/Impressum";
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
                path: "",
                loader: () => redirect("home")
            },
            {
                path: "/home",
                element: <HomePageBody/>
            },
            {
                path: "/home/:bookId",
                element: <BookDetails/>,
            },
            {
                path: "/impressum",
                element: <Impressum/>
            },
            {
                path: "/dashboard",
                element: <DashboardHome/>
            },
            {
                path: "/dashboard/:bookId",
                element: <UpdateBookContainer/>
            },
            {
                path: "/add",
                element: <AddNewBook/>
            }
        ]
    }
]);