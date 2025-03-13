import React from 'react'
import classes from './Restaurant.module.css'

export default function RestaurantItem(props) {
    const { image_url, title } = props.data;
    return (
        <div onDragStart={(e) => e.preventDefault()} className={`${classes.item_container}`}>
            <div style={{
                backgroundImage: `url(${image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.item_img}>
                <h1 className={classes.item_title}>{title}</h1>
            </div>

            <div className={classes.item_content}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
        </div>
    )
}
