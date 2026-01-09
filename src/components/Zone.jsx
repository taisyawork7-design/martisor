import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTranslation } from "react-i18next";

import bar1 from "../images/bar1.webp";
import bar2 from "../images/bar2.webp";
import bar3 from "../images/bar3.webp";

import food1 from "../images/food1.webp";
import food2 from "../images/food2.webp";
import food3 from "../images/food3.webp";

import fair1 from "../images/fair1.webp";
import fair2 from "../images/fair2.webp";
import fair3 from "../images/fair3.webp";

import sitting1 from "../images/sitting1.webp";
import sitting2 from "../images/sitting2.webp";

import kids1 from "../images/kids1.webp";
import kids2 from "../images/kids2.webp";
import kids3 from "../images/kids3.webp";

import master1 from "../images/masterclass1.webp";
import master2 from "../images/massterclass2.webp";
import master3 from "../images/massterclass3.webp";

const zones = [
  { title: "Bar Zone", textKey: "barZone", images: [bar2, bar1, bar3] },
  { title: "Food Zone", textKey: "foodZone", images: [food2, food1, food3] },
  { title: "Fair Zone", textKey: "fairZone", images: [fair2, fair1, fair3] },
  {
    title: "Sitting Zone",
    textKey: "sittingZone",
    images: [sitting1, sitting2],
  },
  { title: "Kids Zone", textKey: "kidsZone", images: [kids1, kids2, kids3] },
  {
    title: "Master Class Zone",
    textKey: "masterClassZone",
    images: [master1, master2, master3],
  },
];

export default function ZoneSection() {
  const { t } = useTranslation("main");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeZoneImages, setActiveZoneImages] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const fullscreenRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
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

  const fullscreenSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    swipe: true,
  };

  return (
    <>
      <div className="zone">
        {zones.map((zone, index) => (
          <div
            key={index}
            className="zone__item"
            onClick={() => {
              setActiveZoneImages(zone.images);
              setActiveSlide(0);
              setIsFullscreen(true);
            }}
          >
            <img src={zone.images[0]} alt={t(zone.textKey)} />
            <h2>{t(zone.title)}</h2>
            <p>{t(zone.textKey)}</p>
          </div>
        ))}
      </div>

      {isFullscreen && (
        <div
          className="zone-slider-fullscreen"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            className="zone-slider-fullscreen__close"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
          >
            ✕
          </button>

          <div
            className="zone-slider-fullscreen__inner"
            onClick={(e) => e.stopPropagation()}
          >
            <Slider ref={fullscreenRef} {...fullscreenSettings}>
              {activeZoneImages.map((img, index) => (
                <div key={index} className="zone-slider-fullscreen__img">
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}
