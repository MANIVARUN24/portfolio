import { useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import './Projects.css';

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.projects__animate').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.12}s`;
              el.classList.add('fade-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section" ref={sectionRef} aria-label="Projects">
      <div className="container">
        <p className="section-label projects__animate">Work</p>
        <h2 className="section-title projects__animate">Projects</h2>
        <p className="section-desc projects__animate">
          A selection of projects I've built while learning and applying cloud, backend, IoT, and full-stack technologies.
        </p>
        <div className="divider projects__animate" />

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`projects__card projects__animate${project.highlighted ? ' projects__card--featured' : ''}`}
              aria-label={project.title}
            >
              {project.highlighted && (
                <div className="projects__badge" aria-label="Featured project">Featured</div>
              )}

              <div className="projects__card-header">
                <div>
                  <h3 className="projects__card-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="projects__card-subtitle">{project.subtitle}</p>
                  )}
                </div>
              </div>

              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__features">
                {project.features.map((f) => (
                  <div key={f} className="projects__feature">
                    <span className="projects__feature-dot" aria-hidden="true" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="projects__card-footer">
                <div className="projects__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="projects__tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="projects__card-actions">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__action-btn projects__action-btn--outline"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  ) : (
                    <span className="projects__repo-soon">
                      Repository link coming soon
                    </span>
                  )}
                  <span className="projects__action-btn projects__action-btn--primary">
                    <ExternalLinkIcon />
                    View Project
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
