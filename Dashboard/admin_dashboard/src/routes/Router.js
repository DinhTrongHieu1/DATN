import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import Category from '../features/Category/Category';
import User from '../features/User/User';
import Restaurant from '../features/Restaurant/Restaurant';
import Food from '../features/Food/Food';
import Post from '../features/Post/Post';
const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/categories",
                element: <Category />,
            },
            {
                path: "/users",
                element: <User />,
            },
            {
                path: "/restaurants",
                element: <Restaurant />,
            },
            {
                path: "/foods",
                element: <Food />,
            },
            {
                path: "/posts",
                element: <Post />,
            },
        ]
    },

    // {
    //     path: "/products",
    //     element: <Product />,
    //     children: [

    //     ]
    // },

]);

export default Router;