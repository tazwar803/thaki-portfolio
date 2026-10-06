import { useState } from "react";

const skills = ["C", "C++", "Java", "Python", "CSS", "SQL"];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow-icon arrow-icon--diagonal" : "arrow-icon"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner page-wrap">
          <a className="brand" href="#home" aria-label="Thaki, home" onClick={closeMenu}>
            <span className="brand-mark">T</span>
            <span className="brand-name">THAKI<span>.</span></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? "main-nav main-nav--open" : "main-nav"} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#work" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Contact <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero page-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> COMPUTER SCIENCE STUDENT · SYLHET, BANGLADESH</p>
            <h1>Curious mind.<br />Building <span>what&apos;s next.</span></h1>
            <p className="hero-description">
              I&apos;m MD Thaki Tazwar Al Rahman, a student and aspiring developer
              exploring programming and the web—one thoughtful project at a time.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>Currently learning, building &amp; growing</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                className="portrait"
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Portrait of MD Thaki Tazwar Al Rahman"
              />
            </div>
            <div className="portrait-caption">
              <span className="caption-dot" />
              <span>Nice to meet you</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="intro-band" id="about">
          <div className="page-wrap intro-grid">
            <p className="section-kicker">01 / ABOUT</p>
            <div className="intro-content">
              <h2>Learning the craft.<br /><span>Creating with purpose.</span></h2>
              <p>
                I study at Metropolitan University in Sylhet, Bangladesh. I enjoy
                learning how software works—from programming fundamentals to
                building for the web. I&apos;m developing my skills through
                coursework, independent practice, and projects like my Coin Toss game.
              </p>
              <div className="intro-facts">
                <div>
                  <span className="fact-label">Based in</span>
                  <span className="fact-value">Sylhet, Bangladesh</span>
                </div>
                <div>
                  <span className="fact-label">Studying at</span>
                  <span className="fact-value">Metropolitan University</span>
                </div>
                <div>
                  <span className="fact-label">Focus</span>
                  <span className="fact-value">Programming &amp; web development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section page-wrap" id="skills">
          <div className="section-heading">
            <p className="section-kicker">02 / TOOLKIT</p>
            <div>
              <h2>Skills I&apos;m growing</h2>
              <p className="section-subtitle">A foundation in programming, databases, and the web.</p>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill}>
                <span className="skill-index">0{index + 1}</span>
                <span className="skill-name">{skill}</span>
                <span className="skill-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <p className="skills-footnote"><span /> Always learning something new</p>
        </section>

        <section className="work-section" id="work">
          <div className="page-wrap">
            <div className="section-heading section-heading--work">
              <p className="section-kicker">03 / SELECTED WORK</p>
              <div>
                <h2>A small project, a big first step.</h2>
                <p className="section-subtitle">Every project is a chance to learn by doing.</p>
              </div>
            </div>
            <article className="project-card">
              <div className="project-image-wrap">
                <img
                  className="project-image"
                  src={`${import.meta.env.BASE_URL}images/coin-toss-game.jpg`}
                  alt="Screenshot of the Coin Toss Game with Heads and Tails choices"
                />
                <span className="project-image-label">PROJECT 001</span>
              </div>
              <div className="project-details">
                <div className="project-meta"><span>PERSONAL PROJECT</span><span>01 / 01</span></div>
                <h3>Coin Toss Game</h3>
                <p>
                  A small interactive game that lets you choose heads or tails
                  and toss a coin to see the result. Building it was a great way
                  to practise programming logic and create a simple, enjoyable
                  user experience.
                </p>
                <span className="project-accent-line" aria-hidden="true" />
              </div>
            </article>
          </div>
        </section>

        <section className="education-section page-wrap" id="education">
          <div className="section-heading">
            <p className="section-kicker">04 / LEARNING</p>
            <div>
              <h2>Learning beyond the classroom</h2>
              <p className="section-subtitle">Building a strong foundation through study and practice.</p>
            </div>
          </div>
          <div className="education-grid">
            <article className="education-card">
              <span className="education-icon" aria-hidden="true">↗</span>
              <p className="education-type">UNIVERSITY</p>
              <h3>Metropolitan University</h3>
              <p className="education-description">Studying in Sylhet, Bangladesh.</p>
              <span className="education-status"><span /> Ongoing studies</span>
            </article>
            <article className="education-card education-card--certificate">
              <span className="education-icon" aria-hidden="true">✳</span>
              <p className="education-type">CERTIFICATE · 2022</p>
              <h3>Web Development</h3>
              <p className="education-description">The Aid · Completed with Grade A+.</p>
              <a
                className="certificate-link"
                href={`${import.meta.env.BASE_URL}images/web-development-certificate.jpeg`}
                target="_blank"
                rel="noreferrer"
              >
                View certificate <ArrowIcon diagonal />
              </a>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-wrap contact-grid">
            <div className="contact-copy">
              <p className="section-kicker">05 / SAY HELLO</p>
              <h2>Let&apos;s make<br /><span>something meaningful.</span></h2>
              <p>
                Have a question, an idea, or just want to say hello? I&apos;d be
                happy to hear from you.
              </p>
            </div>
            <div className="contact-card">
              <span className="contact-card-label">EMAIL ME DIRECTLY</span>
              <a className="contact-email" href="mailto:thakirahman803@gmail.com">
                thakirahman803@gmail.com <ArrowIcon diagonal />
              </a>
              <span className="contact-card-rule" />
              <span className="contact-note"><span /> Open to learning and collaboration</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <a className="brand brand--footer" href="#home">
            <span className="brand-mark">T</span>
            <span className="brand-name">THAKI<span>.</span></span>
          </a>
          <p>Designed &amp; built with curiosity by Thaki.</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
