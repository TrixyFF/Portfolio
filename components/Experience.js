import { experience } from '../lib/data';

export default function Experience() {
  return (
    <section id="experience" className="section fade-up">
      <div className="section-label">02. Experience</div>
      <h2 className="section-title">Where I've Worked</h2>

      <div className="space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="card">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                <p className="text-accent font-mono text-sm mt-1">{job.company}</p>
              </div>
              <p className="text-zinc-500 font-mono text-sm mt-2 md:mt-0">
                {job.period}
              </p>
            </div>
            
            <p className="text-zinc-400 mb-6 leading-relaxed">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {job.tech.map((item, i) => (
                <span key={i} className="tag text-[10px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}