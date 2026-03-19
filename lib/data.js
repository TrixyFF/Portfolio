// ============================================================
//  data.js — Single source of portfolio content
//  Edit this file to update any text, links, or lists.
// ============================================================

export const meta = {
  name: "Trixy Faure-Field",
  tagline: "Cybersecurity & Digital Forensics student at Temasek Polytechnic.",
  bio: `I'm a Cybersecurity & Digital Forensics student who finds beauty in the intersection of technical rigour and creative thinking. Whether I'm dissecting digital evidence, building quantum-resilient systems, or leading community programmes, I bring the same curiosity and care to everything I do. Outside of tech, you'll find me with a paintbrush in hand, nose deep in a novel, or out on a long cycling route—hobbies that keep my problem-solving instincts sharp and my perspective wide.`,
  email: "trixyfaurefield@gmail.com",
  github: "https://github.com/TrixyFF",
  linkedin: "https://www.linkedin.com/in/trixy-faure-field/",
};

export const skills = [
  {
    category: "Web Development",
    icon: "⬡",
    items: ["PHP", "Next.js", "React", "Node.js", "Flask", "FastAPI", "SQL", "Tailwind CSS"],
  },
  {
    category: "Cybersecurity",
    icon: "◈",
    items: [
      "Penetration Testing",
      "Digital Forensics",
      "Network Security",
      "Incident Response",
      "Malware Analysis",
      "Endpoint Security",
      "OSINT",
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
      "Operational Efficiency",
      "Cross-functional Collaboration",
    ],
  },
];

export const experience = [
  {
    company: "Ace Prefix Solutions Pte Ltd",
    role: "IT Engineering Associate (Internship)",
    period: "Apr 2025 - Sep 2025",
    description: "Focused on IT infrastructure modernization and technical support for Public Institutions. Performed system imaging, BIOS hardening, and secure data migrations while enforcing encryption policies and endpoint compliance.",
    tech: ["Infrastructure Modernization", "Endpoint Security", "BIOS Hardening", "Asset Configuration"],
  },
  {
    company: "Guzman y Gomez Mexican Kitchen",
    role: "Assistant Chef & Waitress",
    period: "Jun 2022 - Mar 2025",
    description: "Balanced part-time employment with full-time studies. Developed strong teamwork and time management skills in a high-pressure environment.",
    tech: ["Operational Efficiency", "Communication", "Time Management"],
  }
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
    year: "2025",
    icon: "🛡",
  },
  {
    name: "AWS Academy Graduate - Cloud Architecting",
    issuer: "Amazon Web Services",
    year: "2025",
    icon: "☁",
  },
];

export const awards = [
  {
    title: "Gold Award — Student Volunteer Recognition Programme (SVRP)",
    description: "Awarded by AiSP in 2025 for outstanding contributions to the cybersecurity community through volunteering.",
    icon: "🏆",
  },
  {
    title: "Silver Award — Cisco NetAcad Riders Singapore",
    description:
      "Recognised for excellence in networking and cybersecurity knowledge in the national Cisco Networking Academy competition.",
    icon: "◈",
  },
  {
    title: "International Delegate — UN Global Peace Summit",
    description: "Represented Singapore and Temasek Poly at the United Nations Humanitarian Affairs summit in Thailand.",
    icon: "🇺🇳",
  },
  {
    title: "Edusave Good Progress Award",
    description:
      "Awarded to the top 10% of students who demonstrated the most significant academic improvement within the year.",
    icon: "◈",
  },
  {
    title: "National Champion — Pesta Sukan Dragon Boat",
    description: "Achieved the National Championship Mixed & Tertiary Mixed categories.",
    icon: "🚣",
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
    "Member of Ladies in Cyber (AiSP) and Women in Science & Technology (TWIST).",
    "Selected for Heartware Network Overseas Leadership Camp in China (2023).",
    "Led cross-committee initiatives bridging the Informatics and IT ng interdisciplinary collaboration.",
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
    org: "Heartware Network — Youth Leader",
    description: "Conducted digital literacy workshops for seniors in Bedok, Chai Chee, and Tampines covering Singpass and mobile security.",
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
