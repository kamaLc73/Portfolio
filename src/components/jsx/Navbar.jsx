import '../styles/Navbar.css'
import { useState } from 'react'

function Navbar({ language, toggleLanguage, isDark, toggleTheme, data, navigateToSubSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const content = {
    en: {
      aboutMe: 'About Me',
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      techStack: 'Tech Stack',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    fr: {
      aboutMe: 'À Propos',
      education: 'Formation',
      experience: 'Expérience',
      projects: 'Projets',
      techStack: 'Stack Technique',
      certifications: 'Certifications',
      contact: 'Contacte'
    }
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const handleSubSectionClick = (e, section, index) => {
    e.preventDefault()
    console.log('Navbar click:', section, index)
    if (navigateToSubSection) {
      navigateToSubSection(section, index)
    } else {
      console.error('navigateToSubSection is not defined')
    }
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
          <a href="#about-me" className="nav-link" onClick={(e) => handleSubSectionClick(e, 'about', 0)}>
            {content[language].aboutMe}
          </a>
          <a href="#education" className="nav-link" onClick={(e) => handleSubSectionClick(e, 'about', 1)}>
            {content[language].education}
          </a>
          <a href="#experience" className="nav-link" onClick={(e) => handleSubSectionClick(e, 'about', 2)}>
            {content[language].experience}
          </a>
          <a href="#projects" className="nav-link" onClick={(e) => handleSubSectionClick(e, 'work', 0)}>
            {content[language].projects}
          </a>
          <a href="#tech-stack" className="nav-link" onClick={(e) => handleSubSectionClick(e, 'work', 1)}>
            {content[language].techStack}
          </a>
          <a href="#certifications" className="nav-link" onClick={(e) => handleSubSectionClick(e, 'work', 2)}>
            {content[language].certifications}
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
