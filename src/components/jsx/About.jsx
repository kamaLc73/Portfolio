import '../styles/About.css'

function About({ language, data }) {
  const content = {
    en: {
      title: 'About Me',
      subtitle: 'Data Science & AI Student at ENSAM Rabat, Morocco',
      bio: `I hunt patterns in chaos and build tools that think. Data scientist by curiosity, full-stack developer by craft—I live at the crossroads of AI and user experience, turning complex problems into elegant solutions that actually feel good to use.`
    },
    fr: {
      title: 'À Propos',
      subtitle: 'Étudiant en Data Science & IA à ENSAM Rabat, Maroc',
      bio: `Je chasse les modèles dans le chaos et je construis des outils qui pensent. Data scientist par curiosité, développeur full-stack par métier—je vis au carrefour de l'IA et de l'expérience utilisateur, transformant les problèmes complexes en solutions élégantes qui sont vraiment agréables à utiliser.`
    }
  }

  const txt = content[language]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{txt.title}</h2>
        </div>
        <p className="about-subtitle">{txt.subtitle}</p>
        <div className="about-content">
          <p className="about-bio">{txt.bio}</p>
        </div>
      </div>
    </section>
  )
}

export default About
