import React from 'react'
import style from './ServiceCard.module.css'
export default function ServiceCard({imgPath,children}) {
  return (
    <div className={style.card}>
      <div className={style.imgDiv}>
        <img src={process.env.PUBLIC_URL +  "/Assets/Services/" + imgPath} alt="" />
      </div>
      <div className={style.textDiv}>
        <h2 >{children}</h2>
      </div>
    </div>
  )
}
