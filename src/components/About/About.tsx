import { useEffect, useRef } from 'react';
import './About.css';

const interests = [
  'Cloud Computing',
  'AWS',
  'Backend Development',
  'IoT',
  'Python',
  'Data Structures & Algorithms',
  'Database Systems',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.about__animate').forEach((el, i) => {
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
    <section id="about" className="about section" ref={sectionRef} aria-label="About me">
      <div className="container">
        <p className="section-label about__animate">About</p>
        <h2 className="section-title about__animate">About Me</h2>
        <div className="divider about__animate" />

        <div className="about__grid">
          <div className="about__text">
            <p className="about__para about__animate">
              I'm a Computer Science student specializing in Cloud Computing at KL University,
              Vaddeswaram. I enjoy working close to the full stack — from connecting IoT sensors
              to AWS IoT Core, to building REST APIs with Spring Boot, and putting React
              interfaces on top.
            </p>
            <p className="about__para about__animate">
              My hands-on work includes designing cloud architectures, writing Python edge
              gateways for real-time sensor telemetry, securing device communication with
              TLS/mTLS and X.509 certificates, and managing relational data with PostgreSQL.
            </p>
            <p className="about__para about__animate">
              Outside of projects, I regularly practice Data Structures and Algorithms
              and am always looking for new problems to solve and new technologies to learn.
            </p>

            <div className="about__info-grid about__animate">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Wanaparthy, Telangana, India</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">University</span>
                <span className="about__info-value">KL University</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Degree</span>
                <span className="about__info-value">B.Tech CSE – Cloud Computing</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">CGPA</span>
                <span className="about__info-value about__info-highlight">9.4 / 10.0</span>
              </div>
            </div>
          </div>

          <div className="about__interests">
            <h3 className="about__interests-title about__animate">Current Interests</h3>
            <ul className="about__interests-list" aria-label="Technical interests">
              {interests.map((item) => (
                <li key={item} className="about__interest-tag about__animate">
                  <span className="about__interest-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
