import React from 'react'
import classes from './Table.module.css'
export default function Table() {
    const table = {
        title: [
            "id", "Tên", "Mô tả", "Hành động"
        ],
        content: [

            { id: "62d38311453db4e8c36bdc80", name: "Món Chiên", description: '' },
            { id: "62d38311453db4e8c36bdc7f", name: "Món Nhật", description: '' },
            { id: "62d38311453db4e8c36bdc7e", name: "Gỏi", description: '' },
            { id: "62d38311453db4e8c36bdc7d", name: "Bánh Ngọt", description: '' },
            { id: "62d38311453db4e8c36bdc7c", name: "Món Âu", description: '' },
            { id: "62d38311453db4e8c36bdc7b", name: "Món Hấp", description: '' },
            { id: "62d38311453db4e8c36bdc7a", name: "Pizza - BBQ", description: '' },
            { id: "62d38311453db4e8c36bdc79", name: "Gà Rán", description: '' },
            { id: "62d38311453db4e8c36bdc78", name: "Cơm - Xôi - Món Khô", description: '' },
            { id: "62d38311453db4e8c36bdc77", name: "Bánh Mì", description: '' },
        ]
    }
    return (
        <div className={classes.table_container}>
            <table className={classes.category_table}>
                <thead>
                    <tr>
                        {
                            table.title.map((e, i) => (
                                <th key={i}>{e}</th>
                            ))
                        }
                        {/* <th>ID</th>
          <th>Tên</th>
          <th>Mô tả</th>
          <th>Hành động</th> */}
                    </tr>
                </thead>
                <tbody>
                    {table.content.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td className={classes.bold_text}>{e.name}</td>
                            <td>
                                {e.description}
                            </td>
                            <td>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
