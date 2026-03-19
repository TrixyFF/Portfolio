'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Exp',       href: '#experience' }, // Added Experience link
  { label: 'Projects',  href: '#projects' },
  { label: 'Academics', href: '#academics' },
  { label: 'Awards',    href: '#awards' },
  { label: 'CTF',       href: '#ctf' },
  { label: 'More',      href: '#leadership' },
  { label: 'Contact',   href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', height: '60px',
        background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        {/* Logo */}
        <a href="#about" style={{
          fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.15em',
          color: 'var(--accent)', textTransform: 'uppercase',
        }}>
          Trixy<span style={{ color: 'var(--text-muted)' }}>_</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '32px' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{l.label}</a>
          ))}
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text)', padding: '8px', display: 'none',
        }} className="mobile-burger" aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open
              ? <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              : <>
                  <rect y="4" width="20" height="1.5" rx="1"/>
                  <rect y="9.25" width="20" height="1.5" rx="1"/>
                  <rect y="14.5" width="14" height="1.5" rx="1"/>
                </>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(8,12,20,0.98)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '36px',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '18px',
              letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)',
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}