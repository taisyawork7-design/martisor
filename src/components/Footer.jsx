import React from "react";
import phone from "../images/phone.svg";
import location from "../images/location.svg";
import email from "../images/mail.svg";

import { useTranslation } from "react-i18next";
export default function () {
  const { t } = useTranslation("header");
  return (
    <footer>
      <div className="footer-top">
        <div className="logo">
          <h1>
            MĂRȚIȘOR: <br />
            RED & <span>WHITE</span>
          </h1>
          <p>{t("slogan")}</p>
        </div>
        <div className="navigation">
          <h2>{t("footerNav")}</h2>

          <a href="#about">{t("about")}</a>
          <a href="#show" onClick={() => setOpenMenu(false)}>
            {t("show")}
          </a>
          <a href="#artists" onClick={() => setOpenMenu(false)}>
            {t("artist")}
          </a>
          <a href="#activity" onClick={() => setOpenMenu(false)}>
            {t("activity")}
          </a>
          <a href="#location" onClick={() => setOpenMenu(false)}>
            {t("location")}
          </a>
        </div>
        <div className="contacts">
          <h2>{t("contacts")}</h2>

          <a href="tel:+37376574645">
            <img src={phone} alt="" />
            +37376574645
          </a>
          <a href="https://maps.app.goo.gl/a8FZtEnfqcVwHhay7" target="_blank">
            <img src={location} alt="" />
            {t("addres")}
          </a>
          <a href="mail: martisor">
            <img src={email} alt="" />
            martisor2025@gmail.com
          </a>
        </div>
      </div>
      <div className="footer-span">
        <h3>{t("footerSpan")} MĂRȚIȘOR: RED & WHITE</h3>
      </div>
    </footer>
  );
}
