import React from "react";
import Slider from "react-slick";
import slide1 from "../images/mental-health-care-sketch-diagram.jpg"
import slide2 from "../images/people-working-tech-brand-together (1).jpg"
import slide3 from "../images/people-working-tech-brand-together.jpg"
import slide4 from "../images/woman-holding-origami-object.jpg"
import slide5 from "../images/woman-using-special-made-paper-origami.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function SliderAbout() {
  var settings = {
    dots: false,
    infinite: true,
    className: "center",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    swipe: true,
touchMove: true,
    speed: 3000,
    autoplaySpeed:1000,
    cssEase: "linear",
    arrows: false,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings} >
        <div>
         <img src={slide2} alt="" />
        </div>
        <div>
        <img src={slide1} alt="" />
        </div>
       
        <div>
         <img src={slide3} alt="" />
        </div>
        <div>
        <img src={slide4} alt="" />
        </div>
       
        <div>
         <img src={slide5} alt="" />
        </div>
       
        
       
      </Slider>
    </div>
  );
}

