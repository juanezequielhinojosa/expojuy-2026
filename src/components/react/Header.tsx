// Encabezado interactivo (React): navegación, tema y redes
import { useEffect, useState } from 'react';
import { site } from '../../data/site';

const base = import.meta.env.BASE_URL;

interface Props {
  currentPath: string;
}

const headerSocials = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/expojuy',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/expojuy',
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: 'X (Twitter)',
    url: 'https://x.com/expojuy',
    icon: <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-7-8.6L19.5 4H18l-5 6.2L9 4H4z" />,
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@expojuy',
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    ),
  },
];

function SocialIcon({ label, url, icon }: { label: string; url: string; icon: React.ReactNode }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener" aria-label={label}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon}
        </svg>
      </a>
    </li>
  );
}

export default function Header({ currentPath }: Props) {
  const [navOpen, setNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#121214' : '#3B2A82');
  }, [isDark]);

  const closeNav = () => setNavOpen(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <a className="brand" href={base} aria-label="ExpoJuy 2026 — Inicio">
          <img
            className="brand-mark"
            src={base + 'logos/logo-expojuy.png'}
            alt=""
            width="37"
            height="52"
          />
          <span className="brand-text">
            <span className="brand-accent">E</span>xpo<span className="brand-accent">J</span>uy
          </span>
        </a>

        <div className="header-actions">
          <ul className="social-icons social-icons-header" aria-label="Redes sociales">
            {headerSocials.map((s) => (
              <SocialIcon key={s.label} label={s.label} url={s.url} icon={s.icon} />
            ))}
          </ul>

          <button
            className="theme-toggle"
            type="button"
            aria-label="Cambiar tema"
            aria-pressed={isDark ? 'true' : 'false'}
            onClick={() => setIsDark((v) => !v)}
          >
            <svg
              className="theme-ico theme-ico-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
            </svg>
            <svg
              className="theme-ico theme-ico-moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen ? 'true' : 'false'}
            aria-controls="primary-nav"
            aria-label={navOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="visually-hidden">Menú</span>
            <svg
              className="icon-bars"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
            <svg
              className="icon-close"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        <nav
          className={'primary-nav' + (navOpen ? ' open' : '')}
          id="primary-nav"
          aria-label="Principal"
        >
          <ul className="nav-list">
            {site.navigation.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== '/' &&
                  currentPath.replace(/\/$/, '').startsWith(item.href.replace(/\/$/, '')));
              return (
                <li key={item.href}>
                  <a
                    className={isActive ? 'nav-link active' : 'nav-link'}
                    href={item.href}
                    onClick={closeNav}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="nav-cta-mobile">
              <a className="nav-cta" href={base + 'contacto/'} onClick={closeNav}>
                Comprar entradas
              </a>
            </li>
          </ul>

          <div className="nav-footer">
            <span className="nav-footer-label">Seguinos</span>
            <ul className="social-icons" aria-label="Redes sociales">
              {headerSocials.map((s) => (
                <SocialIcon key={s.label} label={s.label} url={s.url} icon={s.icon} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}