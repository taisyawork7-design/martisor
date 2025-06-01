import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import card1 from "../images/analytics.jpg";
import card2 from "../images/psychologist.jpg";
import card3 from "../images/quest.jpg";
import card4 from "../images/training.jpg";
import card5 from "../images/vr.jpg";
import arrow from "../images/arrow_next.svg";
import close from "../images/close.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function SliderServicies() {
    const { t } = useTranslation('main');
    const [openCardIndex, setOpenCardIndex] = useState(null);
    const cards = [
        {
            img: card1,
            titleKey: "card2Title",
            description:
                "card2Text",
        },
        { img: card2, titleKey: "card4Title", description: "card4Text" },
        { img: card3, titleKey: "card3Title", description: "card3Text" },
        { img: card4, titleKey: "card5Title", description: "card5Text" },
        { img: card5, titleKey: "card1Title", description: "card1Text" },
    ];
    useEffect(() => {
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
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="slider-servicies">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.img} alt="" />
                        <h2>{t(card.titleKey)}</h2>
                        <button onClick={() => setOpenCardIndex(index)}>
                            {t("button")} <img src={arrow} alt="" />
                        </button>
                    </div>
                ))}
            </Slider>

            {openCardIndex !== null && (
                <div className="open-card">
                    <div className="overlay" onClick={() => setOpenCardIndex(null)} />
                    <div className="content">
                        <button className="close" onClick={() => setOpenCardIndex(null)}>
                            <img src={close} alt="close" />
                        </button>
                        <img src={cards[openCardIndex].img} alt="" />
                        <p>{t(cards[openCardIndex].description)}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
