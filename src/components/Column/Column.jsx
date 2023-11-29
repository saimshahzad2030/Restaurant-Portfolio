import React from 'react'
import style from './Column.module.css'
export default function Column({children}) {
  return (
    <div className={style.column}>
      {children}
    </div>
  )
}
