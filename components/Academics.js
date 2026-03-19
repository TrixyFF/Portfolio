import { academics } from '../lib/data';

export default function Academics() {
  return (
    <section id="academics" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">04 — Education</p>
        <h2 className="section-title">Academics</h2>

        {/* Institution header */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '6px',
          marginBottom: '60px', paddingBottom: '40px',
          borderBottom: '1px solid var(--border)',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            letterSpacing: '0.15em', color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}>{academics.institution}</span>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text)',
          }}>{academics.diploma}</h3>
        </div>

        {/* Module grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {academics.modules.map((mod, i) => (
            <div key={i} style={{
              padding: '28px', background: 'var(--bg-2)',
              border: '1px solid var(--border)', borderRadius: 'var(--radius)',
              transition: 'border-color var(--transition)',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                letterSpacing: '0.15em', color: 'var(--accent)',
                textTransform: 'uppercase', marginBottom: '12px',
              }}>{mod.code}</div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                color: 'var(--text)', marginBottom: '14px',
              }}>{mod.name}</h4>
              <p style={{
                fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.75,
              }}>{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
