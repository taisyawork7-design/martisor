import React, { useState, useLayoutEffect, memo } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import card1 from "../images/analytic.jpg";
import card2 from "../images/anonim.jpg";
import card5 from "../images/exc.jpg";
import card3 from "../images/tren.jpg";
import card4 from "../images/vr.jpg";
import arrow from "../images/arrow_next.svg";
import close from "../images/close.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Memoized card component
const Card = memo(({ card, index, onOpen }) => (
  <div className="card" key={index}>
    <img src={card.img} alt="" loading="lazy" />
    <h2>{card.title}</h2>
    <button onClick={() => onOpen(index)}>
      {card.buttonText} <img src={arrow} alt="" />
    </button>
  </div>
));

export default function SliderServicies() {
  const { t } = useTranslation("main");
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const cards = [
    { img: card1, titleKey: "card2Title", description: "card2Text" },
    { img: card2, titleKey: "card4Title", description: "card4Text" },
    { img: card3, titleKey: "card3Title", description: "card3Text" },
    { img: card4, titleKey: "card5Title", description: "card5Text" },
    { img: card5, titleKey: "card1Title", description: "card1Text" },
  ].map(card => ({
    ...card,
    title: t(card.titleKey),
    buttonText: t("button")
  }));

  // Блокировка скролла при открытой карточке
  useLayoutEffect(() => {
    document.body.style.overflow = openCardIndex !== null ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openCardIndex]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    swipe: true,
    touchMove: true,
    cssEase: "linear",
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 850, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-servicies">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            onOpen={setOpenCardIndex}
          />
        ))}
      </Slider>

      {openCardIndex !== null && (
        <div className="open-card">
          <div className="overlay" onClick={() => setOpenCardIndex(null)} />
          <div className="content">
            <button className="close" onClick={() => setOpenCardIndex(null)}>
              <img src={close} alt="close" />
            </button>
            <img src={cards[openCardIndex].img} alt="" loading="lazy" />
            <p>{t(cards[openCardIndex].description)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
