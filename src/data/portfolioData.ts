import { SkillItem, ProjectItem, ExperienceItem } from '../types/portfolio';

import heroStudioImg from '../assets/images/ravindu-hero-hd.jpg';
import gigNextjsImg from '../assets/images/fiverr-gig-nextjs.jpg';
import gigAiVisibilityImg from '../assets/images/fiverr-gig-ai-visibility.jpg';

export { heroStudioImg };

// GitHub's social preview card for a repository
const repoCard = (repo: string) => `https://opengraph.githubassets.com/1/Ravinduyas/${repo}`;

export const DEVELOPER_PROFILE = {
  name: 'Ravindu Kariyawasam',
  role: 'Full-Stack Developer · Web Systems for Tourism & Small Business',
  location: 'Sri Lanka / Remote',
  email: 'ravindu.yasanka21@gmail.com',
  github: 'https://github.com/Ravinduyas',
  linkedin: 'https://linkedin.com/in/ravindu-kariyawasam-598386204',
  website: 'github.com/Ravinduyas',
  fiverr: 'https://www.fiverr.com/yasanka',
  facebook: 'https://www.facebook.com/ravindu.yasanka.734447',
  instagram: 'https://www.instagram.com/ravindu.yasanka',
  bio: 'Full-stack developer building websites, booking engines and business systems for surf camps, hostels, rentals and local businesses in Sri Lanka. I work mainly with React, TypeScript, Node.js and MongoDB, and ship everything from marketing sites to offline desktop POS software.',
  status: 'Available for freelance projects on Fiverr',
  metrics: [
    { value: '44', label: 'Public Repositories' },
    { value: '10+', label: 'Client Projects' },
    { value: '2020', label: 'Coding Since' },
    { value: 'IJSE', label: 'Software Engineering' }
  ]
};

