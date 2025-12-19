import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import phone from "../images/phone.svg";
import location from "../images/location.svg";
import email from "../images/email.svg";
import inst from "../images/instagram.svg";
import telegram from "../images/telegram.svg";
import tik from "../images/tik.svg";
import SimpleForm from "./Form";
import SliderAbout from "./SliderAbout";
import SliderServicies from "./SliderServicies";
import left from "../images/left.svg";
import right from "../images/right.svg";
import carpetLine from "../images/carpetLine.png";
import sticker from "../images/sticker.svg";
import { Arrow } from "../images/Arrow";
import subcorpati from "../images/subcorpati.png";
import lupii from "../images/lupii.png";
import dj from "../images/dj.png";
import flueras from "../images/flueras.png";
import rimes from "../images/rimes.png";

export default function Home() {
  const { t } = useTranslation("main");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [isActivity2, setIsActivity2] = useState(false);

  return (
    <main>
      <div className="banner">
        <img src={left} alt="" />
        <div className="banner__text">
          <div className="banner__text__date">
            <p>28.02 - 1.03</p>
            <h2>{t("bannerDate")}</h2>
            <h3>13:00-23:00</h3>
          </div>
          <div className="banner__text__info">
            <h1>
              MĂRȚIȘOR:{" "}
              <p>
                RED & <span>WHITE</span>{" "}
              </p>
            </h1>
            <h2>{t("slogan")}</h2>
            <a href="">Great National Assembly Square, Chișinau</a>
          </div>
        </div>
        <img src={right} alt="" />
      </div>
      <div className="line">
        <img src={carpetLine} alt="" />
      </div>
      <div className="about" id="about">
        <div className="about__header">
          <img src={sticker} alt="" />
          <div className="about__header__text">
            <h1>
              {t("aboutH1")} MĂRȚIȘOR: <br /> <span>RED</span> & WHITE ?
            </h1>
            <p>{t("aboutp1")}</p>
          </div>
        </div>
        <div className="about__statistic">
          <div className="about__statistic__stat">
            <h2>2</h2>
            <div className="about__statistic__stat__line"></div>
            <p>{t("stat1")}</p>
          </div>
          <div className="about__statistic__stat">
            <h2>10</h2>
            <div className="about__statistic__stat__line"></div>
            <p>{t("stat2")}</p>
          </div>
          <div className="about__statistic__stat">
            <h2>20+</h2>
            <div className="about__statistic__stat__line"></div>
            <p>{t("stat3")}</p>
          </div>
          <div className="about__statistic__stat">
            <h2>3</h2>
            <div className="about__statistic__stat__line"></div>
            <p>{t("stat4")}</p>
          </div>
          <div className="about__statistic__stat">
            <h2>2+</h2>
            <div className="about__statistic__stat__line"></div>
            <p>{t("stat5")}</p>
          </div>
        </div>
      </div>
      <div className="slider" id="show">
        <h1>{t("showTitle")}</h1>
        <SliderAbout />
        <div className="slider__text">
          <h3>{t("showDate")}</h3>
          <p>{t("showText")}</p>
        </div>
      </div>
      <div className="artists" id="artists">
        <h1>{t("artistsTitle")}</h1>
        <div className="artists__lists">
          <div className="artists__lists__list">
            <button onClick={() => setIsOpen(!isOpen)}>
              {t("artistsDay1")}
              <Arrow className={isOpen ? "arrow arrow--open" : "arrow"} />
            </button>

            <div
              className={
                isOpen
                  ? "artists__lists__list__open artists__lists__list__open--active"
                  : "artists__lists__list__open"
              }
            >
              <div className="artists__lists__list__open__item">
                <img src={subcorpati} alt="" />
                <div className="artists__lists__list__open__item__text">
                  <h1>Subcarpați </h1>
                  <p>{t("artistsDay1P1")}</p>
                </div>
              </div>
              <div className="artists__lists__list__open__item">
                <div className="artists__lists__list__open__item__text">
                  <h1>Lupii lui Calancea </h1>
                  <p>{t("artistsDay1P2")}</p>
                </div>
                <img src={lupii} alt="" />
              </div>
              <div className="artists__lists__list__open__item">
                <img src={dj} alt="" />
                <div className="artists__lists__list__open__item__text">
                  <h1>DJ set </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="artists__lists__list">
            <button onClick={() => setIsOpen2(!isOpen2)}>
              {t("artistsDay2")}
              <Arrow className={isOpen2 ? "arrow arrow--open" : "arrow"} />
            </button>

            <div
              className={
                isOpen2
                  ? "artists__lists__list__open artists__lists__list__open--active"
                  : "artists__lists__list__open"
              }
            >
              <div className="artists__lists__list__open__item">
                <img src={flueras} alt="" />
                <div className="artists__lists__list__open__item__text">
                  <h1>Flueraș </h1>
                  <p>{t("artistsDay2P1")}</p>
                </div>
              </div>
              <div className="artists__lists__list__open__item">
                <div className="artists__lists__list__open__item__text">
                  <h1>Irina Rimes</h1>
                  <p>{t("artistsDay2P2")}</p>
                </div>
                <img src={rimes} alt="" />
              </div>
              <div className="artists__lists__list__open__item">
                <img src={dj} alt="" />
                <div className="artists__lists__list__open__item__text">
                  <h1>DJ set </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="activity" id="activity">
        <h1>{t("activityTitle")}</h1>

        <div className="activity__lists">
          <div className="activity__lists__list">
            <button onClick={() => setIsActivity(!isActivity)}>
              {t("activityDay1")}
              <Arrow className={isActivity ? "arrow arrow--open" : "arrow"} />
            </button>

            <div
              className={
                isActivity
                  ? "activity__lists__list__open activity__lists__list__open--active"
                  : "activity__lists__list__open"
              }
            >
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P1")}</p>
              </div>

              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P2")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P3")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P4")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P5")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P6")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P7")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P8")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P9")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay1P10")}</p>
              </div>
            </div>
          </div>

          <div className="activity__lists__list">
            <button onClick={() => setIsActivity2(!isActivity2)}>
              {t("activityDay2")}
              <Arrow className={isActivity2 ? "arrow arrow--open" : "arrow"} />
            </button>

            <div
              className={
                isActivity2
                  ? "activity__lists__list__open activity__lists__list__open--active"
                  : "activity__lists__list__open"
              }
            >
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P1")}</p>
              </div>

              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P2")}</p>
              </div>

              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P3")}</p>
              </div>

              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P4")}</p>
              </div>

              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P5")}</p>
              </div>

              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P6")}</p>
              </div>

              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P7")}</p>
              </div>

              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P8")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P9")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P10")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P11")}</p>
              </div>
              <div className="activity__lists__list__open__item">
                <p>{t("activityDay2P12")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form" id="contacts">
        <div className="information">
          <div className="contacts">
            <h1>{t("titleForm")}</h1>
            <a href="">
              <img src={phone} alt="" />
              +373 876 456
            </a>
            <a href="">
              <img src={location} alt="" />
              {t("addres")}
            </a>
            <a href="">
              <img src={email} alt="" />
              worktone2025@gmail.com
            </a>
            <div className="media">
              <a href="">
                <img src={inst} alt="" />
              </a>
              <a href="">
                <img src={telegram} alt="" />
              </a>
              <a href="">
                <img src={tik} alt="" />
              </a>
            </div>
          </div>
          <SimpleForm />
        </div>
      </div>
    </main>
  );
}
