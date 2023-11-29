import React, { useState } from 'react'
import style from './Menu.module.css'
import { Link } from 'react-router-dom'
import MenuList from '../MenuList/MenuList'
import MenuRightBar from '../MenuRightBar/MenuRightBar'
export default function Menu() {
  const imageContext = require.context(`../../../public/Assets/menu/burger`, false, /\.(png)$/);
  const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
  const arr = []
  imageNames.map((item,index)=>(
    arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
  ))
 const [menuSelected,setMenu] = useState('burger'.charAt(0).toUpperCase() + 'burger'.slice(1))
  const [content,setContent] = useState(arr)

  return (
    <div className={style.mainDiv}>
      <div className={style.sideColumn}>
            <Link className={style.allItems} to={'/menu'}>VIEW ALL ITEMS</Link>
            <MenuList setContent = {setContent} setMenu = {setMenu}/>
      </div>
      <div className={style.rightColumn}>
     <h1 style={{textAlign:'center',fontWeight:'bold'}}>{menuSelected}</h1>
        <MenuRightBar content = {content} menu={menuSelected}/>
      </div>
    </div>
  )
}
