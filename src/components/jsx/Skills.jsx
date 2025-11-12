import '../styles/Skills.css'

function Skills({ language, data }) {
  const content = {
    en: { title: 'Tech Stack' },
    fr: { title: 'Stack Technique' }
  }

  const skillCategories = data.skills

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

  // Map skill names to icon identifiers
  const getSkillIcon = (skillName) => {
    const iconMap = {
      // Programming Languages
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
      
      // ML & AI
      'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
      'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
      'XGBoost': '🚀',
      'Spacy': 'https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg',
      'LangChain': 'https://api.iconify.design/simple-icons:langchain.svg',
      'YOLO': '👁️',
      
      // Data Analysis
      'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
      'Seaborn': '📊',
      'Plotly': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg',
      'Power BI': '📈',
      'Google Looker Studio': '📉',
      
      // Big Data
      'Apache Kafka': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      'Hadoop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg',
      'Hive': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg',
      'Pig': '/icons/pig.png',
      'Sqoop': 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Apache_Sqoop_logo.svg',
      'Spark': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
      'HBase': '/icons/Apache_HBase-Logo.png',
      
      // Web Development
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
      
      // Tools
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'AWS Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      
      // Databases
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
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{content[language].title}</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {categoryIcons[category.skillType]}
                </div>
                <h3>{categoryLabels[category.skillType]}</h3>
              </div>
              <div className="skill-tags">
                {category.skillValues.map((skill, sidx) => {
                  const icon = getSkillIcon(skill)
                  const isUrl = typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('/'))
                  
                  return (
                    <span key={sidx} className="skill-tag">
                      {isUrl ? (
                        <img src={icon} alt={skill} className="skill-icon" />
                      ) : (
                        <span className="skill-emoji">{icon}</span>
                      )}
                      <span className="skill-name">{skill}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
