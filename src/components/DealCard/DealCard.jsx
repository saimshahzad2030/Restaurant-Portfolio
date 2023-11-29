import React from 'react'
import style from './DealCard.module.css'
import {Button} from '@mui/material'
export default function DealCard({items,img,price}) {
  return (
    <div className={style.card}>
      <div className={style.imgDiv}>
        <img src={process.env.PUBLIC_URL +  "/Assets/Deals/" + img} alt="Deal" />
      </div>
      <div className={style.textDiv}>
        <h4>plTTWE</h4>
        <h5>Only in Rs: {price}</h5>
       <ul>
        {items.map((item)=>{
            return    <li key={item}>{item}</li>
        })}
       </ul>
      </div>
      <div className={style.buttonDiv}>
      <Button variant="outlined" className={style.btn}>Select</Button>
   
      </div>
    </div>
  )
}
