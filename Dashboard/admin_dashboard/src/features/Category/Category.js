import React from 'react'
import classes from './Category.module.css'
import Table from '../../components/Table/Table'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import InpImage from '../../components/InpImage/InpImage'
export default function Category() {

    return (
        <div>
            <h1 className={classes.title}>
                QUẢN LÝ DANH MỤC MÓN ĂN
            </h1>
            <div className={classes.container}>
                <div className={classes.inputbox}>
                    <div>
                        <p>Tên danh mục món ăn</p>
                        <Input className={classes.inp} type="text" placeholder='Gõ tên' />
                    </div>
                    <div>
                        <p>Mô tả</p>
                        <textarea placeholder='Mô tả' className={classes.txt_area} rows="10" cols="50" />
                    </div>
                    <div>
                        <InpImage />
                        <Button className={classes.btn}>Tạo danh mục</Button>
                    </div>
                </div>

                <div className={classes.table}>
                    <Table />
                </div>
            </div>
        </div>
    )
}
