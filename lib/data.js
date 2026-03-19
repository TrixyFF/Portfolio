// ============================================================
//  data.js — Single source of truth for portfolio content
//  Edit this file to update any text, links, or lists.
// ============================================================

export const meta = {
  name: "Trixy",
  tagline: "Cybersecurity & Digital Forensics student at Temasek Polytechnic.",
  bio: `I'm a Cybersecurity & Digital Forensics student who finds beauty in the intersection of technical rigour and creative thinking. Whether I'm dissecting digital evidence, building quantum-resilient systems, or leading community programmes, I bring the same curiosity and care to everything I do. Outside of tech, you'll find me with a paintbrush in hand, nose deep in a novel, or out on a long cycling route—hobbies that keep my problem-solving instincts sharp and my perspective wide.`,
  email: "trixy@email.com",
  github: "https://github.com/trixy",
  linkedin: "https://linkedin.com/in/trixy",
};

export const skills = [
  {
    category: "Web Development",
    icon: "⬡",
    items: ["Next.js", "React", "Node.js", "Tailwind CSS", "REST APIs", "Git & GitHub"],
  },
  {
    category: "Cybersecurity",
    icon: "◈",
    items: [
      "Digital Forensics",
      "OSINT",
      "Post-Quantum Cryptography",
      "Network Security",
      "Penetration Testing",
      "Incident Response",
    ],
  },
  {
    category: "Soft Skills",
    icon: "◇",
    items: [
      "Leadership & Event Management",
      "Public Speaking",
      "Community Outreach",
      "Technical Writing",
      "Cross-functional Collaboration",
    ],
  },
];

export const projects = {
  school: [
    {
      title: "SecureConnect Audit Portal",
      tag: "Final Year Project",
      description:
        "A full-stack security audit management platform that streamlines vulnerability tracking, evidence collection, and remediation workflows for enterprise environments. Built with role-based access control and end-to-end encryption.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "JWT", "AES-256"],
      accent: "#00e5cc",
    },
    {
      title: "QuantumShield",
      tag: "Post-Quantum Cryptography",
      description:
        "Research and implementation project exploring post-quantum cryptographic algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium) combined with a hardware-based quantum random number generator. Designed to future-proof communication against quantum computing threats.",
      tech: ["Python", "CRYSTALS-Kyber", "QRNG", "OpenSSL", "C"],
      accent: "#a78bfa",
    },
    {
      title: "Coding Games for Kids",
      tag: "Community Programme",
      description:
        "Designed and led a series of interactive coding workshops for primary school children, using game-based learning to introduce computational thinking. Managed a volunteer team and coordinated with three community centres.",
      tech: ["Scratch", "Python Turtle", "Curriculum Design", "Facilitation"],
      accent: "#f59e0b",
    },
  ],
  artwork: [
    { title: "Urban Decay Series", medium: "Acrylic on Canvas" },
    { title: "Digital Landscapes", medium: "Watercolour" },
    { title: "Portraits in Code", medium: "Mixed Media" },
    { title: "Solitude", medium: "Ink & Watercolour" },
    { title: "Cybernetic Flora", medium: "Digital Art" },
    { title: "Fragments", medium: "Acrylic on Board" },
  ],
};

