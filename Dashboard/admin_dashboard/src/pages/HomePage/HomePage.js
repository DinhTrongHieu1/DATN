import React from 'react'
import Sidebar from '../../layouts/SideBar/Sidebar'
import Navbar from '../../layouts/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import classes from './HomePage.module.css'

export default function HomePage() {
    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className={classes.container}>

                    <Outlet />

                </div>
            </div>

        </div>
    )
}
