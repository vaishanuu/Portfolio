import { useState } from 'react'
import './App.css'
import portrait from './assets/vaishnavi-editorial.jpg'

const linkedin = 'https://www.linkedin.com/in/sri-vaishnavi-chikkala-3777b1219/'
const github = 'https://github.com/vaishanuu'

const skills = [
  ['Data Analysis', ['SQL', 'Python', 'Excel', 'Power BI', 'Data Visualization']],
  ['GenAI & Backend', ['FastAPI', 'LangChain', 'RAG Architecture', 'REST APIs', 'ChromaDB', 'PostgreSQL / pgvector']],
  ['Reporting & Business', ['Dashboarding', 'Reporting Automation', 'Data Validation', 'KPI Tracking', 'Business Insights']],
]

const projects = [
  {
    type: 'RAG Architecture',
    name: 'RAG-chatbot',
    description: 'A lightweight RAG chatbot built with FastAPI, LangChain, OpenAI, Chroma, and Docker.',
    tags: ['Python', 'LangChain', 'Chroma', 'Docker'],
  },
  {
    type: 'Agentic AI',
    name: 'Agentic-RAG',
    description: 'A modular Agentic RAG system with LangGraph, conversation memory, query clarification, multi-agent retrieval, and evaluation.',
    tags: ['LangGraph', 'Langfuse', 'RAGAS'],
  },
  {
    type: 'Backend API',
    name: 'Rag_api',
    description: 'An asynchronous, ID-based RAG API using LangChain, FastAPI, and PostgreSQL with pgvector.',
    tags: ['FastAPI', 'PostgreSQL', 'pgvector'],
  },
  {
    type: 'Machine Learning',
    name: 'public_ml_web_app',
    description: 'A public Python project exploring a machine-learning web application.',
    tags: ['Python'],
  },
  {
    type: 'Portfolio',
    name: 'Portfolio',
    description: 'A responsive editorial portfolio built with React and Vite.',
    tags: ['React', 'Vite'],
  },
]

const capabilityTicker = ['Data Analysis', 'GenAI & Backend', 'RAG Architecture', 'Reporting Automation', 'Python & SQL', 'FastAPI', 'Business Insights']

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /></svg>
)

const trackPointer = (event) => {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width
  const y = (event.clientY - bounds.top) / bounds.height
  event.currentTarget.style.setProperty('--mouse-x', `${x * 100}%`)
  event.currentTarget.style.setProperty('--mouse-y', `${y * 100}%`)
  event.currentTarget.style.setProperty('--rotate-x', `${(0.5 - y) * 5}deg`)
  event.currentTarget.style.setProperty('--rotate-y', `${(x - 0.5) * 5}deg`)
}

const resetPointer = (event) => {
  event.currentTarget.style.setProperty('--rotate-x', '0deg')
  event.currentTarget.style.setProperty('--rotate-y', '0deg')
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sri Vaishnavi Chikkala, home">SVC</a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span>
          <span /><span /><span />
        </button>
        <nav id="site-nav" className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a href={`#${item.toLowerCase()}`} onClick={closeMenu} key={item}>{item}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="location"><span>Location</span> Hyderabad, India</p>
            <h1 id="hero-title">Sri Vaishnavi<br />Chikkala</h1>
            <p className="hero-intro">Data Analyst and backend engineer exploring <strong>Generative AI</strong>. Working with SQL, Python, dashboarding, and reporting automation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
              <a className="button button-secondary" href={github} target="_blank" rel="noreferrer">GitHub <GithubIcon /></a>
            </div>
          </div>
          <figure className="portrait-frame" onPointerMove={trackPointer} onPointerLeave={resetPointer}>
            <img src={portrait} alt="Sri Vaishnavi Chikkala in professional attire" />
            <figcaption><span>Data · Engineering · AI</span><span>Hyderabad, India</span></figcaption>
          </figure>
        </section>

        <div className="capability-rail" aria-label="Core capabilities">
          <div>
            {[...capabilityTicker, ...capabilityTicker].map((item, index) => <span key={`${item}-${index}`}>{item}<i aria-hidden="true">◆</i></span>)}
          </div>
        </div>

        <section id="about" className="content-section section-wrap split-section">
          <div><p className="eyebrow">About</p><h2>Data clarity meets backend thinking.</h2></div>
          <div className="body-copy">
            <p>I build dashboards, automate reporting workflows, validate data, and translate business questions into actionable insights. My work supports business reporting, KPI tracking, and stakeholder decisions.</p>
            <p>Based in Hyderabad, I am interested in Data Analyst and Generative AI opportunities where thoughtful analysis and reliable engineering work together.</p>
          </div>
        </section>

        <section id="skills" className="content-section section-wrap">
          <div className="section-heading"><div><p className="eyebrow">Capabilities</p><h2>Expertise</h2></div><span>03 skill groups</span></div>
          <div className="skills-grid">
            {skills.map(([title, items], index) => (
              <article className="skill-group" key={title}>
                <p className="item-index">Skill group 0{index + 1}</p>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section section-wrap">
          <div className="section-heading"><div><p className="eyebrow">Experience</p><h2>Professional path</h2></div></div>
          <div className="timeline">
            <article className="role"><time>Oct 2025 — Aug 2026</time><div><h3>Analyst</h3><p className="company">Virtusa</p><p>Supported business and operational reporting, KPI tracking, data validation, and analysis for stakeholder decisions.</p></div></article>
            <article className="role"><time>Mar 2024 — Feb 2025</time><div><h3>Junior Data Scientist</h3><p className="company">AiSPRY</p><p>Worked on dashboard development, bonus allocation analysis, copper price forecasting, and machine downtime optimization.</p></div></article>
          </div>
        </section>

        <section id="projects" className="content-section section-wrap">
          <div className="section-heading"><div><p className="eyebrow">GitHub</p><h2>Selected projects</h2></div><span>05 public repositories</span></div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name} onPointerMove={trackPointer} onPointerLeave={resetPointer}>
                <div className="project-top"><span className="project-type">{project.type}</span><span className="project-number">0{index + 1}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={`${github}/${project.name}`} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>View repository <ExternalIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap" onPointerMove={trackPointer}>
          <div className="contact-content">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s analyze<br />together.</h2>
            <p>Interested in Data Analyst and Generative AI opportunities.</p>
            <div className="contact-links">
              <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
              <a href={github} target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
              <a href="mailto:vaishnavisri334@gmail.com">Email <ExternalIcon /></a>
              <a href="tel:+919398661705">+91 93986 61705 <ExternalIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><span>© 2026 Sri Vaishnavi Chikkala</span><span>Hyderabad, India · IST</span></footer>
    </div>
  )
}

export default App
