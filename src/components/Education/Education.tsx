import { useEffect, useRef } from 'react';
import './Education.css';

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.edu__animate').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
              el.classList.add('fade-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education section" ref={sectionRef} aria-label="Education">
      <div className="container">
        <p className="section-label edu__animate">Background</p>
        <h2 className="section-title edu__animate">Education</h2>
        <div className="divider edu__animate" />

        <div className="edu__timeline">
          <div className="edu__timeline-line" aria-hidden="true" />

          <article className="edu__card edu__animate" aria-label="KL University education">
            <div className="edu__card-dot" aria-hidden="true" />

            <div className="edu__card-content">
              <div className="edu__card-header">
                <div>
                  <h3 className="edu__institution">KL University</h3>
                  <p className="edu__location">Vaddeswaram, Andhra Pradesh, India</p>
                </div>
                <div className="edu__cgpa-badge" aria-label="CGPA 9.4 out of 10">
                  <span className="edu__cgpa-value">9.4</span>
                  <span className="edu__cgpa-label">/ 10.0 CGPA</span>
                </div>
              </div>

              <div className="edu__card-body">
                <div className="edu__detail-row">
                  <span className="edu__detail-label">Degree</span>
                  <span className="edu__detail-value">
                    B.Tech in Computer Science and Engineering
                  </span>
                </div>
                <div className="edu__detail-row">
                  <span className="edu__detail-label">Specialization</span>
                  <span className="edu__detail-value edu__specialization">Cloud Computing</span>
                </div>
                <div className="edu__detail-row">
                  <span className="edu__detail-label">Duration</span>
                  <span className="edu__detail-value">2024 – 2028</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
