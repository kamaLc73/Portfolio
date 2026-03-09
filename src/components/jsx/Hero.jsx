import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import '../styles/Hero.css'

function Hero({ language, data, navigateToSubSection }) {
  const typedRef = useRef(null)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Data Scientist',
        'Data Engineer',
        'Data Analyst',
        'Full Stack Engineer',
        'ML & AI Engineer',
        'DL Engineer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    })

    return () => typed.destroy()
  }, [language])

  const content = {
    en: {
      greeting: "Hi, I'm",
      name: "Kamal Dehbi",
      prefix: "I'm ",
      description: 'Turning insights into action. Creating thoughtful solutions that blend technical excellence with user experience.',
      descriptionMobile: 'Building AI & data solutions that turn raw insights into real impact.',
      cta: 'View My Work',
      secondary: 'Get In Touch',
      downloadResume: 'Download Resume',
      downloadResumeMobile: 'CV'
    },
    fr: {
      greeting: "Salut, je suis",
      name: "Kamal Dehbi",
      prefix: "Je suis ",
      description: "Transformer les idées en action. Créer des solutions réfléchies qui allient l'excellence technique à l'expérience utilisateur.",
      descriptionMobile: "Construire des solutions IA & data qui transforment les insights en impact.",
      cta: 'Voir Mon Travail',
      secondary: 'Me Contacter',
      downloadResume: 'Télécharger CV',
      downloadResumeMobile: 'CV'
    }
  }

  const handleDownloadResume = () => {
    const resumeFile = language === 'en' 
      ? '/cv/Dehbi-Kamal-Resume.pdf' 
      : '/cv/CV-Dehbi-Kamal.pdf'
    
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = resumeFile
    link.download = resumeFile
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const firstName = data.userFirstName
  const lastName = data.userLastName

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            {content[language].greeting}<br />
            {content[language].name}
          </h1>
          <p className="hero-subtitle">
            <span className="subtitle-prefix">{content[language].prefix}</span>
            <span ref={typedRef}></span>
          </p>
          <p className="hero-description">
            {isMobile ? content[language].descriptionMobile : content[language].description}
          </p>
          <div className="hero-ctas">
            <button 
              onClick={(e) => {
                e.preventDefault()
                navigateToSubSection('work', 0)
              }}
              className="cta-button primary"
            >
              {content[language].cta}
            </button>
            <a href="#contact" className="cta-button secondary">
              {content[language].secondary}
            </a>
            <button 
              onClick={handleDownloadResume}
              className="cta-button resume"
              title={content[language].downloadResume}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {isMobile ? content[language].downloadResumeMobile : content[language].downloadResume}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <img src="/logos/kamal.jpg" alt="Kamal Dehbi" />
          </div>
          <div className="availability-badge availability-badge--desktop">
            <span className="status-dot"></span>
            {language === 'en' 
              ? 'Available for Internships, Freelancing & Collaborations'
              : 'Disponible pour Stages, Freelance et Collaborations'}
          </div>
        </div>
      </div>

      <div className="availability-badge availability-badge--mobile">
        <span className="status-dot"></span>
        {language === 'en'
          ? 'Available for Internships, Freelancing & Collaborations'
          : 'Disponible pour Stages, Freelance et Collaborations'}
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero
