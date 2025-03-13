import React from 'react'
import classes from './User.module.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import UserItem from '../../components/UserItem/UserItem'
export default function User() {
    return (
        <div>
            <div className={classes.head}>

                <h1>
                    QUẢN LÝ NGƯỜI DÙNG
                </h1>
                <Button>Tạo mới</Button>
            </div>
            <div className={classes.container}>
                <div className={classes.ctn_head}>
                    <Input className={classes.inp} type='text' placeholder='Tìm kiếm người dùng' />
                    <div>
                        <div className={classes.combo_box_container}>
                            {/* Dropdown for Items per Page */}
                            <select
                                // value={itemsPerPage}
                                // onChange={(e) => setItemsPerPage(e.target.value)}
                                className={classes.custom_select}
                            >
                                <option value="10">Hiển thị 10</option>
                                <option value="20">Hiển thị 20</option>
                                <option value="50">Hiển thị 50</option>
                                <option value="100">Hiển thị 100</option>
                            </select>

                            {/* Dropdown for Status */}
                            <select
                                // value={status}
                                // onChange={(e) => setStatus(e.target.value)}
                                className={classes.custom_select}
                            >
                                <option value="all">Tình trạng: Tất cả</option>
                                <option value="active">Đang hoạt động</option>
                                <option value="inactive">Không hoạt động</option>
                            </select>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
                <div className={classes.ctn_foo}>
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                </div>
            </div>

        </div>
    )
}
