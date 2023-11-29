import React from 'react'
import DealCard from '../DealCard/DealCard'
import style from './Deals.module.css'
import Heading from '../Heading/Heading'
export default function Deals() {
    const deals = [{img:'C2.jpg',items:['sharwama','leg piece','colddrinks'],price:180},
       
    {img:'C2.jpg',items:['sharwama','leg piece','colddrinks'],price:500},
    {img:'C2.jpg',items:['dsads','leg piece','colddrinks'],price:350},
    {img:'C2.jpg',items:['dsadsa','leg piece','colddrinks'],price:280},
    {img:'C2.jpg',items:['sharwama','dsadsa','colddrinks'],price:140},
    {img:'C2.jpg',items:['sharwama','leg piece','colddrinks'],price:180},
    {img:'C2.jpg',items:['sharwama','leg piece','colddrinks'],price:280},
]
const chunkArray = (items, size) => {
    return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
      items.slice(index * size, index * size + size)
    );
  };
  const rows = chunkArray(deals, 3);
  return (
    <>
    
    <Heading style={{textAlign:'center',marginTop:'50px',marginBottom:'50px',color:'black'}}>Deals</Heading>
    <div className={style.outsideDiv}>
    <div  className={style.insideDiv}>
    {rows.map((row,index)=>(
        <div className={style.deals}>
        {row.map((item,index)=>(
            <DealCard img={item.img} items={item.items} price={item.price}/>
           
        ))}
      </div>
    ))}
    </div>
    </div></>
  )
}
