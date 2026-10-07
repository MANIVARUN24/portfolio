import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certification', href: '#certification' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          aria-label="Natukula Manivarun – go to top"
        >
          <span className="navbar__logo-name">Manivarun</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${activeSection === link.href.slice(1) ? ' navbar__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume button */}
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__resume btn-primary"
          aria-label="Download Resume PDF"
        >
          Resume
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__mobile-link${activeSection === link.href.slice(1) ? ' navbar__mobile-link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-resume btn-primary"
            tabIndex={menuOpen ? 0 : -1}
            aria-label="Download Resume PDF"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
