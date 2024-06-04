import {createBrowserRouter} from 'react-router-dom';
import DisplayBookContainer from "./components/body/DisplayBookContainer";
import React from "react";
import HomePageBody from "./components/body/HomePageBody";

export const routes = createBrowserRouter([
    {path: "/", element: <HomePageBody/>},
    {path: "/book", element: <DisplayBookContainer/>}
]);