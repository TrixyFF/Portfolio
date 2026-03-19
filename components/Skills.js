import { skills } from '../lib/data';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">02 — Expertise</p>
        <h2 className="section-title">Skills & Tools</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2px',
        }}>
          {skills.map((group, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              padding: '40px 36px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color var(--transition)',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {/* Background number */}
              <div style={{
                position: 'absolute', top: '20px', right: '28px',
                fontFamily: 'var(--font-mono)', fontSize: '80px',
                fontWeight: 700, color: 'var(--bg-3)', lineHeight: 1,
                userSelect: 'none',
              }}>0{i + 1}</div>

              {/* Icon */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '24px',
                color: 'var(--accent)', marginBottom: '16px',
              }}>{group.icon}</div>

              {/* Category name */}
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.6rem',
                marginBottom: '28px', color: 'var(--text)',
              }}>{group.category}</h3>

              {/* Items */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.items.map((item, j) => (
                  <li key={j} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    fontFamily: 'var(--font-mono)', fontSize: '13px',
                    color: 'var(--text-muted)', letterSpacing: '0.03em',
                  }}>
                    <span style={{
                      width: '20px', height: '1px', background: 'var(--accent)',
                      opacity: 0.5, flexShrink: 0,
                    }} />
                    {item}
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
