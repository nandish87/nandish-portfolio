export interface NavItem {
  label: string;
  href: string;
}

export interface BulletPoint {
  id: number;
  text: string;
  iconName: 'Briefcase' | 'Globe' | 'GraduationCap' | 'Sparkles' | 'Zap' | 'Users';
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  link: string;
  images: [string, string, string]; // [left-top, left-bottom, right-full]
}

export interface TechStackItem {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: 'Next' | 'Three' | 'Python' | 'Cursor' | 'Claude' | 'Antigravity' | 'Figma' | 'Node' | 'Tailwind';
}

export interface SocialLink {
  label: string;
  url: string;
  iconName: 'Linkedin' | 'Instagram' | 'Github' | 'Mail';
}

export const PERSONAL_DETAILS = {
  fullName: 'Y Nandish',
  displayName: 'Nandish',
  role: 'Web Developer at Monolith Agency',
  company: 'Monolith Agency',
  companyUrl: 'https://getmonolith.in',
  interests: 'full-stack web development, agentic AI, high-performance UI engineering',
  email: 'ynandish87@gmail.com',
  phone: '+91 8143102696',
  links: {
    linkedin: 'https://www.linkedin.com/in/nandish-y-238987357',
    instagram: 'https://www.instagram.com/nandish_yalapala/',
    github: 'https://github.com/nandish87',
  },
  heroTagline: 'web developer at monolith agency building modern, smart and unforgettable web experiences with ai',
  aboutParagraph: "I'm a Web Developer at Monolith Agency (getmonolith.in) and a B.Tech student in Artificial Intelligence. I have contributed to production platforms including Monolith and Glocal Research Hub (glocalresearchub.com). As a quick learner passionate about AI-assisted engineering, I turn ambitious ideas into clean, fast, and visually stunning web systems. Let's build something incredible together!",
  aboutBullets: [
    {
      id: 1,
      text: 'Web Developer at Monolith Agency (getmonolith.in)',
      iconName: 'Briefcase',
    },
    {
      id: 2,
      text: 'Contributed to glocalresearchub.com & getmonolith.in',
      iconName: 'Globe',
    },
    {
      id: 3,
      text: 'Pursuing B.Tech in Artificial Intelligence',
      iconName: 'GraduationCap',
    },
    {
      id: 4,
      text: 'Builds modern web systems using AI-assisted engineering',
      iconName: 'Sparkles',
    },
  ] as BulletPoint[],
  copyrightYear: 2026,
};

export const TECH_STACK: TechStackItem[] = [
  {
    id: 'next',
    name: 'Next.js',
    category: 'Framework',
    description: 'Enterprise Full-Stack Platforms',
    iconName: 'Next',
  },
  {
    id: 'three',
    name: 'Three.js',
    category: '3D Graphics',
    description: '3D WebGL Worlds & Math',
    iconName: 'Three',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'AI & Data',
    description: 'AI Agents, Automation & Reverse Engineering',
    iconName: 'Python',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'AI Tooling',
    description: 'AI Pair Programming & Architecture',
    iconName: 'Cursor',
  },
  {
    id: 'claude',
    name: 'Claude Code',
    category: 'Agentic AI',
    description: 'Autonomous AI Systems Engineering',
    iconName: 'Claude',
  },
  {
    id: 'antigravity',
    name: 'Google Antigravity',
    category: 'Agentic Platform',
    description: 'Advanced Agentic AI Coding & Systems',
    iconName: 'Antigravity',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'UI/UX Design',
    description: 'Product & Interface Design',
    iconName: 'Figma',
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'Runtime & APIs',
    description: 'High-Throughput APIs & Services',
    iconName: 'Node',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Styling',
    description: 'High-Fidelity Modern Styling',
    iconName: 'Tailwind',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const IMAGES = {
  // Hero portrait
  portrait: '/assets/portrait.png',

  // About section corner 3D floating decorations
  aboutDecorations: {
    moon: '/assets/about/moon.png',
    object: '/assets/about/object.png',
    lego: '/assets/about/lego.png',
    group: '/assets/about/group.png',
  },

  // Marquee section local preview images (21 total local gifs)
  marqueeRow1: [
    '/assets/marquee/01.gif',
    '/assets/marquee/02.gif',
    '/assets/marquee/03.gif',
    '/assets/marquee/04.gif',
    '/assets/marquee/05.gif',
    '/assets/marquee/06.gif',
    '/assets/marquee/07.gif',
    '/assets/marquee/08.gif',
    '/assets/marquee/09.gif',
    '/assets/marquee/10.gif',
    '/assets/marquee/11.gif',
  ],
  marqueeRow2: [
    '/assets/marquee/12.gif',
    '/assets/marquee/13.gif',
    '/assets/marquee/14.gif',
    '/assets/marquee/15.gif',
    '/assets/marquee/16.gif',
    '/assets/marquee/17.gif',
    '/assets/marquee/18.gif',
    '/assets/marquee/19.gif',
    '/assets/marquee/20.gif',
    '/assets/marquee/21.gif',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Web Development',
    description:
      'Building fast, responsive and accessible websites and web apps with React, Next.js, TypeScript and Tailwind CSS.',
  },
  {
    number: '02',
    name: 'AI-Assisted Development',
    description:
      'Using agentic AI tools and Antigravity to prototype, architect, and ship production projects faster without compromising on code quality.',
  },
  {
    number: '03',
    name: 'UI / UX Design',
    description:
      'Designing clean, modern interfaces in Figma with obsessive attention to layout, typography, animations and user experience.',
  },
  {
    number: '04',
    name: 'Landing Pages & Agency Platforms',
    description:
      'Crafting eye-catching, conversion-focused landing pages, high-converting agency portals and personal portfolios.',
  },
  {
    number: '05',
    name: 'AI Integration & Chatbots',
    description:
      'Adding intelligent features, 24/7 autonomous receptionists, and AI-powered workflows to client and enterprise platforms.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    number: '01',
    name: 'Monolith',
    category: 'Agency',
    link: 'https://getmonolith.in',
    images: [
      '/assets/projects/p1-1.jpg', // Monolith Mission section
      '/assets/projects/p1-2.jpg', // Monolith Contact section
      '/assets/projects/p1-3.jpg', // Monolith Hero Banner with AI orb
    ],
  },
  {
    id: 'project-2',
    number: '02',
    name: 'Personal Portfolio',
    category: 'Personal',
    link: 'https://github.com/nandish87',
    images: [
      '/assets/projects/p2-1.jpg', // In progress / coming soon placeholder
      '/assets/projects/p2-2.jpg',
      '/assets/projects/p2-3.jpg',
    ],
  },
  {
    id: 'project-3',
    number: '03',
    name: 'Glocal Research Hub',
    category: 'Client',
    link: 'https://glocalresearchub.com',
    images: [
      '/assets/projects/p3-1.jpg', // GRH Skyline section
      '/assets/projects/p3-2.jpg', // GRH Inquiries & Knowledge section
      '/assets/projects/p3-3.jpg', // GRH Golden Compass & Ambition banner
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: PERSONAL_DETAILS.links.linkedin,
    iconName: 'Linkedin',
  },
  {
    label: 'Instagram',
    url: PERSONAL_DETAILS.links.instagram,
    iconName: 'Instagram',
  },
  {
    label: 'GitHub',
    url: PERSONAL_DETAILS.links.github,
    iconName: 'Github',
  },
  {
    label: 'Email',
    url: `mailto:${PERSONAL_DETAILS.email}`,
    iconName: 'Mail',
  },
];
