import React from 'react'
import style from './MenuRightBar.module.css'
export default function MenuRightBar({content,menu}) {
    const imageContext = require.context(`../../../public/Assets/menu/juice`, false, /\.(png)$/);
    const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
    console.log(imageNames)
    const chunkArray = (items, size) => {
        return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
            items.slice(index * size, index * size + size)
        );
    };
    const columns = chunkArray(content, parseInt(((content.length) / 3)) +1);
    return (
   
        <>
        
        {
            columns.map((col, index) => (
                <div className={style.row}>
                    {col.map((item,index)=>(
                    <div className={style.innerDiv}>
                        <img className={style.img} src={process.env.PUBLIC_URL + '/Assets/menu/' + menu + '/' + item.img + '.png'} alt={item.img}/>
                        <h5>{item.name}</h5>
                    </div>
))}
                </div>))
        }
        </>
    )
}
