import React from 'react'
import style from './MenuList.module.css'
import { Link } from 'react-router-dom';
export default function MenuList({setContent,setMenu}) {
  const clickHandler = (itemName)=>{
    const capitalizedString = itemName.charAt(0).toUpperCase() + itemName.slice(1);

    setMenu(capitalizedString)
    if(itemName === 'burger'){
      const imageContext = require.context(`../../../public/Assets/menu/burger`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    
    }
    else if(itemName === 'pizza'){
      const imageContext = require.context(`../../../public/Assets/menu/pizza`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    
    }
    else if(itemName === 'breakfast'){
      const imageContext = require.context(`../../../public/Assets/menu/breakfast`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    }
    else if(itemName === 'wings'){
      const imageContext = require.context(`../../../public/Assets/menu/wings`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    }
   
    else if(itemName === 'juice'){
      const imageContext = require.context(`../../../public/Assets/menu/juice`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    }
    else if(itemName === 'dinner'){
      const imageContext = require.context(`../../../public/Assets/menu/dinner`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    } 
    else if(itemName === 'pasta'){
      const imageContext = require.context(`../../../public/Assets/menu/pasta`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    }
    else if(itemName === 'desserts'){
      const imageContext = require.context(`../../../public/Assets/menu/desserts`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    }
    
    else if(itemName === 'beef'){
      const imageContext = require.context(`../../../public/Assets/menu/beef`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    }
    else if(itemName === 'cafe'){
      const imageContext = require.context(`../../../public/Assets/menu/cafe`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    }
    else if(itemName === 'soda'){
      const imageContext = require.context(`../../../public/Assets/menu/soda`, false, /\.(png)$/);
      const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const arr = []
      imageNames.map((item,index)=>(
        arr.push({name:item.slice(0,item.length-4),img:item.slice(0,item.length-4)})
      )) 
      setContent(arr)
    }
    else{
      
      
    
    }
  }

  
    const itemArray = [
        { img: 'burger', name: 'burger' },
        { img:  'pizza', name: 'pizza' },
        { img: 'breakfast', name: 'breakfast' },
        { img:'wings' , name: 'wings' },
        { img: 'juice' , name: 'juice' },
        { img: 'shawarma', name: 'dinner' },
        { img: 'pasta', name: 'pasta' },
        { img: 'desserts', name: 'desserts' },
        { img: 'cafe', name: 'cafe' },
        { img: 'beef', name: 'beef' },
        { img: 'soda', name: 'soda' },
      ];
    const chunkArray = (items, size) => {
        return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
          items.slice(index * size, index * size + size)
        );
      };
      const columns = chunkArray(itemArray, parseInt((itemArray.length)/2)+1);
  return (
    <div className={style.mainDiv}>
      {columns.map((col,index)=>(
        <div className={style.items}>
        {col.map((item,index)=>(
           <div className={style.row}>
           <img  className={style['img']} src={process.env.PUBLIC_URL + '/Assets/items/' + item.img + '.png'} alt={item.img} />
             <div className={style.rowChild}>
             <Link to={'/menu'} className={style.link} key={item.name} onClick={()=>clickHandler(item.name)}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Link>
             </div>
         </div>
        ))}
      </div>
    ))}
    </div>
  )
}
