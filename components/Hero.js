import { meta } from '../lib/data';

export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 24px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,229,204,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,204,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,229,204,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(167,139,250,0.05) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%',
        position: 'relative', zIndex: 1, paddingTop: '80px',
      }}>
        {/* Status indicator */}
        <div className="fade-up fade-up-delay-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em',
          color: 'var(--text-muted)', textTransform: 'uppercase',
          marginBottom: '32px',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--accent)',
            animation: 'blink 2.5s ease-in-out infinite',
          }} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="fade-up fade-up-delay-2" style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: 'clamp(3.5rem, 12vw, 9rem)',
          lineHeight: 0.9, marginBottom: '8px',
          background: 'linear-gradient(135deg, #e8eaf0 0%, #a0a8c0 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {meta.name}
        </h1>

        {/* Tagline */}
        <p className="fade-up fade-up-delay-3" style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px, 2vw, 14px)',
          letterSpacing: '0.08em', color: 'var(--accent)',
          marginBottom: '40px', marginTop: '16px',
        }}>
          — {meta.tagline}
        </p>

        {/* Bio */}
        <p className="fade-up fade-up-delay-4" style={{
          fontFamily: 'var(--font-body)', fontSize: '17px',
          color: 'var(--text-muted)', lineHeight: 1.8,
          maxWidth: '580px', marginBottom: '48px',
        }}>
          {meta.bio}
        </p>

        {/* CTA buttons */}
        <div className="fade-up fade-up-delay-4" style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap',
        }}>
          <a href="#projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '13px 28px', border: '1px solid var(--accent)',
            color: 'var(--accent)', borderRadius: 'var(--radius)',
            transition: 'background var(--transition), color var(--transition)',
            background: 'transparent',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#080c14'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
          >
            View Projects →
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '13px 28px', border: '1px solid var(--border)',
            color: 'var(--text-muted)', borderRadius: 'var(--radius)',
            transition: 'border-color var(--transition), color var(--transition)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-muted)'; e.currentTarget.style.color = 'var(--text)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '-60px', right: '0',
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--text-faint)', writingMode: 'vertical-rl',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          scroll
          <span style={{ width: '1px', height: '48px', background: 'var(--text-faint)' }} />
        </div>
      </div>
    </section>
  );
}
