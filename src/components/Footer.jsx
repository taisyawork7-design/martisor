import React from 'react'
import phone from "../images/phone.svg"
import location from "../images/location.svg"
import email from "../images/email.svg"
import inst from "../images/instagram.svg"
import telegram from "../images/telegram.svg"
import tik from "../images/tik.svg"
export default function () {
  return (
    <footer>
      <div className="footer-top">
        <div className="logo">
          <h1>WORK <span>TONE</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="navigation">
          <h2>Навигация</h2>
          
            <a href="">О нас</a>
            <a href="">Услуги</a>
            <a href="">Пакеты</a>
            <a href="">Контакты</a>
         

        </div>
        <div className="contacts">
          <h2>Контакты</h2>
          
            <a href=""><img src={phone} alt="" />+373 876 456</a>
            <a href=""><img src={location} alt="" />ул. Дечебал 20/5</a>
            <a href=""><img src={email} alt="" />worktone2025@gmail.com</a>
            <div className="media">
              <a href=""><img src={inst} alt="" /></a>
              <a href=""><img src={telegram} alt="" /></a>
              <a href=""><img src={tik} alt="" /></a>
            
          </div>
        </div>
      </div>
      <div className="footer-span">
        <h3>Pазработано WORKTONE © Все права защищены 2025.</h3>
      </div>
    </footer>
  )
}
