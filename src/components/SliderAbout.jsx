import Slider from "react-slick";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.png";
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
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-container__img">
          <img src={slide1} alt="" />
        </div>

        <div className="slider-container__img">
          <img src={slide3} alt="" />
        </div>
        <div className="slider-container__img">
          <img src={slide2} alt="" />
        </div>
        <div className="slider-container__img">
          <img src={slide4} alt="" />
        </div>

        <div className="slider-container__img">
          <img src={slide5} alt="" />
        </div>
      </Slider>
    </div>
  );
}
