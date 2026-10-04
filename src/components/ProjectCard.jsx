import { useState } from "react";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="project-card reveal">
      <div className="project-visual-wrap">
        <ProjectVisual
          src={project.screenshot}
          alt={project.screenshotLabel}
          project={project}
        />
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span>{project.index}</span>
          <span>{project.category}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="tags" aria-label="Technologies">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <button
          type="button"
          className="text-link"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Réduire l’étude de cas ↑" : "Voir l’étude de cas →"}
        </button>

        {open ? (
          <div className="case-study">
            <div>
              <span>Contexte</span>
              <p>{project.context}</p>
            </div>
            <div>
              <span>Problème</span>
              <p>{project.problem}</p>
            </div>
            <div>
              <span>Ma contribution</span>
              <p>{project.role}</p>
            </div>
            <div>
              <span>Solution</span>
              <p>{project.solution}</p>
            </div>
            <div>
              <span>Résultat</span>
              <p>{project.result}</p>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
