import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  skills
} from "./data/portfolio";

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>

      <Navbar />

      <main id="main">
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="availability">
                <span className="availability-dot" />
                {profile.availability}
              </div>

              <p className="hero-kicker">Bonjour, je suis</p>
              <h1>
                Kawtar <span>Gouy.</span>
              </h1>

              <p className="hero-role">
                Software Engineering Student
                <br />
                <strong>Web, Mobile & ERP Development</strong>
              </p>

              <p className="hero-description">
                Je conçois et développe des expériences numériques utiles,
                depuis les interfaces web jusqu’aux solutions ERP et mobiles.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Voir mes projets
                </a>
                <a
                  className="button button-secondary"
                  href="/Kawtar_Gouy_CV.pdf"
                  download
                >
                  Télécharger le CV
                </a>
              </div>

              <div className="hero-socials" aria-label="Liens professionnels">
                <a href={`mailto:${profile.email}`}>Email</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="portrait-shell">
                <div className="portrait-accent" />
                <img
                  src="/images/kawtar-gouy-profile.png"
                  alt="Portrait professionnel de Kawtar Gouy"
                  onError={(event) => {
                    event.currentTarget.src = "/images/kawtar-gouy-profile.svg";
                  }}
                />
                <div className="portrait-card">
                  <span>Basée à</span>
                  <strong>{profile.location}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="about">
          <div className="container about-grid">
            <SectionHeading
              eyebrow="À propos"
              title="Un profil technique orienté projets concrets."
            />
            <div className="about-copy reveal">
              <p>{profile.about}</p>
              <p>{profile.about2}</p>

              <div className="about-facts">
                <div>
                  <strong>02</strong>
                  <span>expériences professionnelles</span>
                </div>
                <div>
                  <strong>04</strong>
                  <span>projets mis en avant</span>
                </div>
                <div>
                  <strong>2027</strong>
                  <span>objectif PFE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="Expérience"
              title="Des expériences en entreprise qui structurent mon parcours."
              text="Chaque expérience est présentée par ce que j’ai réellement réalisé, sans surévaluer mon rôle."
            />

            <div className="experience-list">
              {experiences.map((item) => (
                <article className="experience-item reveal" key={item.company}>
                  <div className="experience-period">{item.period}</div>
                  <div>
                    <p className="experience-company">{item.company}</p>
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                    <div className="tags">
                      {item.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="Projets sélectionnés"
              title="Le travail avant la liste de technologies."
              text="Contexte, problème, contribution, solution et résultat : chaque projet est présenté comme une mini étude de cas."
            />

            <div className="projects-list">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <p className="evidence-note reveal">
              Les emplacements visuels sont volontairement laissés neutres tant
              que les captures réelles ne sont pas fournies. Aucun faux écran
              n’est présenté comme une réalisation.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="Compétences"
              title="Des technologies regroupées par usage, sans jauges artificielles."
              text="Les projets ci-dessus restent la preuve principale de mes compétences."
            />

            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-card reveal" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container education-grid">
            <div>
              <SectionHeading
                eyebrow="Formation"
                title="Un parcours en systèmes d’information et ingénierie informatique."
              />

              <div className="timeline">
                {education.map((item) => (
                  <article className="timeline-item reveal" key={item.period}>
                    <span>{item.period}</span>
                    <h3>{item.school}</h3>
                    <p>{item.title}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="certifications reveal">
              <p className="eyebrow">Certifications</p>
              <h3>Formation complémentaire</h3>
              <ul>
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="reveal">
              <p className="eyebrow">Contact</p>
              <h2>
                À la recherche d’un
                <br />
                <span>stage PFE 2027.</span>
              </h2>
            </div>

            <div className="contact-copy reveal">
              <p>
                Je souhaite rejoindre une équipe où je pourrai contribuer à des
                projets concrets en développement logiciel, web, mobile ou ERP.
              </p>

              <a className="button button-light" href={`mailto:${profile.email}`}>
                Me contacter par email
              </a>

              <div className="contact-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href="/Kawtar_Gouy_CV.pdf" download>
                  Télécharger le CV ↓
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Kawtar Gouy</span>
          <span>Portfolio — Web, Mobile & ERP Development</span>
        </div>
      </footer>
    </>
  );
}
