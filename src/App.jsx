import { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
const [selectedLanguage, setSelectedLanguage] = useState('ru')

useEffect(()=> {
  const savedLanguage = localStorage.getItem('selectedLanguage')
  if(savedLanguage){
    setSelectedLanguage(savedLanguage)
  }
})

const handleLanguageChange = (lang) => {
  setSelectedLanguage(lang)
  localStorage.setItem('selectedLanguage', lang)
}

  return (
    <>
  <Header onLanguageChange={handleLanguageChange}/>
  <Home context={{ selectedLanguage }} />
  <Footer/>
    </>
  )
}

export default App
