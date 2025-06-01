import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import card1 from "../images/analytics.jpg"
import card2 from "../images/psychologist.jpg"
import card3 from "../images/quest.jpg"
import card4 from "../images/training.jpg"
import card5 from "../images/vr.jpg"
import phone from "../images/phone.svg"
import location from "../images/location.svg"
import email from "../images/email.svg"
import inst from "../images/instagram.svg"
import telegram from "../images/telegram.svg"
import tik from "../images/tik.svg"
import SimpleForm from './Form'
import SliderAbout from './SliderAbout'
import SliderServicies from './SliderServicies'



export default function Home() {
  const { t } = useTranslation('main');


  return (
    <main>
      <div className="banner">
        <h1>WORK<span>TONE</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, possimus.</p>
      </div>
      <div className="about">
        <h1>{t('aboutH1')}</h1>
        <div className="info">
          <SliderAbout />
          <div className="text">
            <p><span>WORKTONE </span>{t('aboutp1')}</p>
            <p>{t('aboutp2')}<span>WORKTONE</span>{t('aboutp3')}</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="services">
        <h1>{t('servicesTitle')}</h1>
      <SliderServicies/>
      </div>
      <div className="packages">
        <h1>Пакеты</h1>
        <div className="dates">
          <div className="data">
            <img src={card1} alt="" />
            <h1>Premium</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet recusandae fuga. Odio quisquam adipisci, minima ipsum ipsa exercitationem commodi?</p>
            <h3>100 €</h3>
          </div>
          <div className="data">
            <img src={card1} alt="" />
            <h1>Premium</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet recusandae fuga. Odio quisquam adipisci, minima ipsum ipsa exercitationem commodi?</p>
            <h3>100 €</h3>
          </div>
          <div className="data">
            <img src={card1} alt="" />
            <h1>Premium</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet recusandae fuga. Odio quisquam adipisci, minima ipsum ipsa exercitationem commodi?</p>
            <h3>100 €</h3>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h1>{t('titleForm')}</h1>
        <div className="information">
          <div className="contacts">
            <a href=""><img src={phone} alt="" />+373 876 456</a>
            <a href=""><img src={location} alt="" />ул. Дечебал 20/5</a>
            <a href=""><img src={email} alt="" />worktone2025@gmail.com</a>
            <div className="media">
              <a href=""><img src={inst} alt="" /></a>
              <a href=""><img src={telegram} alt="" /></a>
              <a href=""><img src={tik} alt="" /></a>
            </div>
          </div>
        <SimpleForm />
        </div>
      </div>
    </main>
  );
}
