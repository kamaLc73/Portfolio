import { useState } from 'react'
import '../styles/Certifications.css'

function Certifications({ language, data }) {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const content = {
    en: { 
      title: 'Certifications',
      viewCertificate: 'View Certificate',
      issuedBy: 'Issued by',
      viewAll: 'View All Certifications',
      certDescription: (issuer) => `Certificate from ${issuer} demonstrating proficiency and completion of the course requirements.`
    },
    fr: { 
      title: 'Certifications',
      viewCertificate: 'Voir le Certificat',
      issuedBy: 'Délivré par',
      viewAll: 'Voir Toutes les Certifications',
      certDescription: (issuer) => `Certificat de ${issuer} démontrant la maîtrise et l'achèvement des exigences du cours.`
    }
  }

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleViewAll = () => {
    setShowAll(!showAll)
  }

  const displayedCertifications = showAll ? data.certifications : data.certifications.slice(0, 2)

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{content[language].title}</h2>
        </div>
        <div className="certifications-list">
          {displayedCertifications.map((cert, index) => (
            <div key={index} className={`cert-item ${expandedIndex === index ? 'expanded' : ''}`}>
              <div className="cert-header" onClick={() => toggleExpand(index)}>
                <div className="cert-left">
                  {cert.logo && (
                    <div className="cert-logo">
                      <img src={cert.logo} alt={`${cert.issuedBy} logo`} />
                    </div>
                  )}
                  <div className="cert-info">
                    <h3>{cert.description}</h3>
                    <p className="cert-issuer">{content[language].issuedBy} {cert.issuedBy}</p>
                  </div>
                </div>
                <div className="cert-right">
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {content[language].viewCertificate}
                  </a>
                  <button className="expand-btn" aria-label="Toggle details">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none"
                      className={expandedIndex === index ? 'rotated' : ''}
                    >
                      <path 
                        d="M5 7.5L10 12.5L15 7.5" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {expandedIndex === index && (
                <div className="cert-details">
                  <p className="cert-description">
                    {content[language].certDescription(cert.issuedBy)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        {data.certifications.length > 2 && (
          <div className="view-all-wrapper">
            <button 
              onClick={handleViewAll}
              className="view-all-btn"
            >
              {showAll ? (language === 'en' ? 'Show Less' : 'Voir Moins') : content[language].viewAll}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={showAll ? 'rotated' : ''}>
                <path 
                  d="M7.5 5L12.5 10L7.5 15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
