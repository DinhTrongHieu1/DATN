import React, { } from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <div className={classes.header}>
                <Link Link to={'/'}>LOGO</Link>
                <button className="menu-button" >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            <div>
                <ul>
                    <NavLink className={({ isActive }) => isActive ? `${classes.sidebar_item} ${classes.active}` : `${classes.sidebar_item}`} to="/"> <i className="fa-solid fa-house"></i><li > Trang thống kê</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${classes.sidebar_item} ${classes.active}` : `${classes.sidebar_item}`} to="/categories"><i className="fa-solid fa-list"></i> <li >Quản lý danh mục</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${classes.sidebar_item} ${classes.active}` : `${classes.sidebar_item}`} to="/users"><i className="fa-solid fa-user"></i> <li >Quản lý người dùng</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${classes.sidebar_item} ${classes.active}` : `${classes.sidebar_item}`} to="/foods"><i className="fa-solid fa-bowl-food"></i><li > Quản lý món ăn</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${classes.sidebar_item} ${classes.active}` : `${classes.sidebar_item}`} to="/restaurants"><i className="fa-solid fa-utensils"></i><li > Quản lý nhà hàng</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${classes.sidebar_item} ${classes.active}` : `${classes.sidebar_item}`} to="/posts"><i className="fa-solid fa-signs-post"></i><li > Quản lý bài post</li></NavLink>
                </ul>
            </div>


        </div>
    )
}
