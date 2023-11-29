import React from 'react'
import ItemsRow from '../ItemsRow/ItemsRow'
export default function ItemsDiv({setDisplay,display}) {
    
  
  const itemArray = [
    { img: 'burger', name: 'burger' },
    { img:  'pizza', name: 'pizza' },
    { img: 'breakfast', name: 'breakfast' },
    { img:'wings' , name: 'wings' },
    { img: 'paratha' , name: 'paratha' },
    { img: 'juice' , name: 'juice' },
    { img: 'shawarma', name: 'dinner' },
    { img: 'pasta', name: 'pasta' },
    { img: 'desserts', name: 'desserts' }
  ];
  return (
    <>
   
    <ItemsRow display={display} items={itemArray} setDisplay = {setDisplay}/>
    </>)
}
