import React from 'react'
import classes from './FoodItem.module.css'
import monan from '../../assets/monan.jpg'

export default function FoodItem() {
    return (
        <div className={classes.box}>
            <img className={classes.avt} src={monan} alt='img' />
            <div className={classes.container}>
                <p className={classes.name}>Bánh Cake</p>
                <p>50000Đ</p>
                <div className={classes.icon_box}>
                    <div className={classes.icon_setting}>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className={classes.icon_delete}>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
