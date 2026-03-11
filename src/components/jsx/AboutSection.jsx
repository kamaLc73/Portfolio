import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import '../styles/AboutSection.css'

const AboutSection = forwardRef(({ language, data }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useImperativeHandle(ref, () => ({
    navigateToSlide: (index) => {
      console.log('AboutSection navigateToSlide called with index:', index, 'current activeIndex:', activeIndex)
      setSlideDirection(index > activeIndex ? 'next' : 'prev')
      setActiveIndex(index)
      // Scroll to section top
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }), [activeIndex])
  
  const content = {
    en: {
      sections: ['About Me', 'Education', 'Experience'],
      aboutTitle: 'About Me',
      subtitle: <>Final Year Engineering Student in Data Science & AI<span className="subtitle-location"> at ENSAM Rabat, Morocco</span></>,
      subtitlePlain: 'Final Year Engineering Student in Data Science & AI at ENSAM Rabat, Morocco',
      bio: `Passionate about data, AI, and building end-to-end applications. I enjoy turning raw data into meaningful insights and ideas into clean, working products — bridging the gap between machine learning and real user needs.`,
      bioMobile: `Passionate about data & AI — turning raw data into insights and ideas into working products.`,
      bio2: `Currently focused on deepening my expertise in MLOps, LLM-powered applications, and data engineering pipelines — while wrapping up projects in data analysis and computer vision as part of my engineering thesis.`,
      bio2Mobile: `Deepening expertise in MLOps, LLMs & data engineering pipelines.`,
      institution: 'Institution',
      location: 'Location',
      now: 'Now',
      expected: 'Expected',
      technologies: 'Technologies:',
      issuedBy: 'Issued by',
      viewCertificate: 'View Certificate'
    },
    fr: {
      sections: ['À Propos', 'Formation', 'Expérience'],
      aboutTitle: 'À Propos',
      subtitle: <>Étudiant Ingénieur en dernière année en Data Science & IA<span className="subtitle-location"> à ENSAM Rabat, Maroc</span></>,
      subtitlePlain: 'Étudiant Ingénieur en dernière année en Data Science & IA à ENSAM Rabat, Maroc',
      bio: `Passionné par la data, l'IA et le développement d'applications de bout en bout. J'aime transformer des données brutes en insights utiles et des idées en produits concrets — en faisant le lien entre le machine learning et les besoins réels des utilisateurs.`,
      bioMobile: `Passionné par la data & l'IA — je transforme les données brutes en insights et les idées en produits concrets.`,
      bio2: `Actuellement concentré sur MLOps, les applications propulsées par des LLMs et les pipelines de data engineering — tout en finalisant des projets en analyse de données et vision par ordinateur dans le cadre de mon projet de fin d'études.`,
      bio2Mobile: `Concentré sur MLOps, les LLMs et les pipelines de data engineering.`,
      institution: 'Établissement',
      location: 'Localisation',
      now: 'Actuellement',
      expected: 'Prévu',
      technologies: 'Technologies :',
      issuedBy: 'Délivré par',
      viewCertificate: 'Voir le Certificat'
    }
  }

  // Auto-rotate carousel disabled
  useEffect(() => {
    return () => {}
  }, [])

  const handleNavClick = (index) => {
    setSlideDirection(index > activeIndex ? 'next' : 'prev')
    setActiveIndex(index)
    // Scroll to section top
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePrevious = () => {
    setSlideDirection('prev')
    setActiveIndex((prev) => (prev - 1 + 3) % 3)
    // Scroll to section top
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNext = () => {
    setSlideDirection('next')
    setActiveIndex((prev) => (prev + 1) % 3)
    // Scroll to section top
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const education = [...data.education].reverse()
  const internships = [...data.work]

  // Tech icon mapping
  const getTechIcon = (techName) => {
    const iconMap = {
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Langchain': 'https://api.iconify.design/simple-icons:langchain.svg?color=white',
      'LangChain': 'https://api.iconify.design/simple-icons:langchain.svg?color=white',
      'RAG': '🔗',
      'Groq API': '⚡',
      'Streamlit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'SQLAlchemy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg',
      'Sqoop': '🔄',
      'CNN': '🧠',
      'YOLO': 'https://api.iconify.design/simple-icons:ultralytics.svg?color=white',
      'Llama': 'https://api.iconify.design/simple-icons:meta.svg?color=white',
      'MarianMT': 'https://api.iconify.design/mdi:translate.svg?color=white'
    }
    return iconMap[techName] || '⚙️'
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="carousel-content">
          {/* About Me */}
          {activeIndex === 0 && (
            <div className={`carousel-slide slide-${slideDirection}`}>
              <div className="carousel-header">
                <span className="section-nav-label prev-section" onClick={handlePrevious}>
                  {content[language].sections[(activeIndex - 1 + 3) % 3]}
                </span>
                
                <button className="carousel-arrow carousel-arrow--prev" onClick={handlePrevious}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#01C16A" strokeWidth="1.5"/>
                    <polyline points="21 11 13 18 21 25" stroke="#01C16A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <h2 className="carousel-title">{content[language].sections[activeIndex]}</h2>
                
                <button className="carousel-arrow carousel-arrow--next" onClick={handleNext}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#01C16A" strokeWidth="1.5"/>
                    <polyline points="15 11 23 18 15 25" stroke="#01C16A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <span className="section-nav-label next-section" onClick={handleNext}>
                  {content[language].sections[(activeIndex + 1) % 3]}
                </span>
              </div>
              
              <p className="about-subtitle">{content[language].subtitle}</p>
              <div className="about-content-wrapper">
                <div className="about-content">
                  <p className="about-bio">{isMobile ? content[language].bioMobile : content[language].bio}</p>
                  <p className="about-bio about-bio-2">{isMobile ? content[language].bio2Mobile : content[language].bio2}</p>
                </div>
                
                <div className="stats-grid">
                  <div className="stat-card">
                    <h3 className="stat-number">10+</h3>
                    <p className="stat-label">
                      {language === 'en' ? 'AI/ML Projects' : 'Projets IA/ML'}
                    </p>
                  </div>
                  <div className="stat-card">
                    <h3 className="stat-number">2</h3>
                    <p className="stat-label">
                      {language === 'en' ? 'Internships' : 'Stages'}
                    </p>
                  </div>
                  <div className="stat-card">
                    <h3 className="stat-number">30+</h3>
                    <p className="stat-label">
                      {language === 'en' ? 'Technologies' : 'Technologies'}
                    </p>
                  </div>
                  <div className="stat-card">
                    <h3 className="stat-number">3+</h3>
                    <p className="stat-label">
                      {language === 'en' ? 'Years of Experience' : 'Années d\'expérience'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="carousel-bottom-nav">
                <button className="bottom-nav-arrow" onClick={handlePrevious}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="bottom-nav-arrow" onClick={handleNext}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Education */}
          {activeIndex === 1 && (
            <div className={`carousel-slide slide-${slideDirection}`}>
              <div className="carousel-header">
                <span className="section-nav-label prev-section" onClick={handlePrevious}>
                  {content[language].sections[(activeIndex - 1 + 3) % 3]}
                </span>
                
                <button className="carousel-arrow carousel-arrow--prev" onClick={handlePrevious}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#01C16A" strokeWidth="1.5"/>
                    <polyline points="21 11 13 18 21 25" stroke="#01C16A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <h2 className="carousel-title">{content[language].sections[activeIndex]}</h2>
                
                <button className="carousel-arrow carousel-arrow--next" onClick={handleNext}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#01C16A" strokeWidth="1.5"/>
                    <polyline points="15 11 23 18 15 25" stroke="#01C16A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <span className="section-nav-label next-section" onClick={handleNext}>
                  {content[language].sections[(activeIndex + 1) % 3]}
                </span>
              </div>
              
              <div className="education-timeline">
                {education.map((edu, index) => {
                  const startYear = edu.startDate.split(' ')[1]
                  const endYear = edu.completionDate.split(' ')[1]
                  const isCurrentEdu = index === 0
                  const dateText = isCurrentEdu 
                    ? `${startYear} - ${content[language].now} (${content[language].expected} ${endYear})`
                    : `${startYear} - ${endYear}`
                  const institutionLink = edu.institution === 'ENSAM' ? 'https://ensam.um5.ac.ma/' : null
                  
                  return (
                    <div key={index} className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                      <div className="edu-date-badge">{dateText}</div>
                      <div className="education-card">
                        <div className="edu-header">
                          {edu.logo && (
                            <div className="institution-logo">
                              <img src={edu.logo} alt={`${edu.institution} logo`} />
                            </div>
                          )}
                          <div className="edu-title-group">
                            <h3>{language === 'fr' && edu.degree_fr ? edu.degree_fr : edu.degree}</h3>
                            <p className="edu-field">
                              {language === 'fr' && edu.field_fr ? edu.field_fr : edu.field}
                              {(edu.score || edu.score_fr) && (
                                <span className="edu-honors-inline"> : {language === 'fr' && edu.score_fr ? edu.score_fr : edu.score}</span>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="edu-details">
                          <div className="detail-row">
                            <span className="detail-label">{content[language].institution}:</span>
                            {institutionLink ? (
                              <a href={institutionLink} target="_blank" rel="noopener noreferrer" className="detail-value detail-link">{edu.institution}</a>
                            ) : (
                              <span className="detail-value">{edu.institution}</span>
                            )}
                          </div>
                          <div className="detail-row">
                            <span className="detail-label">{content[language].location}:</span>
                            <span className="detail-value">{language === 'fr' && edu.location_fr ? edu.location_fr : edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <div className="carousel-bottom-nav">
                <button className="bottom-nav-arrow" onClick={handlePrevious}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="bottom-nav-arrow" onClick={handleNext}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Experience */}
          {activeIndex === 2 && (
            <div className={`carousel-slide slide-${slideDirection}`}>
              <div className="carousel-header">
                <span className="section-nav-label prev-section" onClick={handlePrevious}>
                  {content[language].sections[(activeIndex - 1 + 3) % 3]}
                </span>
                
                <button className="carousel-arrow carousel-arrow--prev" onClick={handlePrevious}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#01C16A" strokeWidth="1.5"/>
                    <polyline points="21 11 13 18 21 25" stroke="#01C16A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <h2 className="carousel-title">{content[language].sections[activeIndex]}</h2>
                
                <button className="carousel-arrow carousel-arrow--next" onClick={handleNext}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#01C16A" strokeWidth="1.5"/>
                    <polyline points="15 11 23 18 15 25" stroke="#01C16A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <span className="section-nav-label next-section" onClick={handleNext}>
                  {content[language].sections[(activeIndex + 1) % 3]}
                </span>
              </div>
              
              <div className="experience-timeline">
                {internships.map((job, index) => (
                  <div key={index} className="experience-item">
                    <div className="timeline-marker"></div>
                    <div className="experience-card">
                      <div className="exp-header">
                        <div className="exp-header-top">
                          {job.logo && (
                            <div className="company-logo">
                              <img src={job.logo} alt={`${job.company} logo`} />
                            </div>
                          )}
                          <div className="exp-title-group">
                            <h3>{language === 'fr' && job.role_fr ? job.role_fr : job.role}</h3>
                            <span className="exp-company">{job.company}</span>
                          </div>
                        </div>
                        <div className="exp-meta">
                          <div className="exp-meta-left">
                            <span className="exp-period">{job.startDate} - {job.endDate}</span>
                            <span className="exp-location">{language === 'fr' && job.location_fr ? job.location_fr : job.location}</span>
                          </div>
                          {job.projectUrl && (
                            <a href={job.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn-header">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                              {language === 'fr' ? 'Voir le Projet' : 'View Project'}
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="exp-description">
                        {(() => {
                          const desc = isMobile
                            ? (language === 'fr' && job.description_fr_mobile ? job.description_fr_mobile : (job.description_mobile || (language === 'fr' && job.description_fr ? job.description_fr : job.description)))
                            : (language === 'fr' && job.description_fr ? job.description_fr : job.description)
                          return desc
                            .split('*')
                            .filter(item => item.trim())
                            .map((point, idx) => (
                              <p key={idx}>• {point.trim()}</p>
                            ))
                        })()}
                      </div>
                      {job.technologies && job.technologies.length > 0 && (
                        <div className="exp-technologies">
                          <h4>{content[language].technologies}</h4>
                          <div className="tech-tags">
                            {job.technologies.map((tech, idx) => {
                              const icon = getTechIcon(tech)
                              const isUrl = typeof icon === 'string' && icon.startsWith('http')
                              return (
                                <span key={idx} className="tech-tag">
                                  {isUrl ? (
                                    <img src={icon} alt={tech} className="tech-icon" />
                                  ) : (
                                    <span className="tech-emoji">{icon}</span>
                                  )}
                                  <span className="tech-name">{tech}</span>
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="carousel-bottom-nav">
                <button className="bottom-nav-arrow" onClick={handlePrevious}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="bottom-nav-arrow" onClick={handleNext}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
})

export default AboutSection
