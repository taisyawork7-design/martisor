import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [slide1, slide3, slide2, slide4, slide5];

export default function SliderAbout() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const fullscreenRef = useRef(null);
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (isFullscreen && fullscreenRef.current) {
      setTimeout(() => {
        fullscreenRef.current.slickGoTo(activeSlide);
      }, 0);
    }
  }, [isFullscreen, activeSlide]);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isFullscreen,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const fullscreenSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: true,
    dots: true,
    swipe: true,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings} key={isFullscreen ? "paused" : "playing"}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slider-container__img"
              onClick={() => {
                setActiveSlide(index);
                setIsFullscreen(true);
              }}
            >
              <img src={slide} alt="" />
            </div>
          ))}
        </Slider>
      </div>

      {isFullscreen && (
        <div className="slider-fullscreen">
          <button
            className="slider-fullscreen__close"
            onClick={() => setIsFullscreen(false)}
          >
            ✕
          </button>

          <Slider ref={fullscreenRef} {...fullscreenSettings} key={activeSlide}>
            {slides.map((slide, index) => (
              <div key={index} className="slider-fullscreen__img">
                <img src={slide} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
