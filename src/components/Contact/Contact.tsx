import { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.contact__animate').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoUrl = `mailto:manivarun554@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact section" ref={sectionRef} aria-label="Contact">
      <div className="container">
        <p className="section-label contact__animate">Get In Touch</p>
        <h2 className="section-title contact__animate">Contact</h2>
        <p className="section-desc contact__animate">
          Feel free to reach out via email or through the form below.
        </p>
        <div className="divider contact__animate" />

        <div className="contact__grid">
          {/* Info column */}
          <div className="contact__info contact__animate">
            <a href="mailto:manivarun554@gmail.com" className="contact__item" aria-label="Email address">
              <div className="contact__item-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="contact__item-label">Email</p>
                <p className="contact__item-value">manivarun554@gmail.com</p>
              </div>
            </a>

            <div className="contact__item" aria-label="Phone number">
              <div className="contact__item-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 9c-.88.48-1.29 1.54-.93 2.47a16 16 0 0 0 2.72 4.29 16 16 0 0 0 4.29 2.72c.93.36 1.99-.05 2.47-.93l.75-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="contact__item-label">Phone</p>
                <p className="contact__item-value">+91 9392863445</p>
              </div>
            </div>

            <div className="contact__item" aria-label="Location">
              <div className="contact__item-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="contact__item-label">Location</p>
                <p className="contact__item-value">Wanaparthy, Telangana, India</p>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href="https://linkedin.com/in/mani-varun"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/MANIVARUN24"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            className="contact__form contact__animate"
            onSubmit={handleSubmit}
            aria-label="Contact form"
            noValidate
          >
            <p className="contact__form-note">
              This form uses <code>mailto:</code> and will open your email client.
            </p>

            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__label">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="contact__input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact__input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__textarea"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary contact__submit"
              id="contact-submit"
            >
              {submitted ? 'Opening email client…' : 'Send Message'}
              {!submitted && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