export const FIVERR_GIGS = [
  {
    title: 'Migrate your website to Next.js',
    text: 'Move an existing site to Next.js for faster loading, better SEO and easier upkeep.',
    href: 'https://www.fiverr.com/s/AGy5NlQ',
    image: gigNextjsImg
  },
  {
    title: 'AI visibility score with GEO, AEO & SEO',
    text: 'Find out how your brand shows up in ChatGPT, Gemini and Claude, and get a plan to rank there.',
    href: 'https://www.fiverr.com/s/kXLqQvL',
    image: gigAiVisibilityImg
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    id: 'fe-react',
    name: 'React & TypeScript',
    category: 'frontend',
    level: 92,
    experience: '3+ years',
    description: 'Component-driven React 19 apps with TypeScript, Vite and react-router — multi-page sites, booking flows and admin panels.',
    highlightProjects: ['Mellow Bay', 'Surf & Retreat', 'Helio', 'Skyle POS']
  },
  {
    id: 'fe-next',
    name: 'Next.js',
    category: 'frontend',
    level: 82,
    experience: '2+ years',
    description: 'App Router sites with next/image, metadata and static export for client businesses.',
    highlightProjects: ['Katja Psychotherapy', 'Be Cool Surf School']
  },
  {
    id: 'fe-tailwind',
    name: 'Tailwind CSS & UI Design',
    category: 'frontend',
    level: 90,
    experience: '3+ years',
    description: 'Responsive, brand-matched layouts built from Figma designs, with motion and accessible components.',
    highlightProjects: ['Surf & Retreat', 'Helio', 'Down South Blog']
  },
  {
    id: 'fe-native',
    name: 'React Native & Firebase',
    category: 'frontend',
    level: 70,
    experience: '2+ years',
    description: 'Real-time chat app with Firebase Authentication, Firestore and Cloud Storage.',
    highlightProjects: ['WhatsApp Clone']
  },

  // Backend
  {
    id: 'be-node',
    name: 'Node.js & Express APIs',
    category: 'backend',
    level: 88,
    experience: '3+ years',
    description: 'REST APIs for pricing, bookings, enquiries and content, with validation shared between server and clients.',
    highlightProjects: ['Mellow Bay', 'Skyle POS', 'Down South Blog']
  },
  {
    id: 'be-auth',
    name: 'Auth & Booking Logic',
    category: 'backend',
    level: 84,
    experience: '2+ years',
    description: 'JWT authentication, role-based access and time-slot algorithms that prevent double bookings.',
    highlightProjects: ['Salon Management System', 'Mellow Bay']
  },
  {
    id: 'be-java',
    name: 'Java & Java EE',
    category: 'backend',
    level: 75,
    experience: '2+ years',
    description: 'Object-oriented desktop and web systems from IJSE coursework — POS and hostel management.',
    highlightProjects: ['Hostel Management System', 'POS Java EE']
  },
  {
    id: 'be-python',
    name: 'Python Automation',
    category: 'backend',
    level: 68,
    experience: '2+ years',
    description: 'Scripts for image conversion, document generation and small business tooling.',
    highlightProjects: ['GSC MCP Connector']
  },

  // Deployment & tooling
  {
    id: 'cloud-pages',
    name: 'GitHub Pages, Actions & Vercel',
    category: 'cloud',
    level: 86,
    experience: '3+ years',
    description: 'Automated static deploys, SPA fallbacks and base-path configuration for client sites.',
    highlightProjects: ['Surf & Retreat', 'Mellow Bay', 'Helio', 'Down South Blog']
  },
  {
    id: 'cloud-aws',
    name: 'AWS Amplify',
    category: 'cloud',
    level: 70,
    experience: '1+ year',
    description: 'Hosting and build configuration for a production rental website.',
    highlightProjects: ['Hello Rent']
  },
  {
    id: 'cloud-electron',
    name: 'Electron Desktop Packaging',
    category: 'cloud',
    level: 76,
    experience: '1+ year',
    description: 'Offline Windows installers bundling an Express backend, React frontend and embedded MongoDB.',
    highlightProjects: ['Skyle POS']
  },
  {
    id: 'cloud-seo',
    name: 'SEO & Search Console',
    category: 'cloud',
    level: 80,
    experience: '2+ years',
    description: 'Technical SEO, JSON-LD structured data, sitemaps, and an MCP server that brings Search Console data into AI tools.',
    highlightProjects: ['GSC MCP Connector', 'Down South Blog']
  },

  // Databases
  {
    id: 'db-mongo',
    name: 'MongoDB',
    category: 'database',
    level: 85,
    experience: '3+ years',
    description: 'Document models for posts, bookings and sales — including an embedded MongoDB shipped inside a desktop app.',
    highlightProjects: ['Skyle POS', 'Down South Blog']
  },
  {
    id: 'db-firebase',
    name: 'Firebase & Firestore',
    category: 'database',
    level: 70,
    experience: '2+ years',
    description: 'Real-time listeners, authentication and cloud storage for mobile apps.',
    highlightProjects: ['WhatsApp Clone']
  },
  {
    id: 'db-sql',
    name: 'MySQL',
    category: 'database',
    level: 72,
    experience: '2+ years',
    description: 'Relational schemas and queries for Java-based management systems.',
    highlightProjects: ['Hostel Management System', 'POS Java EE']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'skyle-pos',
    title: 'Skyle POS',
    tagline: 'Offline Desktop Point-of-Sale System',
    category: 'systems',
    featured: true,
    image: repoCard('skyle_pos'),
    clientOrContext: 'Retail business software',
    year: '2026',
    summary: 'A point-of-sale system that runs fully offline on a shop PC — one Windows installer sets up the app, its API and its database.',
    challenge: 'Shops need billing to keep working with no internet and no IT person to install a database server.',
    solution: 'Packaged an Express backend, a React frontend and an embedded MongoDB inside an Electron shell, with a silent VC++ runtime install so it runs on a fresh Windows machine.',
    metrics: [
      { label: 'Installer', value: '~120 MB' },
      { label: 'Internet needed', value: 'None' },
      { label: 'Platform', value: 'Windows' }
    ],
    technologies: ['Electron', 'React', 'TypeScript', 'Express', 'MongoDB', 'Vite'],
    githubUrl: 'https://github.com/Ravinduyas/skyle_pos'
  },
  {
    id: 'mellow-bay',
    title: 'Mellow Bay',
    tagline: 'Coliving & Coworking Booking Platform',
    category: 'systems',
    featured: true,
    image: repoCard('mellow-bay'),
    clientOrContext: 'Mellow Bay Living, Weligama',
    year: '2026',
    summary: 'Website, guest booking flow and admin booking engine for a beachfront coliving, coworking space and restaurant.',
    challenge: 'The guest site, the admin panel and the API all quote prices — they must never disagree on what a stay costs.',
    solution: 'Built three apps around one shared domain package for types, pricing and validation. The server is the single authority on price; both front ends consume it instead of doing their own arithmetic.',
    metrics: [
      { label: 'Apps', value: '3' },
      { label: 'Pricing source', value: '1 shared package' },
      { label: 'Status', value: 'Live' }
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Express', 'GitHub Actions'],
    githubUrl: 'https://github.com/Ravinduyas/mellow-bay',
    liveUrl: 'https://ravinduyas.github.io/mellow-bay/'
  },
  {
    id: 'helio',
    title: 'Helio',
    tagline: 'Hostel Management System Landing Page',
    category: 'systems',
    featured: true,
    image: repoCard('bunk-guide'),
    clientOrContext: 'Hostel PMS product',
    year: '2026',
    summary: 'Marketing site for Helio, a property management system for hostels with a built-in guest guide.',
    challenge: 'Explain a multi-feature hostel PMS clearly to owners who are not technical.',
    solution: 'Rebranded and rebuilt the landing page with a focused visual identity, feature sections and a fast static build deployed to GitHub Pages.',
    metrics: [
      { label: 'Build', value: 'Static' },
      { label: 'Hosting', value: 'GitHub Pages' },
      { label: 'Status', value: 'Live' }
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Ravinduyas/bunk-guide',
    liveUrl: 'https://ravinduyas.github.io/bunk-guide/'
  },
  {
    id: 'surf-retreat',
    title: 'Surf & Retreat',
    tagline: 'Surf Hostel Website, Weligama',
    category: 'web',
    featured: false,
    image: repoCard('surf-and-retreat'),
    clientOrContext: 'Surf & Retreat Hostel Weligama',
    year: '2026',
    summary: 'Six-page website for a coliving and coworking surf hostel — rooms, surf packages, coworking plans, services and gallery.',
    challenge: 'Present stays, surf lessons and coworking in one place without overwhelming guests.',
    solution: 'Designed a bento-card layout with a combined “Stay, Surf & Work” page, a filterable gallery with lightbox, and one booking modal for all three offers. All content lives in a single data file for easy updates.',
    metrics: [
      { label: 'Pages', value: '6' },
      { label: 'Booking modal', value: '3 offers' },
      { label: 'Status', value: 'Live' }
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vite'],
    githubUrl: 'https://github.com/Ravinduyas/surf-and-retreat',
    liveUrl: 'https://ravinduyas.github.io/surf-and-retreat/'
  },
  {
    id: 'down-south-blog',
    title: 'Down South Blog',
    tagline: 'Sri Lanka South-Coast Travel Blog & CMS',
    category: 'web',
    featured: false,
    image: repoCard('the-blog'),
    clientOrContext: 'Travel content for partner businesses',
    year: '2026',
    summary: 'A travel blog about Sri Lanka’s south coast with its own editor panel, built to support local surf camps, rentals and tour partners.',
    challenge: 'Make articles easy to edit while staying fast and search-friendly on static hosting.',
    solution: 'Built a React blog, an Express + MongoDB API and an admin editor. Articles carry quick-answer summaries and FAQ JSON-LD, and the static site falls back to bundled articles on GitHub Pages.',
    metrics: [
      { label: 'Apps', value: 'Blog + API + Admin' },
      { label: 'Structured data', value: 'FAQPage JSON-LD' },
      { label: 'Status', value: 'Live' }
    ],
    technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'SEO'],
    githubUrl: 'https://github.com/Ravinduyas/the-blog',
    liveUrl: 'https://ravinduyas.github.io/the-blog/'
  },
  {
    id: 'salon-ms',
    title: 'Salon Management System',
    tagline: 'Appointment Booking for Salons',
    category: 'systems',
    featured: false,
    image: repoCard('SalonMS'),
    clientOrContext: 'Full-stack web application',
    year: '2026',
    summary: 'Clients book appointments online; salon owners manage services, working hours, blocked slots and all bookings from a dashboard.',
    challenge: 'Prevent double bookings across services of different lengths, breaks and holidays.',
    solution: 'Wrote a time-slot algorithm that checks existing appointments and blocked periods on the server, with JWT auth and separate client and owner interfaces.',
    metrics: [
      { label: 'Roles', value: 'Client / Owner' },
      { label: 'Auth', value: 'JWT' },
      { label: 'Double bookings', value: 'Prevented' }
    ],
    technologies: ['TypeScript', 'Node.js', 'REST API', 'JWT'],
    githubUrl: 'https://github.com/Ravinduyas/SalonMS'
  },
  {
    id: 'hello-rent',
    title: 'Hello Rent',
    tagline: 'Scooter, Tuk-Tuk & Car Rental Website',
    category: 'web',
    featured: false,
    image: repoCard('hello-web'),
    clientOrContext: 'Hello Rent Sri Lanka, Weligama',
    year: '2026',
    summary: 'Website for a vehicle rental business in Weligama, deployed on AWS Amplify.',
    challenge: 'One codebase had to build correctly for both GitHub Pages and AWS Amplify.',
    solution: 'Made the build base path configurable so each host gets the right asset URLs.',
    metrics: [
      { label: 'Hosting', value: 'AWS Amplify' },
      { label: 'Status', value: 'Live' }
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'AWS Amplify'],
    githubUrl: 'https://github.com/Ravinduyas/hello-web',
    liveUrl: 'https://hellorentsrilanka.com/'
  },
  {
    id: 'gsc-mcp',
    title: 'GSC MCP Connector',
    tagline: 'Google Search Console for AI Assistants',
    category: 'tools',
    featured: false,
    image: repoCard('gsc-mcp'),
    clientOrContext: 'Open-source developer tool',
    year: '2026',
    summary: 'A Model Context Protocol server that lets AI assistants query Google Search Console — search analytics, URL inspection, sitemaps and indexing audits.',
    challenge: 'Give an AI assistant safe, read-only access to client search data.',
    solution: 'Built stdio and HTTP entry points over one shared MCP core, authenticated with a Google service account.',
    metrics: [
      { label: 'Transports', value: 'stdio + HTTP' },
      { label: 'Language', value: 'TypeScript' }
    ],
    technologies: ['TypeScript', 'Node.js', 'MCP', 'Google APIs'],
    githubUrl: 'https://github.com/Ravinduyas/gsc-mcp'
  },
  {
    id: 'whatsapp-clone',
    title: 'WhatsApp Clone',
    tagline: 'Real-Time Mobile Chat App',
    category: 'tools',
    featured: false,
    image: repoCard('Whatsapp_Clone'),
    clientOrContext: 'Learning project',
    year: '2024',
    summary: 'A WhatsApp-style chat app for React Native with real-time messaging.',
    challenge: 'Learn how authentication, a real-time database and file storage fit together in a mobile app.',
    solution: 'Integrated Firebase Authentication, Firestore listeners and Cloud Storage with React Native screens.',
    metrics: [
      { label: 'Platform', value: 'Mobile' },
      { label: 'Backend', value: 'Firebase' }
    ],
    technologies: ['React Native', 'Firebase', 'Firestore', 'JavaScript'],
    githubUrl: 'https://github.com/Ravinduyas/Whatsapp_Clone'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Freelance Full-Stack Developer',
    company: 'Ravindu Creator',
    location: 'Sri Lanka (Remote)',
    achievements: [
      'Build websites and booking systems for tourism businesses in Weligama — surf camps, hostels, coliving spaces and rentals.',
      'Shipped Skyle POS, an offline Windows point-of-sale app with an embedded database and one-click installer.',
      'Set up automated deploys on GitHub Pages, Vercel and AWS Amplify, plus SEO and Search Console tooling for client sites.'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'Electron']
  },
  {
    period: '2023 — 2024',
    role: 'Software Engineering Student',
    company: 'IJSE (Institute of Software Engineering)',
    location: 'Sri Lanka',
    achievements: [
      'Built Java and Java EE systems including a POS and a hostel management system.',
      'Worked with the MERN stack, Bootstrap front ends, microservices and Python automation.'
    ],
    technologies: ['Java', 'Java EE', 'JavaScript', 'MySQL', 'Python', 'Bootstrap']
  }
];
