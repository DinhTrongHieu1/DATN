import React, { useState } from 'react'
import classes from './InpImage.module.css'

export default function InpImage() {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");
    // Xử lý khi chọn ảnh
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setFileName(file.name);
            setImage(imageURL);
        }
    };
    return (
        <div className={classes.container}>
            <p>Hình ảnh</p>

            <label className={classes.label}>
                Chọn tệp
                <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
            </label>

            <p className={classes.filename}>{fileName}</p>

            {image && (
                <div className={classes.box_img}>
                    {/* <h4>Ảnh xem trước:</h4> */}
                    <img className={classes.img} src={image} alt="Preview" />
                </div>
            )}
        </div>
    )
}
