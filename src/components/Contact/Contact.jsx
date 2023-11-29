import React from 'react'
import style from './Contact.module.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Contact() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className={style.mainDiv}>
      <h1 style={{textAlign:'center',fontWeight:'bold'}}>Contact us</h1>
      <div className={style.insideDiv}>
       <div className={style.parentDiv}>
       <div className={style.divChild}>
          <div className={style.imgDiv}>
          <img className = {style.img}src={process.env.PUBLIC_URL + '/Assets/Contact us/suggestion.png'} alt="suggestions" />
         
          </div>
           <h3 className={style.h3}>Suggestions</h3>
          <div className={style.paraDiv}>
            <p>Want to share your thoughts? Reach out to us and let us know what you have in mind.</p>
          </div>
          <Link to = {'/'}  onClick={()=>{ scrollToTop();scrollToSection(`login`)}}><Button variant="contained"  sx={{fontWeight:'bold',color:'white',width:'140px',backgroundColor:'orange'}} >Click here</Button>
          </Link>
        </div>
       </div> <div className={style.parentDiv}>
        <div  className={style.divChild}>
        <div className={style.imgDiv}>
          <img className = {style.img}src={process.env.PUBLIC_URL + '/Assets/Contact us/complaint.png'} alt="suggestions" />
         
          </div>
           <h3 className={style.h3}>Complaints</h3>
          <div className={style.paraDiv}>
            <p>Our customers are our top priority and we always try to ensure you are satisfied. However, If you have any feedback, feel free to reach out to us.</p>
          </div>
          <Link to = {'/'}  onClick={()=>{ scrollToTop();scrollToSection(`login`)}}>
          <Button variant="contained"  sx={{fontWeight:'bold',color:'white',width:'140px',backgroundColor:'orange'}} >Click here</Button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}
