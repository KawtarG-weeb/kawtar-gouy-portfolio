import { useState } from "react";

export default function ProjectVisual({ src, alt, project }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className="project-placeholder"
        role="img"
        aria-label={`${alt} — à ajouter`}
      >
        <div className="placeholder-browser">
          <div className="browser-bar">
            <span />
            <span />
            <span />
          </div>

          <div className="browser-content">
            <span className="placeholder-index">
              {project.index}
            </span>

            <strong>{project.title}</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      className="project-image"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}