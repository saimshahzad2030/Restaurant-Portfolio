import React, { useState, useEffect } from 'react';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import style from './Carrousel.module.css'
const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the activeIndex to move to the next slide
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
     <CCarousel className={style.carrousel} activeIndex={activeIndex} controls={false} indicators={false}>
        <CCarouselItem>
          <CImage className="d-block w-100" src={process.env.PUBLIC_URL + '/Assets/Carrousel/C1.jpg'} alt="slide 1" />
          <CCarouselCaption className="d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h5>Traditional PLatters</h5>
            <p>We have a variety of Traditional PLatters</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={process.env.PUBLIC_URL + '/Assets/Carrousel/C3.jpeg'} alt="slide 2" />
          <CCarouselCaption className="d-none d-md-block"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h5>Fast Food</h5>
            <p>Try our Fast food and spices.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={process.env.PUBLIC_URL + '/Assets/Carrousel/C2.jpg'} alt="slide 3" />
          <CCarouselCaption className="d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h5>Finger Licking Desserts</h5>
            <p>We serve some high-quality Desserts.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </>
  );
};

export default Carrousel;
