import '../styles/Education.css'

function Education({ language, data }) {
  const content = {
    en: { 
      title: 'Education',
      institution: 'Institution',
      location: 'Location',
      now: 'Now',
      expected: 'Expected',
      months: {
        'September': 'September',
        'June': 'June'
      }
    },
    fr: { 
      title: 'Formation',
      institution: 'Établissement',
      location: 'Localisation',
      now: 'Actuellement',
      expected: 'Prévu',
      months: {
        'September': 'Septembre',
        'June': 'Juin'
      }
    }
  }

  // Reverse to show newest first
  const education = [...data.education].reverse()

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{content[language].title}</h2>
        </div>
        <div className="education-timeline">
          {education.map((edu, index) => {
            // Show year ranges
            const startYear = edu.startDate.split(' ')[1];
            const endYear = edu.completionDate.split(' ')[1];
            const isCurrentEdu = index === 0;
            
            const dateText = isCurrentEdu 
              ? `${startYear} - ${content[language].now} (${content[language].expected} ${endYear})`
              : `${startYear} - ${endYear}`;
            
            // ENSAM link
            const institutionLink = edu.institution === 'ENSAM' ? 'https://ensam.um5.ac.ma/' : null;
            
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
                    <p className="edu-field">{language === 'fr' && edu.field_fr ? edu.field_fr : edu.field}</p>
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
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
