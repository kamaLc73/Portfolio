import '../styles/Contact.css'
import { useState } from 'react'

function Contact({ language, data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const content = {
    en: {
      title: 'Contact',
      stayInTouch: 'Stay in touch',
      description: 'Don\'t hesitate to contact me to discuss projects, opportunities or simply exchange on emerging technologies in AI and Data Science.',
      formTitle: 'Send me a message',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      fullName: 'Full name',
      emailAddress: 'Email address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.'
    },
    fr: {
      title: 'Contacte',
      stayInTouch: 'Restons en contact',
      description: 'N\'hésitez pas à me contacter pour discuter de projets, d\'opportunités ou simplement échanger sur les technologies émergentes en IA et Data Science.',
      formTitle: 'M\'envoyer un message',
      phone: 'Téléphone',
      location: 'Localisation',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      fullName: 'Nom complet',
      emailAddress: 'Adresse email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès!',
      error: 'Échec de l\'envoi du message. Veuillez réessayer.'
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')

    try {
      // Use Formspree or another service to handle email submission
      const response = await fetch('https://formspree.io/f/xldadgng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setFormStatus(''), 3000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus(''), 3000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 3000)
    }
  }

  const txt = content[language]
  const links = data.links

  const getLink = (network) => links.find(l => l.network === network)?.url || '#'

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{txt.title}</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="contact-subtitle">{txt.stayInTouch}</h3>
            <p className="contact-description">{txt.description}</p>
            
            <div className="contact-info-items">
              <a 
                href={`https://wa.me/${data.userPhoneNumber.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="info-item"
              >
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <p>{data.userPhoneNumber}</p>
                </div>
              </a>

              <a 
                href={getLink('Linkedin')}
                target="_blank"
                rel="noopener noreferrer"
                className="info-item"
              >
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <p>kamal-dehbi</p>
                </div>
              </a>

              <a 
                href="https://github.com/kamaLc73"
                target="_blank"
                rel="noopener noreferrer"
                className="info-item"
              >
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <p>kamaLc73</p>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <p>{language === 'en' ? 'Rabat, Morocco' : 'Rabat, Maroc'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h3 className="form-title">{txt.formTitle}</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{txt.fullName}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{txt.emailAddress}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{txt.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{txt.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? txt.sending : txt.send}
              </button>

              {formStatus === 'success' && (
                <p className="form-message success">{txt.success}</p>
              )}
              {formStatus === 'error' && (
                <p className="form-message error">{txt.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
