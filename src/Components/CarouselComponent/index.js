import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles.css'
import img1 from './Images/hospital_img1.jpg'
import img2 from './Images/hospital_img2.jpg'
import img3 from './Images/hospital_img3.jpg'

export default function CarouselComponent() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block  carouselImg" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  carouselImg" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  carouselImg" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    )
}
