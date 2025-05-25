import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from "../../i18n"
import arrow from "../images/arrow.svg"

export default function Header({ onLanguageChange }) {
    const { t } = useTranslation('header')
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || "ru")
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage)
    }, [selectedLanguage])

    const changeLanguage = (lang) => {
        setSelectedLanguage(lang)
        localStorage.setItem("selectedLanguage", lang)
        onLanguageChange(lang)
        setDropdownOpen(false)
    }
    const languages= {ro: "Ro", ru: "Ру", en: "En"}
    const dropdownOptions = Object.entries(languages).filter(([key]) => key !== selectedLanguage)
    return (
        <header>
            <h1>WORK<span>TONE</span></h1>
            <nav>
                <a href="">{t("about")}</a>
                <a href="">{t("services")}</a>
                <a href="">{t("packages")}</a>
                <a href="">{t("contacts")}</a>
            </nav>
            <div className="change-language">
                <button onClick={()=> setDropdownOpen(!dropdownOpen)} >{languages[selectedLanguage]} <img src={arrow} alt="" /> </button>
                {dropdownOpen && (
                    <div className="dropdown">
                        {dropdownOptions.map(([key, label]) => (
                            <p key={key} onClick={()=> changeLanguage(key)}>
                                {label}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}
