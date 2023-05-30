import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImgCar1 from "./foto_instagram_1.jpg"
import ImgCar2 from "./foto_instagram_2.jpg"
import ImgCar3 from "./foto_instagram_3.jpg"
import ImgCar4 from "./foto_instagram_4.jpg"

export const CarouselImages = () => {
  return (
    <Carousel style={InstagramStyle}>
      <Carousel.Item>
        <img
          style={InstagramStyle}
          className="d-block w-100"
          src={ImgCar1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={InstagramStyle}
          className="d-block w-100"
          src={ImgCar2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={InstagramStyle}
          className="d-block w-100"
          src={ImgCar3}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={InstagramStyle}
          className="d-block w-100"
          src={ImgCar4}
          alt="Forth slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselImages

const InstagramStyle = {  
  
  maxWidth: "100%",    
  maxHeight: "400px",
  display: "block",
  objectFit: "cover",
}