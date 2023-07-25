import React from 'react';
import './home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderConteiner(){
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="slide"><img src={process.env.PUBLIC_URL + '/images/home/Prypiat.jpg'} alt="Прип'ять"/></div>
      <div className="slide"><img src={process.env.PUBLIC_URL + '/images/home/radiation.jpg'} alt="Радіація"/></div>
      <div className="slide"><img src={process.env.PUBLIC_URL + '/images/home/baby.jpg'} alt="Графіті дитини"/></div>
      <div className="slide"><img src={process.env.PUBLIC_URL + '/images/home/cars.jpg'} alt="Машинки на майданчику"/></div>
    </Slider>
  );
}
export default SliderConteiner;