import React from 'react'
import classes from './layout.module.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import NavEnum from "../common/emun/navEnum";
export default function Footer() {
    return (
        <div className={classes.footer_bg}>
            <div className='grid wide'>
                <div>
                    <div className={classes.footer_container}>
                        <div className={classes.footer_nav}>
                            <img className={classes.footer_logo} src={logo} alt='logo' />
                            <p>
                                lorem ipsum dolar sit amel, consectetur adipiscing elit, ut elit telluis
                            </p>
                        </div>
                        <div className={classes.footer_nav}>
                            <h1>
                                Navigation
                            </h1>
                            <div>
                                <Link to={NavEnum.HOME} className={classes.nav_item}>
                                    <h4>Home</h4>
                                </Link>
                                <Link to={NavEnum.LOCAL_DISHES} className={classes.nav_item}>
                                    <h4>Local Dishes</h4>
                                </Link>
                                <Link to={NavEnum.DINING_PLACES} className={classes.nav_item}>
                                    <h4>Dining Places</h4>
                                </Link>
                                <Link to={NavEnum.BLOGS_AND_NEWS} className={classes.nav_item}>
                                    <h4>Blogs & News</h4>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.footer_nav}>
                            <h1>Service</h1>
                            <div>
                                <Link to={NavEnum.HOME} className={classes.nav_item}>
                                    <h4>Home</h4>
                                </Link>
                                <Link to={NavEnum.LOCAL_DISHES} className={classes.nav_item}>
                                    <h4>Contact</h4>
                                </Link>
                                <Link to={NavEnum.BLOGS_AND_NEWS} className={classes.nav_item}>
                                    <h4>Blogs & News</h4>
                                </Link>
                                <Link to={NavEnum.BLOGS_AND_NEWS} className={classes.nav_item}>
                                    <h4>404</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}
