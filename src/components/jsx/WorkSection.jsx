import { useState, useEffect } from 'react'
import '../styles/WorkSection.css'

function WorkSection({ language, data }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const content = {
    en: {
      sections: ['Projects', 'Tech Stack'],
      title: 'My Work',
      viewMore: 'View on GitHub',
      viewAll: 'View All Projects',
      showLess: 'Show Less'
    },
    fr: {
      sections: ['Projets', 'Stack Technique'],
      title: 'Réalisations',
      viewMore: 'Voir sur GitHub',
      viewAll: 'Voir Tous les Projets',
      showLess: 'Voir Moins'
    }
  }

  const categories = {
    en: {
      all: 'All',
      ai: 'Artificial Intelligence',
      ml: 'Machine Learning',
      web: 'Web Development',
      medical: 'Medical AI'
    },
    fr: {
      all: 'Tous',
      ai: 'Intelligence Artificielle',
      ml: 'Machine Learning',
      web: 'Développement Web',
      medical: 'IA Médicale'
    }
  }

  const categoryLabels = {
    programming: language === 'en' ? 'Programming Languages' : 'Langages de Programmation',
    machinelearning: language === 'en' ? 'Machine Learning & AI' : 'Machine Learning - IA',
    dataanalysis: language === 'en' ? 'Data Analysis & Visualization' : 'Analyse de Données - Viz',
    bigdata: language === 'en' ? 'Big Data' : 'Big Data',
    webdev: language === 'en' ? 'Web Development' : 'Développement Web',
    tools: language === 'en' ? 'Tools & Platforms' : 'Outils - Plateformes',
    database: language === 'en' ? 'Databases' : 'Bases de Données'
  }

  const categoryIcons = {
    programming: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    machinelearning: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    dataanalysis: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    bigdata: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 11a9 9 0 0 1 9 9"></path>
        <path d="M4 4a16 16 0 0 1 16 16"></path>
        <circle cx="5" cy="19" r="1"></circle>
      </svg>
    ),
    webdev: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    tools: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    database: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    )
  }

  const filterButtons = [
    { key: 'All', category: null },
    { key: 'AI', category: 'AI' },
    { key: 'ML', category: 'ML' },
    { key: 'Web', category: 'Web' },
    { key: 'Medical', category: 'Medical' }
  ]

  // Auto-rotate carousel every 30 seconds with slide direction
  useEffect(() => {
    // Auto-rotation disabled for WorkSection
    return () => {}
  }, [])

  const handleNavClick = (index) => {
    setSlideDirection(index > activeIndex ? 'next' : 'prev')
    setActiveIndex(index)
    // Scroll to section top
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePrevious = () => {
    setSlideDirection('prev')
    setActiveIndex((prev) => (prev - 1 + 2) % 2)
    // Scroll to section top
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNext = () => {
    setSlideDirection('next')
    setActiveIndex((prev) => (prev + 1) % 2)
    // Scroll to section top
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filteredProjects = activeFilter === 'All' 
    ? data.projects 
    : data.projects.filter(p => p.category === activeFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  // Skill icon mapping
  const getSkillIcon = (skillName) => {
    const iconMap = {
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'R': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
      'MATLAB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
      'Scala': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
      'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
      'XGBoost': '🚀',
      'Spacy': 'https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg',
      'LangChain': 'https://api.iconify.design/simple-icons:langchain.svg',
      'YOLO': '👁️',
      'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
      'Seaborn': '📊',
      'Plotly': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg',
      'Power BI': '📈',
      'Google Looker Studio': '📉',
      'Apache Kafka': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      'Hadoop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg',
      'Hive': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg',
      'Pig': '/icons/pig.png',
      'Sqoop': 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Apache_Sqoop_logo.svg',
      'Spark': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
      'HBase': '/icons/Apache_HBase-Logo.png',
      'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'Java EE': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Streamlit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'Jinja': '/icons/Jinja_logo.png',
      'SQLAlchemy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg',
      'Beautiful Soup': '🍜',
      'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'AWS Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      'Oracle SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'Neo4j': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg'
    }
    return iconMap[skillName] || '⚙️'
  }

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="carousel-content">
          {/* Projects */}
          {activeIndex === 0 && (
            <div className={`carousel-slide slide-${slideDirection}`}>
              <div className="carousel-header">
                <button className="carousel-arrow" onClick={handlePrevious}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-left-work)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-left-work" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="15 18 9 12 15 6"></polyline>
                    <polyline points="20 18 14 12 20 6"></polyline>
                  </svg>
                </button>
                
                <h2 className="carousel-title">{content[language].sections[0]}</h2>
                
                <button className="carousel-arrow" onClick={handleNext}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-right-work)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-right-work" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="9 18 15 12 9 6"></polyline>
                    <polyline points="4 18 10 12 4 6"></polyline>
                  </svg>
                </button>
              </div>
              
              <div className="filter-buttons">
                {filterButtons.map((filter) => (
                  <button
                    key={filter.key}
                    className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter.key)}
                  >
                    {categories[language][filter.key.toLowerCase()]}
                  </button>
                ))}
              </div>

              <div className="projects-grid">
                {displayedProjects.map((project, idx) => (
                  <div key={idx} className="project-card">
                    <div className="project-content">
                      <h3>{language === 'fr' && project.name_fr ? project.name_fr : project.name}</h3>
                      <p>{language === 'fr' && project.description_fr ? project.description_fr : project.description}</p>
                      <div className="project-tech">
                        {project.keywords.map((tech, tidx) => {
                          const icon = getSkillIcon(tech)
                          const isUrl = typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('/'))
                          const hasIcon = icon !== '⚙️' && icon !== null && icon !== undefined
                          return (
                            <span key={tidx} className="tech-badge">
                              {hasIcon && isUrl ? (
                                <img src={icon} alt={tech} className="tech-icon" />
                              ) : hasIcon ? (
                                <span className="tech-emoji">{icon}</span>
                              ) : null}
                              <span className="tech-name">{tech}</span>
                            </span>
                          )
                        })}
                      </div>
                    </div>
                    <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      {content[language].viewMore}
                    </a>
                  </div>
                ))}
              </div>

              {filteredProjects.length > 6 && (
                <div className="view-all-container">
                  <button 
                    className="view-all-btn" 
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? content[language].showLess : content[language].viewAll}
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className={`arrow-icon ${showAll ? 'rotated' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              )}
              
              <div className="carousel-bottom-nav">
                <button className="bottom-nav-arrow" onClick={handleNext}>
                  <span>{content[language].sections[1]}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {activeIndex === 1 && (
            <div className={`carousel-slide slide-${slideDirection}`}>
              <div className="carousel-header">
                <button className="carousel-arrow" onClick={handlePrevious}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-left-work2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-left-work2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="15 18 9 12 15 6"></polyline>
                    <polyline points="20 18 14 12 20 6"></polyline>
                  </svg>
                </button>
                
                <h2 className="carousel-title">{content[language].sections[1]}</h2>
                
                <button className="carousel-arrow" onClick={handleNext}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-right-work2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-right-work2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#01C16A', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <polyline points="9 18 15 12 9 6"></polyline>
                    <polyline points="4 18 10 12 4 6"></polyline>
                  </svg>
                </button>
              </div>
              
              <div className="skills-grid">
                {data.skills.map((category, idx) => (
                  <div key={idx} className="skill-category">
                    <div className="category-header">
                      <div className="category-icon">
                        {categoryIcons[category.skillType]}
                      </div>
                      <h3>{categoryLabels[category.skillType]}</h3>
                    </div>
                    <div className="skill-tags">
                      {category.skillValues.map((skill, sidx) => {
                        const skillName = typeof skill === 'string' ? skill : skill.name
                        const skillIcon = typeof skill === 'string' ? getSkillIcon(skill) : (skill.logo || getSkillIcon(skill.name))
                        const isUrl = typeof skillIcon === 'string' && (skillIcon.startsWith('http') || skillIcon.startsWith('/'))
                        const hasIcon = skillIcon !== '⚙️' && skillIcon !== null && skillIcon !== undefined
                        
                        return (
                          <span key={sidx} className="skill-tag">
                            {hasIcon && isUrl ? (
                              <img src={skillIcon} alt={skillName} className="skill-icon" />
                            ) : hasIcon ? (
                              <span className="skill-emoji">{skillIcon}</span>
                            ) : null}
                            <span className="skill-name">{skillName}</span>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="carousel-bottom-nav">
                <button className="bottom-nav-arrow" onClick={handlePrevious}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  <span>{content[language].sections[0]}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
