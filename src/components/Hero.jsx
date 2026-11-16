import { useState } from "react";
import heroPhoto from "../assets/Hero-section.png";
import "../styles/buttons.css";
import "../styles/hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const RESUME_FILE = "Baskar.G_Job_Resume.pdf";

export default function Hero() {
  const [status, setStatus] = useState("");

  const downloadResume = async () => {
    setStatus("");

    try {
      const response = await fetch(import.meta.env.BASE_URL + RESUME_FILE);
      if (!response.ok) throw new Error("Resume file not found");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = RESUME_FILE;
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStatus("Resume saved.");
    } catch {
      setStatus("Could not save the resume. Please try again.");
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-greeting">Hi, I'm 👋</span>

        <h1>BASKAR.G</h1>

        <h2 className="hero-role">Full Stack Developer</h2>

        <p>
          from Hosur, Tamil Nadu. I build responsive web applications, REST APIs
          and secure authentication systems using modern technologies.
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
          <a
            href="https://github.com/baskargdev"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/baskar-g-a070bb278/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <button onClick={downloadResume} className="btn btn-outline">
            <FiDownload size={20} />
            Download Resume
          </button>
        </div>

        <p className="hint" id="dlh" role="status">
          {status}
        </p>
      </div>

      <div className="photo">
        <img
          src={heroPhoto}
          alt="Baskar G standing by a planter in a blue shirt"
        />
      </div>
    </section>
  );
}
