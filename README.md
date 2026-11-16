# Baskar G – Developer Portfolio

A modern, responsive developer portfolio built with **React.js and Vite**, featuring a dark cinematic design, animated particle background, cursor glow effects, and interactive sections.

The portfolio showcases my technical skills, education, experience, projects, and contact information.

## ✨ Features

- Responsive portfolio design for desktop and mobile
- Animated particle background
- Interactive cursor glow effect
- Desktop navigation and mobile slide-in menu
- Personal introduction and About section
- Education and internship experience
- Project showcase with technology tags and project status
- Technical skills and services sections
- Resume download
- Contact form
- GitHub and LinkedIn links

## 🛠️ Tech Stack

**Frontend**
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

**Development Tools**
- Vite
- npm
- Git
- GitHub
- VS Code

**Email Integration**
- EmailJS (if enabled in the current contact-form implementation)

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- VS Code or another code editor

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project folder:

```bash
cd baskar-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production-ready files will be generated inside the `dist/` directory.

## 📁 Project Structure

```text
baskar-portfolio/
├── public/
│   └── Baskar_G_Resume.pdf
│
├── src/
│   ├── assets/
│   │   ├── About-section.png
│   │   └── Hero-section.png
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CursorGlow.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   │
│   ├── data/
│   │   ├── contact.js
│   │   ├── education.js
│   │   ├── navLinks.js
│   │   ├── projects.js
│   │   ├── services.js
│   │   └── skills.js
│   │
│   ├── styles/
│   │   ├── about.css
│   │   ├── background.css
│   │   ├── buttons.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── hero.css
│   │   ├── navbar.css
│   │   ├── projects.css
│   │   ├── services.css
│   │   └── skills.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🔧 Customization

You can personalize the portfolio by updating:

- **Personal information:** `src/data/`
- **Project details:** `src/data/projects.js`
- **Technical skills:** `src/data/skills.js`
- **Services:** `src/data/services.js`
- **Contact information:** `src/data/contact.js`
- **Images:** `src/assets/`
- **Resume:** `public/Baskar_G_Resume.pdf`
- **Design and layout:** `src/styles/` and `src/components/`

## 🔐 Environment Variables

If the contact form uses EmailJS, configure its required credentials using environment variables in a local `.env` file.

**Important:** Never commit your `.env` file or private credentials to GitHub.

## 📬 Contact

**Baskar G.**  
Full Stack Developer

- Email: baskarg.developer@gmail.com
- GitHub: https://github.com/baskargdev
- LinkedIn: https://www.linkedin.com/in/baskar-g-a070bb278/

---

⭐ If you find this project interesting, feel free to explore the repository.