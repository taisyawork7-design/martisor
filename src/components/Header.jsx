import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import arrow from "../images/arrow.svg";
import { TbMenu2 } from "react-icons/tb";
import martisor from "../images/martisor.svg";
import { Arrow } from "../images/Arrow";

export default function Header({ onLanguageChange }) {
  const { t } = useTranslation("header");
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ru"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    onLanguageChange(lang);
    setDropdownOpen(false);
  };
  const languages = { ro: "Ro", ru: "Ру", en: "En" };
  const dropdownOptions = Object.entries(languages).filter(
    ([key]) => key !== selectedLanguage
  );
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  return (
    <header>
      <div className="logo">
        <img src={martisor} alt="" />
        <h1>
          {" "}
          MĂRȚIȘOR:{" "}
          <p>
            RED & <span>WHITE</span>{" "}
          </p>
        </h1>
      </div>
      <nav>
        <a href="#about">{t("about")}</a>
        <a href="#show">{t("show")}</a>
        <a href="#artists">{t("artist")}</a>
        <a href="#activity">{t("activity")}</a>
        <a href="#contacts">{t("location")}</a>
        <a href="#contacts">+37376574645</a>
      </nav>
      <div className="change-language">
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          {languages[selectedLanguage]} <Arrow />
        </button>
        {dropdownOpen && (
          <div className="dropdown">
            {dropdownOptions.map(([key, label]) => (
              <p key={key} onClick={() => changeLanguage(key)}>
                {label}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="burger-menu">
        <button onClick={() => setOpenMenu(!openMenu)}>
          <TbMenu2 />
        </button>
        {openMenu && (
          <div className="open-menu">
            <div className="menu">
              <h1>
                WORK<span>TONE</span>
              </h1>
              <a href="#about" onClick={() => setOpenMenu(false)}>
                {t("about")}
              </a>
              <a href="#services" onClick={() => setOpenMenu(false)}>
                {t("services")}
              </a>
              <a href="#packages" onClick={() => setOpenMenu(false)}>
                {t("packages")}
              </a>
              <a href="#contacts" onClick={() => setOpenMenu(false)}>
                {t("contacts")}
              </a>
              <div className="mobile-dropdown">
                {Object.keys(languages).map((lang) => (
                  <p
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={i18n.language === lang ? "active" : ""}
                  >
                    {languages[lang]}
                  </p>
                ))}
              </div>
            </div>
            <div className="overlay" onClick={() => setOpenMenu(false)}></div>
          </div>
        )}
      </div>
    </header>
  );
}
