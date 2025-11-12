import '../styles/Navbar.css'
import { useState } from 'react'

function Navbar({ language, toggleLanguage, isDark, toggleTheme, data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const content = {
    en: {
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      skills: 'Tech Stack',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume'
    },
    fr: {
      about: 'À Propos',
      education: 'Formation',
      experience: 'Expérience',
      skills: 'Stack Technique',
      projects: 'Projets',
      contact: 'Contact',
      resume: 'CV'
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
            <img src="/logos/kamal.jpg" alt="Kamal Dehbi" className="logo-image" />
            <span className="logo-text">Kamal Dehbi</span>
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
          <a href="#about" className="nav-link" onClick={handleNavClick}>{content[language].about}</a>
          <a href="#education" className="nav-link" onClick={handleNavClick}>{content[language].education}</a>
          <a href="#experience" className="nav-link" onClick={handleNavClick}>{content[language].experience}</a>
          <a href="#skills" className="nav-link" onClick={handleNavClick}>{content[language].skills}</a>
          <a href="#projects" className="nav-link" onClick={handleNavClick}>{content[language].projects}</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>{content[language].contact}</a>
          
          <button className="lang-toggle" onClick={toggleLanguage}>
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
