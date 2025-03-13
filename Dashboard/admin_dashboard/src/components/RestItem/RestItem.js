import React from 'react'
import classes from './RestItem.module.css'
import monan from '../../assets/monan.jpg'

export default function RestItem() {
    return (
        <div className={classes.box}>
            <img className={classes.avt} src={monan} alt='img' />
            <div className={classes.container}>
                <p className={classes.name}>Ngói BBQ</p>
                <p>111 Đường Bùi Thị Xuân, Phường 2, Thành Phố Đà Lạt, Lâm Đồng</p>
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
