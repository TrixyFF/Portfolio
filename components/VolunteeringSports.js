import { volunteering, sports } from '../lib/data';

export function Volunteering() {
  return (
    <section id="volunteering" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">08 — Community</p>
        <h2 className="section-title">Volunteering</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {volunteering.map((v, i) => (
            <div key={i} style={{
              padding: '32px', background: 'var(--bg-2)',
              border: '1px solid var(--border)', borderRadius: 'var(--radius)',
              transition: 'border-color var(--transition), transform var(--transition)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-accent)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>{v.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.15rem',
                color: 'var(--text)', marginBottom: '12px', lineHeight: 1.3,
              }}>{v.org}</h3>
              <p style={{
                fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.75,
              }}>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sports() {
  return (
    <section id="sports" style={{ padding: '100px 24px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">09 — Athletics</p>
        <h2 className="section-title">Sports</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '24px',
        }}>
          {sports.map((s, i) => (
            <div key={i} style={{
              padding: '48px', background: 'var(--bg-3)',
              border: '1px solid var(--border)', borderRadius: 'var(--radius)',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color var(--transition)',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {/* Large icon background */}
              <div style={{
                position: 'absolute', top: '-10px', right: '-10px',
                fontSize: '100px', opacity: 0.06, userSelect: 'none',
                lineHeight: 1,
              }}>{s.icon}</div>

              <div style={{ fontSize: '32px', marginBottom: '20px' }}>{s.icon}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: '2rem', color: 'var(--text)', marginBottom: '28px',
              }}>{s.sport}</h3>

              <ul style={{
                listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px',
              }}>
                {s.highlights.map((h, j) => (
                  <li key={j} style={{
                    display: 'flex', gap: '12px', alignItems: 'flex-start',
                    fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6,
                  }}>
                    <span style={{
                      color: 'var(--accent)', flexShrink: 0, marginTop: '4px',
                      fontFamily: 'var(--font-mono)', fontSize: '12px',
                    }}>→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
