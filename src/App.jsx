import { useState, useEffect } from 'react'
import data from '../__data__/data.json'
import Navbar from './components/jsx/Navbar'
import Hero from './components/jsx/Hero'
import AboutSection from './components/jsx/AboutSection'
import WorkSection from './components/jsx/WorkSection'
import Contact from './components/jsx/Contact'
import Footer from './components/jsx/Footer'

function App() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    // Force dark theme
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  useEffect(() => {
    // Scroll reveal animation
    const revealSections = () => {
      const sections = document.querySelectorAll('section')
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('reveal')
        }
      })
    }

    // Initial check
    revealSections()
    
    // Add scroll listener
    window.addEventListener('scroll', revealSections)
    
    return () => window.removeEventListener('scroll', revealSections)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  const toggleTheme = () => {
    // Theme toggle disabled - dark mode only
  }

  return (
    <div className="App" data-theme="dark">
      <Navbar language={language} toggleLanguage={toggleLanguage} isDark={true} toggleTheme={toggleTheme} data={data} />
      <Hero language={language} data={data} />
      <AboutSection language={language} data={data} />
      <WorkSection language={language} data={data} />
      <Contact language={language} data={data} />
      <Footer language={language} />
    </div>
  )
}

export default App
