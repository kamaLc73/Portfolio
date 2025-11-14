import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import '../styles/Hero.css'

function Hero({ language, data }) {
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
            <a href="#work" className="cta-button primary">{content[language].cta}</a>
            <a href="#contact" className="cta-button secondary">
              {content[language].secondary}
            </a>
            <button 
              onClick={handleDownloadResume}
              className="cta-button resume"
              title={content[language].downloadResume}
            >
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
