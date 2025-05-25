import React, { useState, useEffect } from 'react'
import about from "../images/about.svg"
import { useTranslation } from 'react-i18next'
import card1 from "../images/analytics.jpg"
import card2 from "../images/psychologist.jpg"
import card3 from "../images/quest.jpg"
import card4 from "../images/training.jpg"
import card5 from "../images/vr.jpg"
import arrow from "../images/arrow_next.svg"
import close from "../images/close.svg"
import SimpleForm from './Form'

export default function Home() {
  const { t } = useTranslation('main')
  const[openCard1, setOpenCard1] = useState(false)
  const[openCard2, setOpenCard2] = useState(false)
  const[openCard3, setOpenCard3] = useState(false)
  const[openCard4, setOpenCard4] = useState(false)
  const[openCard5, setOpenCard5] = useState(false)
  useEffect(() => {
    const isAnyModalOpen = openCard1 || openCard2 || openCard3 || openCard4 || openCard5;
    document.body.style.overflow = isAnyModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [openCard1, openCard2, openCard3, openCard4, openCard5]);
  return (
    <main>
      <div className="banner">
        <h1>WORK<span>TONE</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, possimus.</p>
      </div>
      <div className="about">
        <h1> {t('aboutH1')}</h1>
        <div className="info">
          <div className="image">
            <img src={about} alt="" />
          </div>
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam, beatae id eligendi rem nostrum eaque voluptate asperiores fugit eum et numquam, dicta sapiente veniam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Adipisci</span> quasi, sequi suscipit nemo optio error!</p>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo!</h3>
          </div>

        </div>


      </div>
      <div className="services">
        <h1>{t('servicesTitle')}</h1>
        <div className="cards">
          <div className="card">
            <img src={card1} alt="" />
            <h2>{t('card1Title')}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nemo, laudantium eligendi modi adipisci culpa.</p>
            <button onClick={() => setOpenCard1(!openCard1)} >{t('button')} <img src={arrow} alt="" /> </button>
          </div>
          {openCard1 && (
            <div className="open-card">
              <div className="overlay" onClick={() => setOpenCard1(false)} >
              <div className="content">
              <div className="close"  >< img src={close} alt="" /></div>
              <img src={card1} alt=""  onClick={() => setOpenCard1(false)}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, corrupti. Totam unde vero repudiandae temporibus ut beatae mollitia corrupti corporis voluptate vitae porro dolor, blanditiis minus sapiente, debitis voluptatum, ea consequatur! Debitis sapiente commodi reiciendis tenetur nisi harum odio. Quisquam iste incidunt inventore quidem optio quos beatae distinctio molestiae perspiciatis.</p>
              </div>
              </div>
             
            </div>
          )}
          <div className="card">
            <img src={card2} alt="" />
            <h2>{t('card2Title')}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nemo, laudantium eligendi modi adipisci culpa.</p>
            <button>{t('button')} <img src={arrow} alt="" /> </button>
          </div>
          <div className="card">
            <img src={card3} alt="" />
            <h2>{t('card3Title')}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nemo, laudantium eligendi modi adipisci culpa.</p>
            <button>{t('button')} <img src={arrow} alt="" /> </button>
          </div>
          <div className="card">
            <img src={card4} alt="" />
            <h2>{t('card4Title')}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nemo, laudantium eligendi modi adipisci culpa.</p>
            <button>{t('button')} <img src={arrow} alt="" /> </button>
          </div>
          <div className="card">
            <img src={card5} alt="" />
            <h2>{t('card5Title')}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nemo, laudantium eligendi modi adipisci culpa.</p>
            <button>{t('button')} <img src={arrow} alt="" /> </button>
          </div>
        
        </div>
      </div>
      <div className="contact-form">
        <h1>{t('titleForm')}</h1>
      <SimpleForm/>
      </div>
    </main>
  )
}
