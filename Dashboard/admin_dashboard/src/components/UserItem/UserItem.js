import React from 'react'
import classes from './UserItem.module.css'
import avt from '../../assets/image.png'
export default function UserItem() {
    return (
        <div className={classes.box}>
            <div className={classes.bg}></div>
            <div className={classes.container}>
                <img className={classes.avt} src={avt} />
                <p>Quyền: <span>Khách Hàng</span></p>
                <p>Nhà hàng quản lý</p>
                <p>
                    nnm@gmail.com
                </p>
            </div>

        </div>
    )
}
