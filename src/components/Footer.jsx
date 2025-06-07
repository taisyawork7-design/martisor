import React from 'react'
import phone from "../images/phone.svg"
import location from "../images/location.svg"
import email from "../images/email.svg"
import inst from "../images/instagram.svg"
import telegram from "../images/telegram.svg"
import tik from "../images/tik.svg"
import { useTranslation } from 'react-i18next'
export default function () {
  const {t} = useTranslation('main')
  return (
    <footer>
      <div className="footer-top">
        <div className="logo">
          <h1>WORK <span>TONE</span></h1>
          <p>{t('footerText')}</p>
        </div>
        <div className="navigation">
          <h2>{t('footerNav')}</h2>
          
          <a href="#about" onClick={() => setOpenMenu(false)}>{t("about")}</a>
                            <a href="#services" onClick={() => setOpenMenu(false)}>{t("services")}</a>
                            <a href="#packages" onClick={() => setOpenMenu(false)}>{t("packages")}</a>
                            <a href="#contacts" onClick={() => setOpenMenu(false)}>{t("contacts")}</a>
         

        </div>
        <div className="contacts">
          <h2>{t('titleForm')}</h2>
          
            <a href=""><img src={phone} alt="" />+373 876 456</a>
            <a href=""><img src={location} alt="" />{t('addres')}</a>
            <a href=""><img src={email} alt="" />worktone2025@gmail.com</a>
           
        </div>
      </div>
      <div className="footer-span">
        <h3>{t('footerSpan')}</h3>
      </div>
    </footer>
  )
}
