import { useEffect, useState } from 'react';
import './index.css';

// ─── Icons ───────────────────────────────────────────
function IconGitHub({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconLinkedIn({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 9c-.88.48-1.29 1.54-.93 2.47a16 16 0 0 0 2.72 4.29 16 16 0 0 0 4.29 2.72c.93.36 1.99-.05 2.47-.93l.75-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconPin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconArrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function IconSun({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function IconMoon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

// ─── Reveal hook ─────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animationDelay =
              (e.target as HTMLElement).dataset.delay ?? '0s';
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Header ──────────────────────────────────────────
function Header({
  theme,
  onToggleTheme,
}: {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="wrap">
        <a href="#intro" className="h-logo" aria-label="Go to top">
          Manivarun<span>.</span>
        </a>
        <div className="h-right">
          <button
            onClick={onToggleTheme}
            className="h-theme-btn"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
            aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
          >
            {theme === 'light' ? <IconMoon size={16} /> : <IconSun size={16} />}
          </button>
          <a
            href="https://github.com/MANIVARUN24"
            target="_blank"
            rel="noopener noreferrer"
            className="h-icon-btn"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <IconGitHub size={17} />
          </a>
          <a
            href="https://linkedin.com/in/mani-varun"
            target="_blank"
            rel="noopener noreferrer"
            className="h-icon-btn"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <IconLinkedIn size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}

function IconExternal({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ─── GitHub link with tooltip ─────────────────────────
function GhLink({ href, label }: { href: string; label: string }) {
  const domain = href.replace('https://', '');
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="gh-link"
      aria-label={`View ${label} on GitHub`}
    >
      <span className="tooltip">{domain}</span>
      <IconGitHub size={15} />
      View on GitHub
      <IconArrow size={13} />
    </a>
  );
}

// ─── Live link with tooltip ───────────────────────────
function LiveLink({ href, label }: { href: string; label: string }) {
  const domain = href.replace('https://', '').replace(/\/$/, '');
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="live-link"
      aria-label={`Visit live website for ${label}`}
    >
      <span className="tooltip">{domain}</span>
      <IconExternal size={14} />
      Live Website
    </a>
  );
}

// ─── Projects data ────────────────────────────────────
const projects = [
  {
    num: '01',
    name: 'Manufacturing Plant Monitor',
    sub: 'AWS Direct Connect Design Study for a Manufacturing Plant',
    desc: 'An end-to-end IoT monitoring prototype connecting physical sensors to AWS IoT Core through a Python edge gateway. Built a Spring Boot backend with REST APIs and a React dashboard. This prototype serves as an implementation reference for a larger AWS Direct Connect production architecture study.',
    stack: ['AWS IoT Core', 'Python', 'Spring Boot', 'React', 'MQTT', 'PostgreSQL', 'Amazon EC2'],
    github: 'https://github.com/MANIVARUN24/cc-hackathon',
    githubLabel: 'cc-hackathon',
    arch: [
      { node: 'Physical Sensors (3 types)' },
      { arrow: true },
      { node: 'Python Edge Gateway' },
      { arrow: true },
      { node: 'AWS IoT Core  ·  X.509 Auth  ·  TLS/mTLS' },
      { arrow: true },
      { node: 'Spring Boot Backend  ·  6 REST APIs' },
      { arrow: true },
      { node: 'PostgreSQL  ·  Amazon EC2' },
      { arrow: true },
      { node: 'React Dashboard' },
    ],
  },
  {
    num: '02',
    name: 'Manora Café',
    sub: 'Café Management & Ordering System',
    desc: 'A web-based café management system for centralised order, user, and staff management. Implements role-based access control and SQL database workflows with an API integration layer.',
    stack: ['Python', 'Web Technologies', 'SQL', 'API Integration'],
    github: 'https://github.com/MANIVARUN24/manora-cafe',
    githubLabel: 'manora-cafe',
    liveUrl: 'https://manora-cafe-two.vercel.app/',
    arch: null,
  },
  {
    num: '03',
    name: 'Student Portfolio Management',
    sub: 'Web application for managing student portfolios',
    desc: 'A web application to manage and organise student portfolio data. Built to support structured student record management with a browser-based interface.',
    stack: ['Web Technologies', 'JavaScript'],
    github: 'https://github.com/MANIVARUN24/student-portfolio-management',
    githubLabel: 'student-portfolio-management',
    arch: null,
  },
];

// ─── Skills data ──────────────────────────────────────
const skillGroups = [
  { name: 'Programming', items: ['Python', 'C', 'C++'] },
  { name: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { name: 'Backend', items: ['Spring Boot', 'REST APIs', 'MQTT', 'API Integration'] },
  { name: 'Cloud & Infra', items: ['AWS', 'AWS IoT Core', 'Amazon EC2', 'VPC'] },
  { name: 'Data & Tools', items: ['PostgreSQL', 'SQL', 'Git', 'GitHub', 'Linux'] },
];

// ─── Main App ─────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useReveal();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        {/* ── INTRO ── */}
        <section id="intro" className="section intro" aria-label="Introduction">
          <div className="wrap">
            <div className="intro__layout">
              <div className="intro__text">
                <div className="intro__status-badge">
                  <span className="intro__status-dot" />
                  <span>B.Tech CSE (Cloud Computing) · KL University</span>
                </div>

                <h1 className="intro__name">
                  Natukula<br />Manivarun
                </h1>

                <p className="intro__role">
                  <strong>Computer Science Student & Developer</strong>
                  <br />
                  Cloud Computing · AWS · Python · Backend & IoT
                </p>

                <p className="intro__desc">
                  Building cloud, backend, IoT, and full-stack applications with strong
                  foundations in software engineering and system architecture.
                </p>

                <div className="intro__actions">
                  <button
                    className="btn-primary"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Jump to projects"
                  >
                    View Projects
                  </button>
                  <button
                    className="btn-ghost"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Jump to contact section"
                  >
                    Contact Me
                  </button>
                </div>

                <div className="intro__links">
                  <a
                    href="https://github.com/MANIVARUN24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="intro__link"
                    aria-label="GitHub"
                  >
                    <IconGitHub size={14} /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/mani-varun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="intro__link"
                    aria-label="LinkedIn"
                  >
                    <IconLinkedIn size={14} /> LinkedIn
                  </a>
                  <a
                    href="mailto:manivarun554@gmail.com"
                    className="intro__link"
                    aria-label="Email"
                  >
                    <IconMail size={14} /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="section about" aria-label="About">
          <div className="wrap">
            <p className="s-label reveal" data-delay="0s">About</p>
            <div className="about__body">
              <div className="about__text reveal" data-delay="0.05s">
                <p>
                  I'm a Computer Science student at KL University specialising in Cloud Computing.
                  I enjoy building practical systems that connect software, cloud infrastructure,
                  backend services, and real-world data.
                </p>
                <p>
                  My work covers IoT sensor integration with AWS IoT Core, securing device
                  communication using X.509 certificates and TLS/mTLS, building REST APIs with
                  Spring Boot, and persisting data in PostgreSQL. I also work with React for
                  frontend interfaces and Python for backend and edge computing tasks.
                </p>
                <p>
                  Outside of coursework and projects, I regularly practise Data Structures and
                  Algorithms on CodeChef.
                </p>

                <div className="about__meta">
                  <div className="about__meta-row">
                    <span className="about__meta-key">Location</span>
                    <span className="about__meta-val">Wanaparthy, Telangana, India</span>
                  </div>
                  <div className="about__meta-row">
                    <span className="about__meta-key">University</span>
                    <span className="about__meta-val">KL University, Vaddeswaram</span>
                  </div>
                  <div className="about__meta-row">
                    <span className="about__meta-key">Degree</span>
                    <span className="about__meta-val">B.Tech CSE – Cloud Computing</span>
                  </div>
                  <div className="about__meta-row">
                    <span className="about__meta-key">CGPA</span>
                    <span className="about__meta-val accent">9.4 / 10.0</span>
                  </div>
                </div>
              </div>

              <aside className="about__sidebar reveal" data-delay="0.1s" aria-label="Current focus areas">
                <p className="about__focus-title">Current Focus</p>
                <ul className="about__focus-list">
                  {[
                    'Cloud Computing',
                    'AWS',
                    'Backend Development',
                    'IoT & Edge Computing',
                    'Python',
                    'Data Structures & Algorithms',
                    'Database Systems',
                  ].map((item) => (
                    <li key={item} className="about__focus-item">{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="section skills" aria-label="Technical skills">
          <div className="wrap">
            <p className="s-label reveal" data-delay="0s">Technical Focus</p>
            <div className="skills__grid reveal" data-delay="0.05s" role="list">
              {skillGroups.map((group) => (
                <div key={group.name} className="skill-group" role="listitem" aria-label={group.name}>
                  <p className="skill-group-name">{group.name}</p>
                  <ul className="skill-items">
                    {group.items.map((item) => (
                      <li key={item} className="skill-item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="section projects" aria-label="Selected projects">
          <div className="wrap">
            <p className="s-label reveal" data-delay="0s">Selected Work</p>
            <div className="projects__list">
              {projects.map((p, idx) => (
                <article
                  key={p.num}
                  className="project-entry reveal"
                  data-delay={`${idx * 0.08}s`}
                  aria-label={p.name}
                >
                  <div className="project-num" aria-hidden="true">{p.num}</div>
                  <div className="project-body">
                    <div className="project-top">
                      <h2 className="project-name">{p.name}</h2>
                    </div>
                    <p className="project-sub">{p.sub}</p>
                    <p className="project-desc">{p.desc}</p>

                    {/* Architecture diagram – only for project 01 */}
                    {p.arch && (
                      <div className="arch-diagram" aria-label="System architecture">
                        {p.arch.map((step, i) =>
                          'arrow' in step ? (
                            <div key={i} className="arch-arrow">↓</div>
                          ) : (
                            <div key={i} className="arch-node">{step.node}</div>
                          )
                        )}
                      </div>
                    )}

                    <div className="project-stack" aria-label="Technologies used">
                      {p.stack.map((t) => (
                        <span key={t} className="stack-tag">{t}</span>
                      ))}
                    </div>

                    <div className="project-footer">
                      {p.liveUrl && <LiveLink href={p.liveUrl} label={p.name} />}
                      <GhLink href={p.github} label={p.githubLabel} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="section education" aria-label="Education">
          <div className="wrap">
            <p className="s-label reveal" data-delay="0s">Education</p>
            <div className="edu-card reveal" data-delay="0.05s">
              <div className="edu-left">
                <h2 className="edu-institution">KL University</h2>
                <p className="edu-degree">B.Tech in Computer Science and Engineering</p>
                <p className="edu-spec">Specialisation in Cloud Computing</p>
                <p className="edu-duration">2024 – 2028 · Vaddeswaram, Andhra Pradesh</p>
              </div>
              <div className="edu-right">
                <div className="edu-cgpa-num">9.4</div>
                <div className="edu-cgpa-label">CGPA / 10.0</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section id="achievements" className="section achievements" aria-label="Achievements">
          <div className="wrap">
            <p className="s-label reveal" data-delay="0s">Achievements</p>
            <div className="ach-grid reveal" data-delay="0.05s">
              <div className="ach-item">
                <p className="ach-platform">CodeChef</p>
                <h3 className="ach-title">DSA Practice</h3>
                <p className="ach-desc">
                  Regular practice in Data Structures and Algorithms through competitive
                  programming challenges.
                </p>
                <p className="ach-meta">
                  Username:{' '}
                  <a
                    href="https://www.codechef.com/users/klu2400032965"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CodeChef profile"
                  >
                    klu2400032965
                  </a>
                </p>
              </div>
              <div className="ach-item">
                <p className="ach-platform">Smart India Hackathon</p>
                <h3 className="ach-title">Face Recognition System</h3>
                <p className="ach-desc">
                  Contributed to a Smart Face Recognition System to support monitoring
                  of mid-day meal distribution in government schools. Selected for the internal hackathon round.
                </p>
                <p className="ach-meta">Selected for Internal Round · Built with React & JavaScript</p>
              </div>
              <div className="ach-item">
                <p className="ach-platform">Competition</p>
                <h3 className="ach-title">Geopolitics Quiz Runner-Up</h3>
                <p className="ach-desc">
                  Participated in a competitive quiz focusing on international affairs and geopolitics, securing runner-up position.
                </p>
                <p className="ach-meta">Award: Runner-Up</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATION ── */}
        <section id="certification" className="section certification" aria-label="Certification">
          <div className="wrap">
            <p className="s-label reveal" data-delay="0s">Certification</p>
            <div className="cert-card reveal" data-delay="0.05s">
              <div className="cert-entry">
                <div className="cert-badge" aria-hidden="true">
                  <svg width="34" height="22" viewBox="0 0 50 30" fill="none">
                    <text x="0" y="22" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" fill="currentColor">aws</text>
                  </svg>
                </div>
                <div className="cert-info">
                  <h2 className="cert-name">AWS Certified Cloud Practitioner</h2>
                  <p className="cert-code">CLF-C02</p>
                  <div className="cert-details">
                    <div className="cert-detail">
                      <span className="cert-detail-label">Issuer</span>
                      <span className="cert-detail-val">Amazon Web Services</span>
                    </div>
                    <div className="cert-detail">
                      <span className="cert-detail-label">Target / Expected</span>
                      <span className="cert-detail-val">June 2026</span>
                    </div>
                  </div>
                  <p className="cert-note">Credly badge link will be added once the credential URL is issued.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="section contact" aria-label="Contact">
          <div className="wrap">
            <p className="s-label reveal" data-delay="0s">Contact</p>
            <h2 className="contact__headline reveal" data-delay="0.04s">Let's connect & build.</h2>
            <p className="contact__sub reveal" data-delay="0.08s">
              Feel free to reach out for software projects, cloud collaborations, or tech discussions.
            </p>

            <div className="contact__list reveal" data-delay="0.12s">
              <a href="mailto:manivarun554@gmail.com" className="contact__item" aria-label="Send email">
                <div className="contact__item-icon"><IconMail size={20} /></div>
                <div className="contact__item-text">
                  <span className="contact__item-label">Email</span>
                  <span className="contact__item-val">manivarun554@gmail.com</span>
                </div>
              </a>

              <div className="contact__item" aria-label="Phone number">
                <div className="contact__item-icon"><IconPhone size={20} /></div>
                <div className="contact__item-text">
                  <span className="contact__item-label">Phone</span>
                  <span className="contact__item-val">+91 9392863445</span>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/mani-varun"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__item"
                aria-label="LinkedIn profile"
              >
                <div className="contact__item-icon"><IconLinkedIn size={20} /></div>
                <div className="contact__item-text">
                  <span className="contact__item-label">LinkedIn</span>
                  <span className="contact__item-val">linkedin.com/in/mani-varun</span>
                </div>
              </a>

              <a
                href="https://github.com/MANIVARUN24"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__item"
                aria-label="GitHub profile"
              >
                <div className="contact__item-icon"><IconGitHub size={20} /></div>
                <div className="contact__item-text">
                  <span className="contact__item-label">GitHub</span>
                  <span className="contact__item-val">github.com/MANIVARUN24</span>
                </div>
              </a>

              <div className="contact__item" aria-label="Location">
                <div className="contact__item-icon"><IconPin size={20} /></div>
                <div className="contact__item-text">
                  <span className="contact__item-label">Location</span>
                  <span className="contact__item-val">Wanaparthy, Telangana, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer" role="contentinfo">
        <div className="wrap">
          <div className="footer-inner">
            <div className="footer-brand">
              Manivarun<span>.</span>
              <br />
              <span style={{ fontWeight: 400, fontSize: '0.82rem', color: 'var(--text-3)' }}>
                Computer Science · Cloud Computing & Software Engineering
              </span>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Natukula Manivarun</p>
          </div>
        </div>
      </footer>
    </>
  );
}
