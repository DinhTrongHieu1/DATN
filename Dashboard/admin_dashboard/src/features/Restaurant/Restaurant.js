import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import classes from './Restaurant.module.css'
import RestItem from '../../components/RestItem/RestItem'

export default function Restaurant() {
    return (
        <div>
            <div className={classes.header}>
                <h1>
                    QUẢN LÝ NHÀ HÀNG
                </h1>
                <Button>
                    Tạo mới
                </Button>
            </div>
            <div className={classes.container}>
                <div className={classes.container_head}>
                    <Input className={classes.inp} type='text' placeholder='Tìm kiếm nhà hàng' />
                    <Button className={classes.Searchbtn}>Tìm Kiếm</Button>
                </div>
                <div className={classes.container_ctn}>
                    <RestItem />
                    <RestItem />
                    <RestItem />
                    <RestItem />
                    <RestItem />
                    {/* <RestItem />  */}
                </div>
            </div>
        </div>
    )
}
