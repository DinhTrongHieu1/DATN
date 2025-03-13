import React from 'react'
import classes from './Navbar.module.css'
export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <div className={classes.search_box}>
                <input type="text" placeholder="Search term" />
                <button><i className="fas fa-search"></i></button>
            </div>

            <div className={classes.icons}>
                <i className="fas fa-moon"></i>
                <i className="fas fa-bell"></i>


                <div className={classes.dropdown}>
                    <i className="fas fa-globe"></i>

                </div>
            </div>
        </div>
    )
}
