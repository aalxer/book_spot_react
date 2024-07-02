import {createBrowserRouter, redirect} from 'react-router-dom';
import BookDetails from "./screens/shop/BookDetails";
import React from "react";
import Homepage from "./screens/shop/Homepage";
import ErrorScreen from "./screens/ErrorScreen";
import AddNewBook from "./screens/dashboard/AddNewBook";
import Impressum from "./screens/shop/Impressum";
import Dashboard from "./screens/dashboard/Dashboard";
import UpdateBook from "./screens/dashboard/UpdateBook";
import App from "./components/App";
import LoginScreen from "./screens/LoginScreen";
import DashboardMainComponent from "./components/DashboardMainComponent";
import ShopMainComponent from "./components/ShopMainComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorScreen/>,
        children: [
            {
                path: "",
                loader: () => redirect("/home")
            },
            {
                path: "/login",
                element: <LoginScreen/>
            },
            {
                path: "/home",
                element: <ShopMainComponent/>,
                children: [
                    {
                        path: "",
                        loader: () => redirect("/home/en")
                    },
                    {
                        path: "/home/en",
                        element: <Homepage/>
                    },
                    {
                        path: "/home/page/:page",
                        element: <Homepage/>
                    },
                    {
                        path: "/home/:bookId",
                        element: <BookDetails/>,
                    },
                    {
                        path: "/home/impressum",
                        element: <Impressum/>
                    },
                ]
            },
            {
                path: "/dashboard",
                element: <DashboardMainComponent/>,
                children: [
                    {
                        path: "",
                        loader: () => redirect("/dashboard/home")
                    },
                    {
                        path: "/dashboard/home",
                        element: <Dashboard/>
                    },
                    {
                        path: "/dashboard/:bookId",
                        element: <UpdateBook/>
                    },
                    {
                        path: "/dashboard/add",
                        element: <AddNewBook/>
                    }
                ]
            },
            {
                path: "/error",
                element: <ErrorScreen/>
            }
        ]
    }
]);
