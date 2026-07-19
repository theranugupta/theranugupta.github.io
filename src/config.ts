export const siteConfig = {
  name: "Ranu Gupta",
  title: "Senior Frontend Developer @ Cigna",
  subtitle: "React · Next.js · TypeScript · Redux · Tailwind",
  description: "Portfolio website of Ranu Gupta",
  accentColor: "#e07856",
  accentColorStrong: "#c1493a",
  social: {
    phone: "+91-9901969903",
    email: "the.ranu.gupta@gmail.com",
    linkedin: "https://www.linkedin.com/in/ranu-gupta-551438159/",
    github: "https://github.com/theranugupta",
  },
  seo: {
    description: "Ranu Gupta - Senior Frontend Developer at Cigna | Ex-FIS Global. 9 years of experience building scalable, performant web applications with React, Next.js, TypeScript, Redux, and Tailwind CSS.",
    keywords: "Ranu Gupta, theranugupta, Frontend Developer, React Developer, Next.js, TypeScript, Redux, Tailwind CSS, Shadcn UI, D3.js, Chart.js, FIS Global, Cigna, Enterprise Web Apps",
    url: "https://theranugupta.github.io",
    image: "",
    twitterHandle: "",
  },
  aboutMe: [
    "I'm a Senior Frontend Developer with 9 years of experience building scalable, performant web applications with React, Next.js, and TypeScript.",
    "I've shipped products across healthcare (Cigna), fintech (FIS Global), and digital media (Time Inc) — specializing in component architecture, server-side and static rendering for performance, design-system-driven UI, and REST API integration, while collaborating closely with Node.js backend teams to deliver enterprise-grade, accessible interfaces.",
  ],
  skills: [
    {
      category: "Frameworks & Libraries",
      items: [
        "React",
        "Next.js (App & Pages Router)",
        "Redux",
        "Redux Toolkit",
        "React Router",
        "React Hook Form",
      ],
    },
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS"],
    },
    {
      category: "Styling & UI",
      items: ["Tailwind CSS", "Shadcn UI", "Material-UI", "Bootstrap"],
    },
    {
      category: "Rendering & Performance",
      items: [
        "SSR",
        "SSG",
        "ISR",
        "React Server Components",
        "Code Splitting",
        "Lazy Loading",
        "List Virtualization",
        "Memoization",
      ],
    },
    {
      category: "Data Visualization",
      items: ["D3.js", "Chart.js"],
    },
    {
      category: "APIs & Integration",
      items: ["REST APIs", "Payment Gateways", "Caching Strategies"],
    },
    {
      category: "Testing & Debugging",
      items: [
        "Jest",
        "Cypress",
        "React Testing Library",
        "React DevTools",
        "Chrome DevTools",
      ],
    },
    {
      category: "Build & CI/CD",
      items: ["Webpack", "GitHub Actions", "Jenkins", "Azure"],
    },
    {
      category: "Backend (working knowledge)",
      items: ["Node.js", "Express"],
    },
  ],
  projects: [
    {
      name: "Cigna HealthCare Internal Member Portal",
      description:
        "Led frontend development of an internal member portal consolidating Telehealth, Health & Well-Being, and Provider Search into a single React and Next.js app. Defined the component architecture and a shared, accessible (WCAG 2.1) design-system library with TypeScript and Shadcn UI, adopted across feature teams. Built secure, role-based dashboards with Redux Toolkit and Next.js SSR, and integrated Node.js REST services for eligibility, claims, and appointment data with caching strategies.",
      link: "https://www.cigna.com",
      skills: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Shadcn UI", "SSR", "WCAG 2.1", "Node.js"],
    },
    {
      name: "Digital Banking & KYC Verification",
      description:
        "Integrated OCR-based document scanning with Google Vision API and Tesseract.js, reducing manual KYC verification time by ~70%. Built forms with React Hook Form and custom validators, cutting submission errors by ~40%, and improved page load times by ~35% through lazy loading, route guards, and Redux Toolkit state management.",
      link: "https://www.fisglobal.com",
      skills: ["React", "Next.js", "Node.js", "React Hook Form", "Redux Toolkit", "Google Vision API", "Tesseract.js"],
    },
    {
      name: "Transaction Monitoring Dashboard",
      description:
        "Built a real-time monitoring dashboard for 50+ banks, cutting fraud detection time by 35%. Used Chart.js and D3.js to analyze 1M+ transactions daily — spotting anomalies 50% faster — and refined API caching to reduce load time below 200ms.",
      link: "https://www.fisglobal.com",
      skills: ["React", "Next.js", "Chart.js", "D3.js", "API Optimization"],
    },
    {
      name: "Time & Travel Magazine Website",
      description:
        "Built a feature-rich magazine website with Angular and Material UI, increasing engagement by 30%. Optimized article rendering and lazy loading to lower page load time by 50%.",
      link: "https://time.com",
      skills: ["Angular", "Material UI", "Lazy Loading", "Responsive Design"],
    },
  ],
  experience: [
    {
      company: "Cigna",
      title: "Senior Frontend Developer",
      url: "https://www.cigna.com",
      dateRange: "June 2025 – February 2026",
      bullets: [
        "Built secure member login and registration workflows with React, React Router, Redux, and Node.js to support scalable, compliant onboarding.",
        "Contributed to Telehealth, Health & Well-Being, and Provider Search features, integrating React and Shadcn UI with Node.js services.",
        "Partnered with cross-functional teams to deliver enterprise-grade healthcare applications using React, Redux, and Tailwind CSS.",
      ],
    },
    {
      company: "FIS Global",
      title: "Software Development Engineer II",
      url: "https://www.fisglobal.com",
      dateRange: "November 2018 – April 2025",
      bullets: [
        "Built scalable enterprise web applications with React, Next.js, and Tailwind CSS, improving maintainability and scalability.",
        "Reduced page load time by ~30% and increased user engagement by ~20% through React performance optimization — memoization, code splitting, and lazy loading.",
        "Designed efficient REST APIs with backend teams and improved UI responsiveness using React and Next.js (SSR and SSG).",
        "Integrated third-party APIs and payment gateways using React, Next.js, Shadcn UI, and Tailwind CSS.",
      ],
    },
    {
      company: "Time Inc",
      title: "Software Development Engineer I",
      url: "https://time.com",
      dateRange: "March 2017 – October 2018",
      bullets: [
        "Delivered responsive Angular applications, enhancing user interaction by 25%.",
        "Built 12+ reusable UI components, decreasing development time by 30%.",
        "Worked closely with designers to implement pixel-perfect UI/UX.",
      ],
    },
  ],
  achievements: {
    awards: [
      {
        title: "Excellence in Front-End Architecture",
        description: "Awarded for exceptional contributions to front-end architecture across enterprise products.",
      },
      {
        title: "Web Performance Optimization",
        description: "Recognized for optimizing web performance and reducing load time by 30%.",
      },
    ],
    metrics: [
      { value: "9", label: "Years of Experience" },
      { value: "30%", label: "Avg. Load Time Reduction" },
      { value: "50+", label: "Banks Served" },
      { value: "1M+", label: "Daily Transactions Analyzed" },
    ],
    softSkills: [
      "Cross-browser debugging & compatibility",
      "Strong communication & team collaboration",
      "Agile & Scrum methodologies",
      "Mentorship & knowledge sharing",
      "Scalable front-end architecture",
      "Performance optimization",
    ],
  },
  education: [
    {
      school: "RGPV University",
      degree: "Bachelor of Engineering, Electronics & Communications",
      link: "https://www.rgpv.ac.in",
      dateRange: "August 2012 – May 2016",
      achievements: [
        "Gwalior, India",
        "CGPA: 7.87 / 10",
      ],
    },
    {
      school: "J.L.N. College, Dehri-on-Sone",
      degree: "Senior Secondary (Class XII), Science",
      link: "",
      dateRange: "2012",
      achievements: [
        "Rohtas · BSEB Patna",
        "Aggregate: 68% · 1st Division",
      ],
    },
    {
      school: "Indira Gandhi Balika High School",
      degree: "Secondary (Class X)",
      link: "",
      dateRange: "2010",
      achievements: [
        "Hazaribagh · JAC Ranchi",
        "Percentage: 85.2%",
      ],
    },
  ],
  interests: [
    {
      icon: "📚",
      title: "Reading",
      description:
        "Tech essays, system-design write-ups, and the occasional sci-fi novel — anything that sharpens how I think about building software.",
    },
    {
      icon: "🎨",
      title: "UI / Design",
      description:
        "Studying interaction patterns, typography, and motion. I keep a running collection of clean, minimal product UIs for inspiration.",
    },
    {
      icon: "🌐",
      title: "Website Development",
      description:
        "Building side projects and small sites for fun — experimenting with new frameworks, layouts, and animations to keep my frontend skills sharp.",
    },
    {
      icon: "🎧",
      title: "Music & Podcasts",
      description:
        "Lo-fi while coding, indie playlists otherwise. Long-form podcasts on engineering, product, and the craft of building.",
    },
    {
      icon: "🧑‍🏫",
      title: "Mentoring",
      description:
        "Helping junior devs unblock themselves, review PRs thoughtfully, and grow into confident engineers.",
    },
    {
      icon: "✍️",
      title: "Tech Blogging",
      description:
        "Writing about frontend craft, performance, and Angular/React patterns on LinkedIn, Medium, and freeCodeCamp — turning what I learn into posts that help other devs.",
    },
  ],
  githubProjects: [
    {
      name: "shopzone",
      description:
        "Angular 19 e-commerce SPA with NgRx state, Chart.js + D3.js analytics, View Transitions API, deferred loading, and a CSS 3D dimensions visualizer. A playground for modern Angular APIs and production-ready patterns.",
      tech: ["Angular 19", "TypeScript", "NgRx", "Chart.js", "D3.js"],
      repoUrl: "https://github.com/theranugupta/shopzone",
    },
    {
      name: "AngularProject",
      description:
        "Angular learning sandbox — components, services, routing, and forms practice. The scratchpad I use to try new Angular features in isolation before bringing them into bigger codebases.",
      tech: ["Angular", "TypeScript"],
      repoUrl: "https://github.com/theranugupta/AngularProject",
    },
    {
      name: "theranugupta.github.io",
      description:
        "Personal site & portfolio source — Astro + Tailwind, statically generated. Showcases experience, education, and projects with a focus on fast loads and clean component composition.",
      tech: ["Astro", "Tailwind CSS", "TypeScript"],
      repoUrl: "https://github.com/theranugupta/theranugupta.github.io",
    },
  ],
  resume: {
    url: "/Ranu_Gupta_React.pdf",
    label: "View resume (PDF)",
  },
};
