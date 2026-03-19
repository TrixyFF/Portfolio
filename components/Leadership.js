import { leadership } from '../lib/data';

export default function Leadership() {
  return (
    <section id="leadership" style={{ padding: '100px 24px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">07 — Leadership</p>
        <h2 className="section-title">Leadership</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '60px',
          alignItems: 'start',
        }} className="leadership-grid">
          {/* Role block */}
          <div>
            <div style={{
              padding: '40px', background: 'var(--bg-3)',
              border: '1px solid var(--border-accent)', borderRadius: 'var(--radius)',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--accent)', marginBottom: '12px',
              }}>Current Role</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: '1.6rem', color: 'var(--text)', marginBottom: '10px',
              }}>{leadership.role}</h3>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                color: 'var(--text-muted)', letterSpacing: '0.05em',
              }}>{leadership.organisation}</p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {leadership.highlights.map((h, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '20px', padding: '24px 0',
                  borderBottom: i < leadership.highlights.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--text-faint)', paddingTop: '3px', flexShrink: 0, minWidth: '28px',
                  }}>0{i + 1}</span>
                  <p style={{
                    fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.75,
                  }}>{h}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .leadership-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
