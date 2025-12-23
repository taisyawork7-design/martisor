import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import masterclass from "../images/masterclass1.png";
import bar2 from "../images/bar2.png";
import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import partner3 from "../images/partner3.jpg";
import partner4 from "../images/partner4.jpg";
import partner5 from "../images/partner5.png";
import partner6 from "../images/partner6.jpg";
import partner7 from "../images/partner 7.webp";
import partner8 from "../images/partner8.webp";
import partner9 from "../images/partner9.png";
import partner10 from "../images/partner10.png";
import partner11 from "../images/partner11.jpg";
import ban1 from "../images/ban1.png";
import ban2 from "../images/ban2.png";
import ban3 from "../images/ban3.png";
import ban4 from "../images/ban4.png";

import fair1 from "../images/fair2.png";
import food1 from "../images/food2.png";
import sitting1 from "../images/sitting1.png";
import kids1 from "../images/kids1.png";
import Date from "./Date";
import ZoneSection from "./Zone";

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
            <p className="banner__text__date__pc">28.02 - 1.03</p>
            <h2>{t("bannerDate")}</h2>
            <p className="banner__text__date__mobile">28.02 - 1.03</p>
            <h3>13:00-23:00</h3>{" "}
          </div>
          <div className="banner__text__info">
            <h1>
              MĂRȚIȘOR:{" "}
              <p>
                RED & <span>WHITE</span>{" "}
              </p>
            </h1>
            <h2>{t("slogan")}</h2>
            <a href="https://maps.app.goo.gl/a8FZtEnfqcVwHhay7" target="_blank">
              {t("address")}
            </a>
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
          <Date />
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

              <div
                className="activity__lists__list__open__item"
                style={{ color: "#7f0504" }}
              >
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
      <ZoneSection t={t} />
      <div className="partners">
        <div className="partners__border">
          <h1>{t("partners")}</h1>
          <div className="partners__border__items">
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img src={partner3} alt="" />
            <img src={partner11} alt="" />
            <img src={partner6} alt="" />
            <img src={partner7} alt="" />
            <img src={partner5} alt="" />
            <img src={partner8} alt="" />
            <img src={partner9} alt="" />
            <img src={partner4} alt="" />
            <img src={partner10} alt="" />
          </div>
        </div>
      </div>
      <div className="bans">
        <img src={ban1} alt="" />
        <img src={ban2} alt="" />
        <img src={ban3} alt="" />
        <img src={ban4} alt="" />
      </div>
      <div className="reasons">
        <div className="reasons__container">
          <h1>
            {t("reasonsTitle")} <br />
            MĂRȚIȘOR: <span>RED</span> & WHITE{" "}
          </h1>
          <div className="reasons__container__items">
            <div className="reasons__container__items__item">
              <h2>1</h2>
              <p>{t("reasons1")}</p>
            </div>
            <div className="reasons__container__items__item">
              <h2>2</h2>
              <p>{t("reasons2")}</p>
            </div>
            <div className="reasons__container__items__item">
              <h2>3</h2>
              <p>{t("reasons3")}</p>
            </div>
            <div className="reasons__container__items__item">
              <h2>4</h2>
              <p>{t("reasons4")}</p>
            </div>
            <div className="reasons__container__items__item">
              <h2>5</h2>
              <p>{t("reasons5")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="location">
        <h1>{t("locationTitle")}</h1>
        <a href="https://maps.app.goo.gl/a8FZtEnfqcVwHhay7" target="_blank">
          {t("address")}
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.2121986560574!2d28.829500176580574!3d47.02433657114222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3387c07c8d%3A0xd2ec02fd2daf3f58!2zUGlhyJthIE1hcmlpIEFkdW7Eg3JpIE5hyJtpb25hbGUsIENoaciZaW7Eg3UsINCc0L7Qu9C00L7QstCw!5e1!3m2!1sru!2s!4v1766384832750!5m2!1sru!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
