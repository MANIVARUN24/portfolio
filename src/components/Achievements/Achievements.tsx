import { useEffect, useRef } from 'react';
import './Achievements.css';

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ach__animate').forEach((el, i) => {
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
    <section id="achievements" className="achievements section" ref={sectionRef} aria-label="Achievements">
      <div className="container">
        <p className="section-label ach__animate">Activities</p>
        <h2 className="section-title ach__animate">Achievements & Coding</h2>
        <div className="divider ach__animate" />

        <div className="ach__grid">
          {/* CodeChef */}
          <article className="ach__card ach__animate" aria-label="CodeChef profile">
            <div className="ach__icon ach__icon--codechef" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M11.257.004C5.142.285 0 5.585 0 12.001c0 6.626 5.373 12 12 12 6.626 0 12-5.374 12-12 0-6.291-4.845-11.45-11.006-11.969L12 .004h-.743zm.786 1.52c5.52.462 9.957 5.154 9.957 10.477 0 5.797-4.703 10.5-10.5 10.5-5.796 0-10.5-4.703-10.5-10.5 0-5.502 4.246-10.047 9.645-10.487l1.398.01zM12 4.5c-4.136 0-7.5 3.364-7.5 7.5 0 4.137 3.364 7.5 7.5 7.5 4.137 0 7.5-3.363 7.5-7.5 0-4.136-3.363-7.5-7.5-7.5zm0 1.5c3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6-3.307 0-6-2.693-6-6 0-3.308 2.693-6 6-6z"/>
              </svg>
            </div>
            <div className="ach__content">
              <h3 className="ach__title">CodeChef</h3>
              <p className="ach__desc">
                Solving programming problems on CodeChef and regularly practicing
                Data Structures and Algorithms.
              </p>
              <div className="ach__meta">
                <span className="ach__meta-label">Username</span>
                <a
                  href="https://www.codechef.com/users/klu2400032965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ach__meta-link"
                  aria-label="CodeChef profile for klu2400032965"
                >
                  klu2400032965
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
              <div className="ach__tags">
                <span className="ach__tag">Data Structures</span>
                <span className="ach__tag">Algorithms</span>
                <span className="ach__tag">Python</span>
              </div>
            </div>
          </article>

          {/* Smart India Hackathon */}
          <article className="ach__card ach__animate" aria-label="Smart India Hackathon participation">
            <div className="ach__icon ach__icon--sih" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="ach__content">
              <h3 className="ach__title">Smart India Hackathon</h3>
              <p className="ach__desc">
                Participated in Smart India Hackathon and contributed to a Smart Face
                Recognition System for monitoring mid-day meal distribution in
                government schools.
              </p>
              <div className="ach__tags">
                <span className="ach__tag">Hackathon</span>
                <span className="ach__tag">Face Recognition</span>
                <span className="ach__tag">React</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
