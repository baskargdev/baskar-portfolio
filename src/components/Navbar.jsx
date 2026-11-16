import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks.js";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length) {
          setActiveSection(`#${visibleSections[0].id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    setOpen(false);
  };

  return (
    <nav id="nav" className={open ? "open" : undefined} aria-label="Sections">
      {/* Brand Name - Left Side */}
      <a href="#top" className="brand" onClick={() => handleNavClick("#top")}>
        BASKAR <span>G.</span>
      </a>

      {/* Mobile Menu Button */}
      <button
        className="mb"
        id="mb"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((o) => !o)}
      >
        <i></i>
        <i></i>
        <i></i>
      </button>

      {/* Mobile Overlay */}
      <div className="ov" id="ov" onClick={() => setOpen(false)}></div>

      {/* Navigation Links */}
      <div className="menu" id="menu">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href ? "active" : ""}
            aria-current={activeSection === link.href ? "location" : undefined}
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
