import ParticlesBackground from './components/ParticlesBackground.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <ParticlesBackground />
      <CursorGlow />
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
