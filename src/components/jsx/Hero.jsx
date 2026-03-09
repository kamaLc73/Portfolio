import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import '../styles/Hero.css'

function Hero({ language, data, navigateToSubSection }) {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Data Scientist',
        'Data Engineer',
        'Data Analyst',
        'Full Stack Engineer',
        'Machine Learning, AI Engineer',
        'Deep Learning Engineer'
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
      cta: 'View My Work',
      secondary: 'Get In Touch',
      downloadResume: 'Download Resume'
    },
    fr: {
      greeting: "Salut, je suis",
      name: "Kamal Dehbi",
      prefix: "Je suis ",
      cta: 'Voir Mon Travail',
      secondary: 'Me Contacter',
      downloadResume: 'Télécharger CV'
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
            {language === 'en' 
              ? 'Turning insights into action. Creating thoughtful solutions that blend technical excellence with user experience.'
              : 'Transformer les idées en action. Créer des solutions réfléchies qui allient l\'excellence technique à l\'expérience utilisateur.'}
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
              {content[language].downloadResume}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <img src="/logos/kamal.jpg" alt="Kamal Dehbi" />
          </div>
          <div className="availability-badge">
            <span className="status-dot"></span>
            {language === 'en' 
              ? 'Available for Internships, Freelancing & Collaborations'
              : 'Disponible pour Stages, Freelance et Collaborations'}
          </div>
        </div>
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
