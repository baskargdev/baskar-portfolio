import aboutPhoto from '../assets/About-section.png'
import { languages } from '../data/education.js'
import Education from './Education.jsx'
import '../styles/about.css'

export default function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="about">
        <figure className="afig">
          <img src={aboutPhoto} alt="Portrait of Baskar G" loading="lazy" />
        </figure>
        <div className="abt">
          <div>
            <p>
              I'm a Computer Science and Engineering graduate (2026) who builds full stack web apps with JavaScript,
              React, Node.js and Express, plus Java and Spring Boot. I design RESTful APIs, add authentication, and work
              with both SQL and MongoDB databases.
            </p>
            <p>
              I like building scalable, secure and user-friendly software, and I've shipped end-to-end projects on my
              own and through two internships.
            </p>
            <div className="lang">
              {languages.map((language) => (
                <span className="chip" key={language}>
                  {language}
                </span>
              ))}
            </div>
          </div>
          <Education />
        </div>
      </div>
    </section>
  )
}
