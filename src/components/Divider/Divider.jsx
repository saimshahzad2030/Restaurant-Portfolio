import React from 'react'
import style from './Divider.module.css'
export default function Divider({styles}) {
  return (
   <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     <div className={style.div} style = {styles}>
      
      </div>
   </div>
  )
}
