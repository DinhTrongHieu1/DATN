import React from 'react'
import classes from './Post.module.css'
import Table from '../../components/Table/Table'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import InpImage from '../../components/InpImage/InpImage'
export default function Post() {

    return (
        <div>
            <h1 className={classes.title}>
                QUẢN LÝ BÀI POST
            </h1>
            <div className={classes.container}>
                <div className={classes.inputbox}>
                    <div>
                        <p>Tiêu đề</p>
                        <Input className={classes.inp} type="text" placeholder='Nhập tiêu đề' />
                    </div>
                    <div>
                        <p>Mô tả</p>
                        <Input className={classes.inp} type="text" placeholder='Nhập mô tả' />
                    </div>
                    {/* <div>
                        <p>Nội dung</p>
                        <Input className={classes.inp} type="text" placeholder='Nhập nội dung' />
                    </div> */}
                    <div>
                        <p>Nội dung</p>
                        <textarea placeholder='Nội dung' className={classes.txt_area} rows="10" cols="50" />
                    </div>

                    <InpImage />
                    <div className={classes.box_btn_create}>

                        <Button className={classes.btn}>Tạo bài post</Button>
                    </div>

                </div>

                <div className={classes.table}>
                    <Table />
                </div>
            </div>
        </div>
    )
}
