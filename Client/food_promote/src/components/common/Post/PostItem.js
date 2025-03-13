import React from 'react'
import classes from './Post.module.css'

export default function PostItem(props) {
  const { image_url, title, description, author, create_at } = props.data;
  return (
    <div className={`${classes.item_container}`}>
      <div style={{
        backgroundImage: `url(${image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
        className={classes.item_img}>

      </div>
      <div className={classes.item_content}>
        <h1 className={classes.item_title}>{title}</h1>
        <div className={classes.item_author}>
          <p>
            {create_at}<span>-</span>{author}
          </p>

        </div>
        <p className={classes.item_des}>
          {description}
        </p>
      </div>
    </div>
  )
}
