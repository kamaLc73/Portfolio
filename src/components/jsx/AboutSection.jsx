import { useState, useEffect } from 'react'
import '../styles/AboutSection.css'

function AboutSection({ language, data }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')
  
  const content = {
    en: {
      sections: ['About Me', 'Education', 'Experience'],
      aboutTitle: 'About Me',
      subtitle: 'Data Science & AI Student at ENSAM Rabat, Morocco',
      bio: `I hunt patterns in chaos and build tools that think. Data scientist by curiosity, full-stack developer by craft—I live at the crossroads of AI and user experience, turning complex problems into elegant solutions that actually feel good to use.`,
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
      subtitle: 'Étudiant en Data Science & IA à ENSAM Rabat, Maroc',
      bio: `Je chasse les modèles dans le chaos et je construis des outils qui pensent. Data scientist par curiosité, développeur full-stack par métier—je vis au carrefour de l'IA et de l'expérience utilisateur, transformant les problèmes complexes en solutions élégantes qui sont vraiment agréables à utiliser.`,
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
      'Langchain': 'https://api.iconify.design/simple-icons:langchain.svg',
      'LangChain': 'https://api.iconify.design/simple-icons:langchain.svg',
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
      'CNN': '🧠'
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
                
                <button className="carousel-arrow" onClick={handlePrevious}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-left-0)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-left-0" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="15 18 9 12 15 6"></polyline>
                    <polyline points="20 18 14 12 20 6"></polyline>
                  </svg>
                </button>
                
                <h2 className="carousel-title">{content[language].sections[activeIndex]}</h2>
                
                <button className="carousel-arrow" onClick={handleNext}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-right-0)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-right-0" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="9 18 15 12 9 6"></polyline>
                    <polyline points="4 18 10 12 4 6"></polyline>
                  </svg>
                </button>
                
                <span className="section-nav-label next-section" onClick={handleNext}>
                  {content[language].sections[(activeIndex + 1) % 3]}
                </span>
              </div>
              
              <p className="about-subtitle">{content[language].subtitle}</p>
              <div className="about-content-wrapper">
                <div className="about-content">
                  <p className="about-bio">{content[language].bio}</p>
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
                
                <button className="carousel-arrow" onClick={handlePrevious}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-left-1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-left-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="15 18 9 12 15 6"></polyline>
                    <polyline points="20 18 14 12 20 6"></polyline>
                  </svg>
                </button>
                
                <h2 className="carousel-title">{content[language].sections[activeIndex]}</h2>
                
                <button className="carousel-arrow" onClick={handleNext}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-right-1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-right-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="9 18 15 12 9 6"></polyline>
                    <polyline points="4 18 10 12 4 6"></polyline>
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
                
                <button className="carousel-arrow" onClick={handlePrevious}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-left-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-left-2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="15 18 9 12 15 6"></polyline>
                    <polyline points="20 18 14 12 20 6"></polyline>
                  </svg>
                </button>
                
                <h2 className="carousel-title">{content[language].sections[activeIndex]}</h2>
                
                <button className="carousel-arrow" onClick={handleNext}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-right-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-right-2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="9 18 15 12 9 6"></polyline>
                    <polyline points="4 18 10 12 4 6"></polyline>
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
                        {(language === 'fr' && job.description_fr ? job.description_fr : job.description)
                          .split('*')
                          .filter(item => item.trim())
                          .map((point, idx) => (
                            <p key={idx}>• {point.trim()}</p>
                          ))}
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
}

export default AboutSection
