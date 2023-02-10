import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          src={hero1}
          alt="First slide"
        />
        <Carousel.Caption className="col-11 col-md-6">
          <h1 className="carousel__title">YOU AND YOUR DOCTOR</h1>
          <p className="carousel__content">
            We at MediCare are always fully focused on helping your child and
            you to overcame any hurdle, whether its chicken pox or just a
            seasonal flue.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image

          src={hero2}
          alt="First slide"
        />
        <Carousel.Caption className="col-11 col-md-6">
          <h1 className="carousel__title">YOU AND YOUR DOCTOR</h1>
          <p className="carousel__content">
            We at MediCare are always fully focused on helping your child and
            you to overcame any hurdle, whether its chicken pox or just a
            seasonal flue.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
