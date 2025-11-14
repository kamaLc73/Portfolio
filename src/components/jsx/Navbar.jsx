import '../styles/Navbar.css'
import { useState } from 'react'

function Navbar({ language, toggleLanguage, isDark, toggleTheme, data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const content = {
    en: {
      about: 'About Me',
      work: 'My Work',
      contact: 'Contact Me'
    },
    fr: {
      about: 'À Propos',
      work: 'Projets',
      contact: 'Contactez-moi'
    }
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">
            <span className="logo-text">KAMAL DEHBI</span>
          </a>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={handleNavClick}>
            {content[language].about}
          </a>
          <a href="#work" className="nav-link" onClick={handleNavClick}>
            {content[language].work}
          </a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>
            {content[language].contact}
          </a>
          
          <button className="lang-toggle" onClick={toggleLanguage}>
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
