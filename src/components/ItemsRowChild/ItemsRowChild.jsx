import React from 'react'
import style from './ItemsRowChild.module.css'
import { Link } from 'react-router-dom'
export default function ItemsRowChild({value,img,alt}) {
  console.log(process.env.PUBLIC_URL + '/Assets/items/' + img + '.png');

  return (
      <div className={style.row}>
    <img  className={style['img']} src={process.env.PUBLIC_URL + '/Assets/items/' + img + '.png'} alt={alt} />
      <Link to={'/menu'} className={style.link}>{value}</Link>
  </div>
   
  )
}
