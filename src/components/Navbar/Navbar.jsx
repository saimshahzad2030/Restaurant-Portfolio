import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import {Button} from '@mui/material'
import ItemsDiv from '../ItemsDiv/ItemsDiv'
export default function Navbar() {
  const enterHandler = (e) => {
    setTimeout(() => {
      setDisplay('flex');
    }, 200);
  };
  const [display, setDisplay] = React.useState('none');

 const clickHandler = ()=>{
  setDisplay('none')
 }
 const [scrolled, setScrolled] = React.useState(false);
 const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

 const handleScroll = () => {
   const offset = window.scrollY;
   if (offset > 100) {
     setScrolled(true);
   } else {
     setScrolled(false);
   }
 };

 React.useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, []);
    const imageContext = require.context('../../../public/Assets', false, /\.(png)$/);
const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
    const urls = ['https://www.facebook.com/sheikh.saim.104','https://github.com/saimshahzad2030','https://instagram.com/saim_shahzad_321?igshid=MzNlNGNkZWQ4Mg==','https://www.linkedin.com/in/saim-shahzad-476bba25b/','https://twitter.com/saimshehzad10']
    const items = [...imageNames]
  return (
   <>
   <nav className={`${style.nav} ${scrolled ? style.scrolled : ''}`}>
    <div className={style.row}>
    <ul className={style.nav_ul}>
        
          {items.map((item,index) => (
            <li className={style.socialList} key={item}>
              <a href={`${urls[index]}`} className={style.anchor}>
                <img className={style.SocialImages} src={process.env.PUBLIC_URL + '/Assets/' + item} alt='fb Logo' />
              </a>
            </li>
          ))}
         
      </ul>
    </div>
    <div className={style.row2}>
        <ul className={style.nav_ul} id={style['centerRow']}>
        <li><Link className={style.link} to='/' style={{textDecoration:'none'}}  onClick={()=>{ scrollToTop();scrollToSection(``)}}>Home</Link></li>
        <li className={style.deals} ><Link className={style.link} to='/deals' style={{textDecoration:'none'}}  onClick={()=>{ scrollToTop();scrollToSection(`deals`)}}>Deals</Link></li>
        <li>
            <Link to='/' className={`${style.logoList} ${style.link}`} style={{textDecoration:'none'}}  onClick={()=>{ scrollToTop();scrollToSection(``)}}>
                
                <img className={style.logoImg} src={process.env.PUBLIC_URL + '/Assets/LogoImage/burger.png' } alt='imageofme'/> 
                <p className={style.logolink} style={{marginTop:'19px',fontWeight:'bold',color:'black'}}>FOOD MANIA</p>
            </Link>
        </li>
        <li style={{marginLeft:'10px'}}><Link onClick={()=>{clickHandler();scrollToTop();scrollToSection(`menu`)}} className={style.link} to='/menu'  style={{textDecoration:'none'}} onMouseEnter={enterHandler}   >Menu</Link></li>
            <li><Link className={style.link} to='/contact' style={{textDecoration:'none'}}  onClick={()=>{ scrollToTop();scrollToSection(`contact`)}}>Contact</Link></li>
            
        </ul>
    </div>
    <div className={style.row}>
    <Link to={'/login'}  onClick={()=>{ scrollToTop();scrollToSection(`login`)}}><Button variant="outlined"  sx={{ marginLeft:'10px',
    fontWeight:'bold',
    color:'green',
    border:'2px orange solid',
    width:'90px'}}>Login</Button></Link>
    <Link  to={'/signin'}  onClick={()=>{ scrollToTop();scrollToSection(`signin`)}}><Button variant="outlined"sx={{ marginLeft:'10px',
    fontWeight:'bold',
    color:'blue',
    border:'2px orange solid',
    width:'90px'}}>Signup</Button></Link>
    </div>
   </nav>
   <ItemsDiv display={display} setDisplay = {setDisplay}/>
   </>
  )
}
