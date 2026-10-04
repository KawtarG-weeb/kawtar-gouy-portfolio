import { useEffect, useState } from "react";

const links = [
  ["about", "À propos"],
  ["experience", "Expérience"],
  ["projects", "Projets"],
  ["skills", "Compétences"],
  ["education", "Formation"],
  ["contact", "Contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav container" aria-label="Navigation principale">
        <a className="brand" href="#home" aria-label="Retour à l’accueil">
          KG<span>.</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <span />
          <span />
        </button>

        <div id="main-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button button-small button-outline"
            href="/Kawtar_Gouy_CV.pdf"
            download
          >
            Télécharger le CV
          </a>
        </div>
      </nav>
    </header>
  );
}
