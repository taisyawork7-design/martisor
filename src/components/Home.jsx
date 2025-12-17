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

export default function Home() {
  const { t } = useTranslation("main");

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
            <h2>Feel the Pulse of Spring & Tradition</h2>
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
              {t("aboutH1")} MĂRȚIȘOR: <span>RED</span> & WHITE ?
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
      <div className="artists" id="artists">
        <div className="artists__lists">.</div>
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
