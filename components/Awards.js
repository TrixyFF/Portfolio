import { certifications, awards } from '../lib/data';

export default function Awards() {
  return (
    <section id="awards" style={{ padding: '100px 24px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">05 — Recognition</p>
        <h2 className="section-title">Certifications, Awards & Achievements</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px' }}
          className="awards-grid">

          {/* Certifications column */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '28px',
            }}>Certifications</h3>

            {certifications.map((cert, i) => (
              <div key={i} style={{
                padding: '28px', border: '1px solid var(--border-accent)',
                borderRadius: 'var(--radius)',
                background: 'linear-gradient(135deg, var(--accent-dim) 0%, transparent 100%)',
                display: 'flex', flexDirection: 'column', gap: '8px',
              }}>
                <span style={{ fontSize: '24px' }}>{cert.icon}</span>
                <h4 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.3rem',
                  color: 'var(--text)',
                }}>{cert.name}</h4>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--text-muted)', letterSpacing: '0.1em',
                  }}>{cert.issuer}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--accent)',
                  }}>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Awards column */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '28px',
            }}>Awards & Achievements</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {awards.map((award, i) => (
                <div key={i} style={{
                  padding: '28px 0',
                  borderBottom: i < awards.length - 1 ? '1px solid var(--border)' : 'none',
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', color: 'var(--accent)',
                    fontSize: '16px', marginTop: '3px', flexShrink: 0,
                  }}>{award.icon}</span>
                  <div>
                    <h4 style={{
                      fontFamily: 'var(--font-display)', fontSize: '1.15rem',
                      color: 'var(--text)', marginBottom: '8px',
                    }}>{award.title}</h4>
                    <p style={{
                      fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7,
                    }}>{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .awards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
