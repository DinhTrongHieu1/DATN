import React from 'react'
import classes from './Food.module.css'

export default function FoodItem(props) {
    const { image_url, title, description } = props.data;
    return (
        <div onDragStart={(e) => e.preventDefault()} className={`${classes.item_container}`}>
            <div style={{
                backgroundImage: `url(${image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.item_img}>
                {/* <i className="fa-regular fa-heart"></i> */}
                <i className="fa-solid fa-heart"></i>
            </div>

            <div className={classes.item_content}>
                <h1 className={classes.item_title}>{title}</h1>
                <p className={classes.item_des}>
                    {description}
                </p>
            </div>
        </div>
    )
}
