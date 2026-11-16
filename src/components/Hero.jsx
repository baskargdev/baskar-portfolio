import { useState } from 'react'
import heroPhoto from '../assets/Hero-section.png'
import { contact } from '../data/contact.js'
import '../styles/buttons.css'
import '../styles/hero.css'

const RESUME_FILE = 'Baskar_G_Resume.pdf'

export default function Hero() {
  const [status, setStatus] = useState('')

  const downloadResume = async () => {
    setStatus('')
    try {
      const response = await fetch(import.meta.env.BASE_URL + RESUME_FILE)
      if (!response.ok) throw new Error('Resume file not found')
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = RESUME_FILE
      document.body.appendChild(link)
      link.click()
      link.remove()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
      setStatus('Resume saved.')
    } catch {
      setStatus('Could not save the resume. Please try again.')
    }
  }

  return (
    <section className="hero">
      <div>
        <h1>BASKAR G</h1>
        <p>
          Full Stack Developer (MERN Stack) from Hosur, Tamil Nadu. I build responsive web applications, REST APIs and
          secure authentication systems using modern technologies.
        </p>
        <div className="btns">
          <a className="btn p" href="#projects">
            View my projects
          </a>
          <a className="btn" href="#contact">
            Hire me
          </a>
        </div>
        <div className="btns soc">
          <a className="btn s" href={contact.github} target="_blank" rel="noopener">
            GitHub
          </a>
          <a className="btn s" href={contact.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <button className="btn s" id="dl" type="button" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
        <p className="hint" id="dlh" role="status">
          {status}
        </p>
      </div>
      <div className="photo">
        <img src={heroPhoto} alt="Baskar G standing by a planter in a blue shirt" />
      </div>
    </section>
  )
}
