import { useState, useLayoutEffect, useRef, memo } from "react";
import Slider from "react-slick";
import slide1 from "../images/slide1.webp";
import slide2 from "../images/slide2.webp";
import slide3 from "../images/slide3.webp";
import slide4 from "../images/slide4.webp";
import slide5 from "../images/slide5.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [slide1, slide3, slide2, slide4, slide5];


const SlideItem = memo(({ slide, onClick }) => (
  <div className="slider-container__img" onClick={onClick}>
    <img src={slide} alt="" loading="lazy" />
  </div>
));

export default function SliderAbout() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const fullscreenRef = useRef(null);


  useLayoutEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  // Переход к активному слайду в fullscreen
  useLayoutEffect(() => {
    if (isFullscreen && fullscreenRef.current) {
      fullscreenRef.current.slickGoTo(activeSlide, true);
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
    adaptiveHeight: false,
    variableWidth: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, adaptiveHeight: false },
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
    adaptiveHeight: false,
    variableWidth: false,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings} key={isFullscreen ? "paused" : "playing"}>
          {slides.map((slide, index) => (
            <SlideItem
              key={index}
              slide={slide}
              onClick={() => {
                setActiveSlide(index);
                setIsFullscreen(true);
              }}
            />
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

          <Slider
            ref={fullscreenRef}
            {...fullscreenSettings}
            key={activeSlide}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slider-fullscreen__img">
                <img src={slide} alt="" loading="lazy" />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
