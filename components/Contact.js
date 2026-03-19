'use client';
import { useState } from 'react';
import { meta } from '../lib/data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Mailto fallback — replace with your preferred form service
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${meta.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const socials = [
    { label: 'GitHub',   href: meta.github,   icon: '⌥' },
    { label: 'LinkedIn', href: meta.linkedin,  icon: '⊞' },
    { label: 'Email',    href: `mailto:${meta.email}`, icon: '◎' },
  ];

  const inputStyle = {
    width: '100%', background: 'var(--bg-3)',
    border: '1px solid var(--border)', borderRadius: 'var(--radius)',
    padding: '14px 18px', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '15px',
    outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">10 — Contact</p>
        <h2 className="section-title">Get in Touch</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px',
        }} className="contact-grid">

          {/* Left: intro + socials */}
          <div>
            <p style={{
              fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.8,
              marginBottom: '48px',
            }}>
              Whether you have an opportunity, a collaboration in mind, or just want to talk about cybersecurity, digital art, or good books — my inbox is open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '18px 24px', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)', background: 'var(--bg-3)',
                    transition: 'border-color var(--transition), transform var(--transition)',
                    color: 'var(--text)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)', color: 'var(--accent)',
                    fontSize: '18px', width: '24px', textAlign: 'center',
                  }}>{s.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px',
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: 'var(--text-muted)', marginBottom: '2px',
                    }}>{s.label}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text)' }}>
                      {s.href.replace('mailto:', '').replace('https://', '')}
                    </div>
                  </div>
                  <span style={{
                    marginLeft: 'auto', color: 'var(--text-faint)',
                    fontFamily: 'var(--font-mono)',
                  }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div style={{
                padding: '48px', textAlign: 'center',
                border: '1px solid var(--border-accent)', borderRadius: 'var(--radius)',
                background: 'var(--accent-dim)',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>✓</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                  color: 'var(--accent)', marginBottom: '12px',
                }}>Message sent!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                  Your email client should have opened. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { name: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
                  { name: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px',
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: 'var(--text-muted)', display: 'block', marginBottom: '8px',
                    }}>{field.label}</label>
                    <input
                      type={field.type} name={field.name} required
                      placeholder={field.placeholder}
                      value={form[field.name]} onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--text-muted)', display: 'block', marginBottom: '8px',
                  }}>Message</label>
                  <textarea
                    name="message" required rows={6}
                    placeholder="What's on your mind?"
                    value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" style={{
                  padding: '15px 32px', border: '1px solid var(--accent)',
                  background: 'transparent', color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  borderRadius: 'var(--radius)', cursor: 'pointer',
                  transition: 'background var(--transition), color var(--transition)',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#080c14'; }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: 'var(--max-w)', margin: '80px auto 0',
        paddingTop: '40px', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'var(--text-faint)', letterSpacing: '0.1em',
        }}>
          © {new Date().getFullYear()} Trixy. Built with Next.js.
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'var(--text-faint)', letterSpacing: '0.08em',
        }}>
          Cybersecurity & Digital Forensics · Temasek Polytechnic
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
