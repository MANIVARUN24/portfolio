import { useEffect, useRef } from 'react';
import { skillCategories } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skills__animate').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.06}s`;
              el.classList.add('fade-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef} aria-label="Technical skills">
      <div className="container">
        <p className="section-label skills__animate">Skills</p>
        <h2 className="section-title skills__animate">Technical Skills</h2>
        <p className="section-desc skills__animate">
          Technologies and tools I work with, grouped by area.
        </p>
        <div className="divider skills__animate" />

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.label} className="skills__category skills__animate">
              <h3 className="skills__category-title">{category.label}</h3>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
