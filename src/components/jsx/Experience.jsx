import '../styles/Experience.css'

function Experience({ language, data }) {
  const content = {
    en: { 
      title: 'Experience',
      location: 'Location',
      technologies: 'Technologies:'
    },
    fr: { 
      title: 'Expérience',
      location: 'Localisation',
      technologies: 'Technologies :'
    }
  }

  // Show work experience from newest to oldest
  const internships = [...data.work]

  // Map technology names to icon URLs
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
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{content[language].title}</h2>
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
                      <span className="exp-period">
                        {job.startDate} - {job.endDate}
                      </span>
                      <span className="exp-location">
                        {language === 'fr' && job.location_fr ? job.location_fr : job.location}
                      </span>
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
      </div>
    </section>
  )
}

export default Experience
