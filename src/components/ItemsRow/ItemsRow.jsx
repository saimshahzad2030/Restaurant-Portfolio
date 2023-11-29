
import style from './Itemsrow.module.css';
import ItemsRowChild from '../ItemsRowChild/ItemsRowChild';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export default function ItemsRow({ items, setDisplay, display }) {
  const chunkArray = (items, size) => {
    return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
      items.slice(index * size, index * size + size)
    );
  };
  const rows = chunkArray(items, 3);
const clickHandler = ()=>{
  setDisplay('none')
}
  return (
    <div
      className={style.itemsRow}
      onMouseEnter={() => {
        setDisplay('flex');
      }}
      onMouseLeave={() => {
        setDisplay('none');
      }}
      style={{ display: display }}
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={style.div}>
          {row.map((item, itemIndex) => (
            <ItemsRowChild key={itemIndex} value={item.name} img={item.img} alt={item.img} />
          ))}
        </div>
      ))}
      <Link to="/menu" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }} onClick={()=>{setDisplay('none')}}>
      <Button variant="outlined" sx={{marginLeft:'10px',fontWeight:'bold',color:'blue',border:'2px orange blue'}} onClick={clickHandler}>More Items</Button>
      </Link>
    </div>
  );
}
