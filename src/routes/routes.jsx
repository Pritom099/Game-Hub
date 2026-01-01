import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Browse from "../pages/Browse";
import About from "../pages/About";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import GameDetails from "../pages/GameDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element:<Home></Home>,
            },
            {
                path:'/browse',
                element: <Browse></Browse>,
            },
            {
                path:'/about',
                element:<About></About>,
            },
            {
                path: '/signin',
                element:<Signin></Signin>,
            },
            {
                path:'/signup',
                element:<Signup></Signup>,
            },
            {
                path: '/game/:id',
                element:<GameDetails></GameDetails>,
            },
        ],
    }
])