import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import classes from './Food.module.css'
import FoodItem from '../../components/FoodItem/FoodItem'

export default function Food() {
    return (
        <div>
            <div className={classes.head}>
                <h1>
                    QUẢN LÝ MÓN ĂN
                </h1>
                <Button>
                    Tạo mới
                </Button>
            </div>
            <div className={classes.container}>
                <div className={classes.container_head}>
                    <div className={classes.head_ctn}>
                        <Input className={classes.inp} type='text' placeholder='Tìm kiếm món ăn' />
                        <Button className={classes.Searchbtn}>Tìm Kiếm</Button>
                    </div>
                    <div>
                        <div className={classes.combo_box_container}>
                            {/* Dropdown for Items per Page */}
                            <select
                                // value={itemsPerPage}
                                // onChange={(e) => setItemsPerPage(e.target.value)}
                                className={classes.custom_select}
                            >
                                <option value="all">Chọn loại món ăn</option>
                                <option value="20">Food 1</option>
                                <option value="50">Food 2</option>
                                <option value="100">Food 3</option>
                            </select>

                            {/* Dropdown for Status */}
                            <select
                                // value={status}
                                // onChange={(e) => setStatus(e.target.value)}
                                className={classes.custom_select}
                            >
                                <option value="all">Tất cả</option>
                                <option value="active">Mới nhất</option>
                                <option value="inactive">Cũ nhất</option>
                            </select>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className={classes.container_ctn}>
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
        </div>
    )
}
