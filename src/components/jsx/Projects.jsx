import { useState } from 'react'
import '../styles/Projects.css'

function Projects({ language, data }) {
  const [showAll, setShowAll] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  const content = {
    en: { 
      title: 'Featured Projects',
      viewMore: 'View on GitHub',
      viewAll: 'View All Projects',
      showLess: 'Show Less'
    },
    fr: { 
      title: 'Projets en Vedette',
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

  const filterButtons = [
    { key: 'All', category: null },
    { key: 'AI', category: 'AI' },
    { key: 'ML', category: 'ML' },
    { key: 'Web', category: 'Web' },
    { key: 'Medical', category: 'Medical' }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? data.projects 
    : data.projects.filter(p => p.category === activeFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{content[language].title}</h2>
        </div>
        
        {/* Filter Buttons */}
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
                  {project.keywords.map((tech, tidx) => (
                    <span key={tidx} className="tech-badge">{tech}</span>
                  ))}
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
      </div>
    </section>
  )
}

export default Projects
