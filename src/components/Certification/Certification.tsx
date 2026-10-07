import { useEffect, useRef } from 'react';
import './Certification.css';

export default function Certification() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.cert__animate').forEach((el, i) => {
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
    <section id="certification" className="certification section" ref={sectionRef} aria-label="Certification">
      <div className="container">
        <p className="section-label cert__animate">Credentials</p>
        <h2 className="section-title cert__animate">Certification</h2>
        <div className="divider cert__animate" />

        <div className="cert__grid">
          <article className="cert__card cert__animate" aria-label="AWS Certified Cloud Practitioner certification">
            {/* AWS Logo area */}
            <div className="cert__logo-wrap" aria-hidden="true">
              <div className="cert__logo">
                <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="28" aria-hidden="true">
                  <text x="0" y="24" fontFamily="var(--font-sans)" fontWeight="700" fontSize="24" fill="#FF9900">aws</text>
                </svg>
              </div>
            </div>

            <div className="cert__info">
              <div>
                <h3 className="cert__name">AWS Certified Cloud Practitioner</h3>
                <p className="cert__code">CLF-C02</p>
              </div>

              <div className="cert__details">
                <div className="cert__detail">
                  <span className="cert__detail-label">Issued by</span>
                  <span className="cert__detail-value">Amazon Web Services</span>
                </div>
                <div className="cert__detail">
                  <span className="cert__detail-label">Date</span>
                  <span className="cert__detail-value">June 2026</span>
                </div>
              </div>

              <p className="cert__note">
                Credly badge link will be added once the credential URL is available.
              </p>
            </div>

            <div className="cert__badge-area" aria-hidden="true">
              <div className="cert__badge-icon">
                <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="64">
                  <polygon points="30,4 56,18 56,52 30,66 4,52 4,18" fill="rgba(255,153,0,0.08)" stroke="rgba(255,153,0,0.3)" strokeWidth="1.5"/>
                  <polygon points="30,14 46,23 46,47 30,56 14,47 14,23" fill="rgba(255,153,0,0.1)" stroke="rgba(255,153,0,0.5)" strokeWidth="1"/>
                  <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="700" fill="#FF9900" fontFamily="var(--font-sans)">CLF</text>
                </svg>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
