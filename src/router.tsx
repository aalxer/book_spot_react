import {createBrowserRouter, redirect} from 'react-router-dom';
import BookDetails from "./screens/BookDetails";
import React from "react";
import HomePageBody from "./screens/Homepage";
import ErrorScreen from "./screens/ErrorScreen";
import AddNewBook from "./screens/AddNewBook";
import Impressum from "./screens/Impressum";
import Dashboard from "./screens/Dashboard";
import UpdateBook from "./screens/UpdateBook";
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
                path: "/home/page/:page",
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
                element: <Dashboard/>
            },
            {
                path: "/dashboard/:bookId",
                element: <UpdateBook/>
            },
            {
                path: "/add",
                element: <AddNewBook/>
            },
            {
                path: "/error",
                element: <ErrorScreen/>
            }
        ]
    }
]);