export const academics = {
  institution: "Temasek Polytechnic",
  diploma: "Diploma in Cybersecurity & Digital Forensics",
  modules: [
    {
      code: "CSF101",
      name: "Digital Forensics Fundamentals",
      description:
        "Hands-on evidence acquisition, preservation, and analysis using industry tools including Autopsy and FTK. Conducted mock investigations simulating real-world cybercrime scenarios.",
    },
    {
      code: "CSF201",
      name: "Network Security & Ethical Hacking",
      description:
        "Practical penetration testing on isolated lab environments. Covered reconnaissance, exploitation, and reporting methodologies aligned with OWASP and CEH frameworks.",
    },
    {
      code: "CSF301",
      name: "Cryptography & Secure Communications",
      description:
        "From classical ciphers to post-quantum algorithms. Implemented TLS/SSL configurations and explored emerging NIST post-quantum standards.",
    },
    {
      code: "CSF401",
      name: "OSINT & Threat Intelligence",
      description:
        "Leveraged open-source intelligence techniques for threat actor profiling and incident attribution. Built OSINT pipelines using Python-based automation tools.",
    },
    {
      code: "CSF501",
      name: "Incident Response & Malware Analysis",
      description:
        "Triage and containment of simulated breaches. Static and dynamic malware analysis using sandboxed environments, reverse engineering basics with Ghidra.",
    },
  ],
};

export const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2024",
    icon: "🛡",
  },
];

export const awards = [
  {
    title: "Silver Award — Cisco NetAcad Riders Singapore",
    description:
      "Recognised for excellence in networking and cybersecurity knowledge in the national Cisco Networking Academy competition.",
    icon: "◈",
  },
  {
    title: "Edusave Good Progress Award",
    description:
      "Awarded to the top 10% of students who demonstrated the most significant academic improvement within the year.",
    icon: "◈",
  },
  {
    title: "Selected — UN Global Peace Summit",
    description:
      "One of a select cohort of students chosen to represent Singapore's youth at the United Nations Global Peace Summit.",
    icon: "◈",
  },
];

export const ctf = {
  highlight: "Spark CTF 2.0 — Challenge Creator",
  description:
    "Designed and developed a suite of OSINT-based Capture the Flag challenges for Spark CTF 2.0, a competitive cybersecurity event. Crafted multi-layered puzzles involving geolocation analysis, social media forensics, and metadata extraction—challenging participants to think like investigators.",
  skills: ["OSINT", "Challenge Design", "Forensics", "Event Coordination"],
};

export const leadership = {
  role: "Executive Committee (EXCO)",
  organisation: "School of Informatics & IT, Temasek Polytechnic",
  highlights: [
    "Organised and managed large-scale school events with 500+ attendees, including orientation camps and inter-school competitions.",
    "Selected to represent Temasek Polytechnic at an international youth leadership camp in China, collaborating with students from across the Asia-Pacific region.",
    "Mentored incoming students as part of the student buddy programme, providing guidance on academic and campus life.",
    "Led cross-committee initiatives bridging the IT and Cybersecurity clubs, fostering interdisciplinary collaboration.",
  ],
};

export const volunteering = [
  {
    org: "Changi Beach Community Clean-up",
    description:
      "Regular volunteer at coastal clean-up drives, contributing to environmental conservation along Singapore's shores.",
    icon: "🌊",
  },
  {
    org: "Singapore Police Force",
    description:
      "Assisted in community policing programmes and public safety awareness campaigns, working alongside SPF officers at community events.",
    icon: "⚖",
  },
  {
    org: "Agency for Integrated Care (AIC)",
    description:
      "Supported AIC initiatives connecting seniors to social care services, including helping coordinate referrals and community support activities.",
    icon: "🤝",
  },
  {
    org: "Heartware Network — Digital Literacy for Seniors",
    description:
      "Taught basic digital literacy skills—smartphone usage, online safety, and government e-services navigation—to elderly community members, bridging the digital divide with patience and empathy.",
    icon: "💻",
  },
];

export const sports = [
  {
    sport: "Netball",
    highlights: [
      "Captain, Tanglin Trust School Netball Team",
      "Player of the Year (2019)",
      "Led team to inter-school finals, building team strategy and morale.",
    ],
    icon: "🏐",
  },
  {
    sport: "Dragon Boat",
    highlights: [
      "Represented Temasek Polytechnic in national dragon boat competitions.",
      "Competed in inter-polytechnic and open category races.",
      "Developed resilience, synchronisation, and team discipline through intensive training.",
    ],
    icon: "🚣",
  },
];
