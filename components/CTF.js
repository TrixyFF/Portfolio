import { ctf } from '../lib/data';

export default function CTF() {
  return (
    <section id="ctf" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">06 — CTF</p>
        <h2 className="section-title">Capture The Flag</h2>

        {/* Feature card */}
        <div style={{
          background: 'var(--bg-2)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius)', overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
        }} className="ctf-card">
          {/* Left: text */}
          <div style={{ padding: '48px' }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: '16px',
            }}>Challenge Creator</div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: 'var(--text)', marginBottom: '24px', lineHeight: 1.2,
            }}>{ctf.highlight}</h3>

            <p style={{
              fontSize: '15px', color: 'var(--text-muted)',
              lineHeight: 1.8, marginBottom: '36px',
            }}>{ctf.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {ctf.skills.map((s, i) => (
                <span key={i} className="tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Right: decorative terminal */}
          <div style={{
            background: '#060a10', borderLeft: '1px solid var(--border)',
            padding: '48px 36px', fontFamily: 'var(--font-mono)',
            display: 'flex', flexDirection: 'column', gap: '8px',
          }}>
            {/* Terminal bar */}
            <div style={{
              display: 'flex', gap: '6px', marginBottom: '24px',
            }}>
              {['#ff5f56','#ffbd2e','#27c93f'].map((c, i) => (
                <div key={i} style={{
                  width: '10px', height: '10px', borderRadius: '50%', background: c,
                }} />
              ))}
            </div>

            {[
              { prompt: '~$', text: 'nmap -sS target.ctf', color: 'var(--accent)' },
              { prompt: '', text: 'HOST IS UP (0.032ms latency)', color: 'var(--text-muted)' },
              { prompt: '~$', text: 'exiftool image.jpg | grep GPS', color: 'var(--accent)' },
              { prompt: '', text: 'GPS Position: [REDACTED]', color: '#f59e0b' },
              { prompt: '~$', text: 'python3 osint_tool.py --target', color: 'var(--accent)' },
              { prompt: '', text: 'Scraping public records...', color: 'var(--text-muted)' },
              { prompt: '', text: '▶ Profile found. Extracting...', color: '#a78bfa' },
              { prompt: '~$', text: 'cat flag.txt', color: 'var(--accent)' },
              { prompt: '', text: 'FLAG{0s1nt_m4st3r_2024}', color: '#27c93f' },
              { prompt: '~$', text: '▌', color: 'var(--accent)', blink: true },
            ].map((line, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '12px' }}>
                {line.prompt && (
                  <span style={{ color: 'var(--text-faint)', flexShrink: 0 }}>{line.prompt}</span>
                )}
                <span style={{
                  color: line.color,
                  animation: line.blink ? 'blink 1s step-end infinite' : 'none',
                }}>{line.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ctf-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
