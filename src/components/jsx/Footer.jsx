import '../styles/Footer.css'

function Footer({ language }) {
  const currentYear = new Date().getFullYear()

  const content = {
    en: {
      copyright: `© ${currentYear} All rights reserved.`
    },
    fr: {
      copyright: `© ${currentYear} Tous droits réservés.`
    }
  }

  const data = content[language]

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{data.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
