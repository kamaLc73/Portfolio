import '../styles/Footer.css'

function Footer({ language }) {
  const currentYear = new Date().getFullYear()

  const content = {
    en: {
      copyright: `© ${currentYear} Kamal Dehbi.`,
      madeWith: 'Made with ❤️ and Ctrl+C, Ctrl+V.'
    },
    fr: {
      copyright: `© ${currentYear} Kamal Dehbi.`,
      madeWith: 'Fait avec ❤️ et Ctrl+C, Ctrl+V.'
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
