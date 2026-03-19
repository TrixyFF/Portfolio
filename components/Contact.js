export default function Contact() {
  return (
    <section id="contact" className="section fade-up">
      <div className="section-label">09. What's Next?</div>
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="card text-center max-w-2xl mx-auto space-y-8">
        <p className="text-zinc-400 text-lg leading-relaxed">
          I am currently open to new opportunities, internships, and collaborations in cybersecurity and digital forensics. Whether you have a question or just want to connect, my inbox is always open.
        </p>
        
        <div className="flex flex-col items-center gap-6 pt-4">
          {/* Email Button */}
          <a
            href="mailto:trixyfaurefield@gmail.com" 
            className="border border-accent text-accent px-8 py-4 rounded hover:bg-accent-dim transition-colors font-mono tracking-wider"
          >
            Initialize_Contact
          </a>

          {/* Social Links */}
          <div className="flex gap-8 mt-4 font-mono text-sm">
            <a 
              href="https://github.com/TrixyFF" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-accent transition-colors"
            >
              [ GitHub ]
            </a>
            <a 
              href="https://www.linkedin.com/in/trixy-faure-field" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-accent transition-colors"
            >
              [ LinkedIn ]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}