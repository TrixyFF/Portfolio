import { projects } from '../lib/data';

function ProjectCard({ project }) {
  return (
    <div style={{
      background: 'var(--bg-2)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius)', padding: '36px',
      display: 'flex', flexDirection: 'column', gap: '20px',
      transition: 'border-color var(--transition), transform var(--transition)',
      position: 'relative', overflow: 'hidden',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = project.accent + '40';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {/* Accent top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: project.accent, opacity: 0.6,
      }} />

      {/* Tag */}
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: project.accent, paddingTop: '8px',
      }}>
        {project.tag}
      </span>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: '1.6rem',
        color: 'var(--text)', lineHeight: 1.2,
      }}>{project.title}</h3>

      {/* Description */}
      <p style={{
        color: 'var(--text-muted)', fontSize: '15px',
        lineHeight: 1.75, flexGrow: 1,
      }}>{project.description}</p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {project.tech.map((t, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: '2px',
            background: project.accent + '12',
            color: project.accent,
            border: `1px solid ${project.accent}30`,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 24px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p className="section-label">03 — Work</p>
        <h2 className="section-title">Projects</h2>

        {/* School projects */}
        <h3 style={{
          fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '28px',
        }}>
          [ School & Academic ]
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px', marginBottom: '80px',
        }}>
          {projects.school.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>

        {/* Artwork gallery */}
        <h3 style={{
          fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px',
        }}>
          [ Personal Artwork & Paintings ]
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '36px', maxWidth: '560px' }}>
          Outside of tech, I paint. These are a selection of works exploring colour, texture, and the tension between the digital and the organic.
        </p>

        {/* Mosaic gallery */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '12px',
        }}>
          {projects.artwork.map((piece, i) => {
            const hues = [
              'linear-gradient(135deg, #0e1a2b 0%, #1a2d3d 100%)',
              'linear-gradient(135deg, #1a1030 0%, #2d1550 100%)',
              'linear-gradient(135deg, #0f2420 0%, #0d3d30 100%)',
              'linear-gradient(135deg, #2d1a00 0%, #3d2800 100%)',
              'linear-gradient(135deg, #1a0f1a 0%, #2d1230 100%)',
              'linear-gradient(135deg, #0a1828 0%, #102238 100%)',
            ];
            return (
              <div key={i} style={{
                aspectRatio: i % 3 === 0 ? '3/4' : '1/1',
                background: hues[i % hues.length],
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: '16px',
                position: 'relative', overflow: 'hidden',
                cursor: 'default',
                transition: 'border-color var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,229,204,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                {/* Decorative abstract shape */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '70%', height: '70%',
                  borderRadius: i % 2 === 0 ? '50%' : '0',
                  background: `rgba(${i * 30 % 200}, ${i * 50 % 150}, ${200 - i * 20}, 0.08)`,
                  filter: 'blur(12px)',
                }} />
                <div style={{
                  position: 'absolute', top: '20%', right: '15%',
                  width: '40%', height: '40%',
                  borderRadius: i % 3 === 0 ? '0' : '50%',
                  border: `1px solid rgba(255,255,255,0.06)`,
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontStyle: 'italic',
                    fontSize: '13px', color: 'var(--text)', marginBottom: '4px',
                  }}>{piece.title}</p>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    letterSpacing: '0.1em', color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}>{piece.medium}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
