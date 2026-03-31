import profilePhoto from '../assets/profile/jamshid-avatar.svg';
import { Locale } from '../types';

export type ResumeContactIcon = 'mail' | 'phone' | 'send' | 'map-pin' | 'globe' | 'github';
export type ResumeSkillIcon = 'layout-grid' | 'server-cog' | 'database' | 'wrench';

type ResumeContactItem = {
  label: string;
  value: string;
  href: string;
  icon: ResumeContactIcon;
};

type ResumeHighlight = {
  title: string;
  text: string;
};

type ResumeFact = {
  label: string;
  value: string;
  detail: string;
};

type ResumeSkillGroup = {
  title: string;
  description: string;
  icon: ResumeSkillIcon;
  accent: string;
  skills: string[];
};

type ResumeProject = {
  title: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  accent: string;
};

type ResumeLocaleContent = {
  seo: {
    title: string;
    description: string;
  };
  profile: {
    name: string;
    role: string;
    tagline: string;
    summary: string;
    city: string;
    country: string;
    phone: string;
    email: string;
    telegram: string;
    portfolio: string;
    github: string;
    photo: string;
  };
  hero: {
    eyebrow: string;
    availability: string;
    printHint: string;
    badges: string[];
    ctas: {
      download: string;
      contact: string;
      portfolio: string;
      github: string;
    };
    quickFacts: ResumeFact[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    items: ResumeContactItem[];
  };
  summary: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: ResumeHighlight[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    items: ResumeSkillGroup[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    items: ResumeProject[];
  };
  education: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      institution: string;
      direction: string;
      detail: string;
    }>;
  };
  languages: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  footer: {
    title: string;
    description: string;
    contactLabel: string;
  };
};

const profile = {
  name: 'Jalolov Jamshid',
  role: 'Frontend & Backend Developer',
  tagline:
    "Modern, responsive va interaktiv web ilovalar yaratishga ixtisoslashgan Frontend & Backend Developer.",
  summary:
    "Modern, responsive va interaktiv web ilovalar yaratishga ixtisoslashgan Frontend & Backend Developer. React, TypeScript, TailwindCSS, Python, FastAPI va PostgreSQL bilan ishlayman. Frontend UI, backend API va database integratsiyasini birgalikda qurishga qiziqaman. Ta'limiy platformalar, web o'yinlar va zamonaviy full-stack loyihalar yaratishni yaxshi ko'raman.",
  city: 'Bukhara',
  country: "O'zbekiston",
  phone: '+998942884884',
  email: 'jamshidjalolov6767@gmail.com',
  telegram: 'https://t.me/JaLoLoV_005',
  portfolio: 'https://portfolio-kappa-three-537gquwsz7.vercel.app/',
  github: 'https://github.com/Jamshidjalolov',
  photo: profilePhoto,
};

const badges = ['React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'PostgreSQL'];

const skillItems: ResumeSkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Interface architecture, component systems, and responsive product experience.',
    icon: 'layout-grid',
    accent: '#67e8f9',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'TailwindCSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    description: 'API design, endpoint structure, and practical server-side logic.',
    icon: 'server-cog',
    accent: '#60a5fa',
    skills: ['Python', 'FastAPI', 'REST API'],
  },
  {
    title: 'Database',
    description: 'Data storage and integration flow designed for clarity and maintainability.',
    icon: 'database',
    accent: '#2dd4bf',
    skills: ['PostgreSQL'],
  },
  {
    title: 'Tools',
    description: 'Version control, collaboration flow, and responsive delivery quality.',
    icon: 'wrench',
    accent: '#a78bfa',
    skills: ['Git', 'GitHub', 'Responsive Design'],
  },
];

const projectItems: ResumeProject[] = [
  {
    title: 'Educational Web Game Platform',
    category: 'Education Product',
    description:
      "O'quvchilar uchun interaktiv ta'limiy web o'yinlar platformasi. Quiz, puzzle, test va o'rganishga yo'naltirilgan o'yinlar ishlab chiqilgan.",
    features: ['Interactive educational games', 'Premium UI', 'Student-friendly design', 'Responsive layout'],
    stack: ['React', 'TypeScript', 'TailwindCSS'],
    accent: '#67e8f9',
  },
  {
    title: 'Task Board / Kanban App',
    category: 'Productivity',
    description:
      'React asosida drag-and-drop task management tizimi. Task yaratish, tahrirlash, status o\'zgartirish va boshqarish imkoniyatlari mavjud.',
    features: ['Drag and drop', 'Task status management', 'Responsive UI', 'Clean component structure'],
    stack: ['React', 'TypeScript', 'Bootstrap', 'API Integration'],
    accent: '#60a5fa',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Personal Brand',
    description:
      "Zamonaviy portfolio sayt. Loyihalar, ko'nikmalar va kontaktlar professional ko'rinishda taqdim etilgan.",
    features: ['Premium design', 'Smooth animations', 'Responsive layout', 'Personal branding'],
    stack: ['React', 'Vite', 'TailwindCSS'],
    accent: '#a78bfa',
  },
  {
    title: 'FastAPI Backend API System',
    category: 'Backend System',
    description:
      "Python va FastAPI yordamida tezkor backend API yaratish, frontend bilan integratsiya qilish va ma'lumotlarni PostgreSQL bazasida saqlash uchun ishlab chiqilgan backend loyiha.",
    features: ['Fast REST API', 'CRUD operations', 'Frontend integration', 'Structured backend architecture'],
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    accent: '#2dd4bf',
  },
];

const educationItems = [
  {
    institution: 'Osiyo Xalqaro Universiteti',
    direction: 'Kompyuter ilimlari va dasturlash texnologiyalari',
    detail:
      "Dasturlash, web texnologiyalar va amaliy tizim qurish bo'yicha tayanch bilimlarni rivojlantirishga qaratilgan ta'lim yo'nalishi.",
  },
];

const languageItems = ["O'zbek tili", 'Rus tili', 'Ingliz tili'];

const quickFactsUz: ResumeFact[] = [
  {
    label: 'Core stack',
    value: 'React, TypeScript, FastAPI, PostgreSQL',
    detail: 'Frontend UI, backend API va database integratsiyasini bir butun mahsulot sifatida quraman.',
  },
  {
    label: 'Fokus',
    value: "Ta'limiy platformalar, interaktiv mahsulotlar, full-stack ilovalar",
    detail: "Tez, aniq va recruiter uchun tushunarli mahsulot tajribasiga e'tibor beraman.",
  },
  {
    label: 'Lokatsiya',
    value: "Bukhara, O'zbekiston",
    detail: 'Masofaviy hamkorlik, freelance va product yo\'nalishidagi ishlar uchun tayyorman.',
  },
];

const quickFactsEn: ResumeFact[] = [
  {
    label: 'Core stack',
    value: 'React, TypeScript, FastAPI, PostgreSQL',
    detail: 'I build frontend UI, backend APIs, and database integration as one connected product experience.',
  },
  {
    label: 'Focus',
    value: 'Educational products, interactive experiences, full-stack apps',
    detail: 'I care about clean execution, smooth interfaces, and recruiter-friendly product clarity.',
  },
  {
    label: 'Location',
    value: 'Bukhara, Uzbekistan',
    detail: 'Available for remote collaboration, freelance work, and product-focused opportunities.',
  },
];

const summaryHighlightsUz: ResumeHighlight[] = [
  {
    title: 'Frontend UI Systems',
    text: 'React, TypeScript va TailwindCSS bilan kuchli hierarchy, responsive layout va premium interactionlarga e\'tibor beraman.',
  },
  {
    title: 'Backend API Delivery',
    text: 'FastAPI yordamida tezkor, tushunarli va frontend bilan yaxshi integratsiya qilinadigan REST API lar yarataman.',
  },
  {
    title: 'Data & Integration',
    text: "PostgreSQL, CRUD oqimlari va mahsulotga mos ma'lumot arxitekturasi bilan ishlashni yoqtiraman.",
  },
];

const summaryHighlightsEn: ResumeHighlight[] = [
  {
    title: 'Frontend UI Systems',
    text: 'I work with React, TypeScript, and TailwindCSS to build strong hierarchy, responsive layouts, and premium interactions.',
  },
  {
    title: 'Backend API Delivery',
    text: 'I build structured FastAPI services and practical REST API flows that integrate cleanly with the frontend layer.',
  },
  {
    title: 'Data & Integration',
    text: 'I enjoy working with PostgreSQL, CRUD flows, and maintainable data models that support real product usage.',
  },
];

export const resumeContent: Record<Locale, ResumeLocaleContent> = {
  uz: {
    seo: {
      title: 'Jalolov Jamshid | Resume',
      description:
        "Jalolov Jamshidning premium resume sahifasi. Frontend va backend ishlab chiqish, React, TypeScript, FastAPI va PostgreSQL yo'nalishidagi tajriba, ko'nikmalar va loyihalar.",
    },
    profile,
    hero: {
      eyebrow: 'Premium Resume / CV',
      availability: 'Full-stack web loyihalar uchun ochiq',
      printHint: "Yuklab olish tugmasi resume'ni to'g'ridan-to'g'ri PDF fayl sifatida saqlaydi.",
      badges,
      ctas: {
        download: 'Download Resume',
        contact: "Bog'lanish",
        portfolio: "Portfolio ko'rish",
        github: 'GitHub',
      },
      quickFacts: quickFactsUz,
    },
    contact: {
      eyebrow: 'Aloqa',
      title: 'Bir necha soniyada asosiy kontakt nuqtalari.',
      description:
        "Recruiter yoki mijoz uchun kerakli aloqa ma'lumotlari bir joyda jamlangan. Email, Telegram, GitHub va portfolio havolalari to'g'ridan-to'g'ri ochiladi.",
      items: [
        { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
        { label: 'Telefon', value: profile.phone, href: `tel:${profile.phone}`, icon: 'phone' },
        { label: 'Telegram', value: '@JaLoLoV_005', href: profile.telegram, icon: 'send' },
        { label: 'GitHub', value: 'github.com/Jamshidjalolov', href: profile.github, icon: 'github' },
        { label: 'Portfolio', value: 'portfolio-kappa-three-537gquwsz7.vercel.app', href: profile.portfolio, icon: 'globe' },
        { label: 'Manzil', value: `${profile.city}, ${profile.country}`, href: 'https://maps.google.com/?q=Bukhara', icon: 'map-pin' },
      ],
    },
    summary: {
      eyebrow: 'Professional Summary',
      title: "Frontend va backend qatlamlarini birga o'ylab quradigan dasturchi.",
      description:
        "Maqsadim faqat chiroyli UI emas. Men foydalanuvchi tajribasi, API oqimi va database integratsiyasini yagona mahsulot sifatida loyihalashga harakat qilaman.",
      highlights: summaryHighlightsUz,
    },
    skills: {
      eyebrow: 'Skills',
      title: "Texnologiyalar premium vizual kartalar ko'rinishida.",
      description:
        "Har bir yo'nalish uchun alohida karta berilgan, shuning uchun resume bir qarashda skan qilinadi va texnik stack tez tushuniladi.",
      items: skillItems,
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Tanlangan ishlar recruiter uchun tez skan qilinadigan formatda.',
      description:
        "Har bir loyiha uchun asosiy g'oya, funksiyalar va stack alohida ko'rsatilgan. Bu bo'lim Jalolov Jamshidning mahsulot fikrlashini va texnik qamrovini ko'rsatadi.",
      cta: "Asosiy portfolio'ga o'tish",
      items: projectItems,
    },
    education: {
      eyebrow: 'Education',
      title: "Toza timeline uslubida akademik yo'nalish.",
      description:
        "Ta'lim qismi minimal, aniq va professional ko'rinishda berildi. Asosiy urg'u dasturlash yo'nalishi va amaliy full-stack qiziqishiga qaratilgan.",
      items: educationItems,
    },
    languages: {
      eyebrow: 'Languages',
      title: "Muloqot va o'rganish uchun ishlatiladigan tillar.",
      description:
        "Til bo'limi soddalashtirilgan ko'rinishda berilgan, shuning uchun recruiter resume ichida keraksiz yuklama sezmaydi.",
      items: languageItems,
    },
    footer: {
      title: "Let's build a modern web product.",
      description:
        "Frontend va backend yo'nalishida toza arxitektura, premium UI va amaliy product thinking bilan ishlayman.",
      contactLabel: "To'g'ridan-to'g'ri aloqa",
    },
  },
  en: {
    seo: {
      title: 'Jalolov Jamshid | Resume',
      description:
        'Premium resume page for Jalolov Jamshid. Frontend and backend developer focused on React, TypeScript, TailwindCSS, FastAPI, and PostgreSQL.',
    },
    profile,
    hero: {
      eyebrow: 'Premium Resume / CV',
      availability: 'Open for full-stack web projects',
      printHint: 'The download button saves the resume directly as a PDF file.',
      badges,
      ctas: {
        download: 'Download Resume',
        contact: 'Contact Me',
        portfolio: 'View Portfolio',
        github: 'GitHub',
      },
      quickFacts: quickFactsEn,
    },
    contact: {
      eyebrow: 'Contact',
      title: 'The main contact points are easy to scan in seconds.',
      description:
        'Email, Telegram, GitHub, portfolio, and phone details are grouped into one quick-access bar for recruiters and clients.',
      items: [
        { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
        { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: 'phone' },
        { label: 'Telegram', value: '@JaLoLoV_005', href: profile.telegram, icon: 'send' },
        { label: 'GitHub', value: 'github.com/Jamshidjalolov', href: profile.github, icon: 'github' },
        { label: 'Portfolio', value: 'portfolio-kappa-three-537gquwsz7.vercel.app', href: profile.portfolio, icon: 'globe' },
        { label: 'Location', value: `${profile.city}, ${profile.country}`, href: 'https://maps.google.com/?q=Bukhara', icon: 'map-pin' },
      ],
    },
    summary: {
      eyebrow: 'Professional Summary',
      title: 'A developer who thinks about the interface and the system together.',
      description:
        'My goal is not just a polished UI. I focus on the whole product flow, from user-facing interaction to API design and database integration.',
      highlights: summaryHighlightsEn,
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technology groups presented in premium visual cards.',
      description:
        'Each area is separated into its own card so the resume stays highly scannable and the technical stack is understood immediately.',
      items: skillItems,
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work shown in a recruiter-friendly format.',
      description:
        'Each project card highlights the idea, core features, and stack so the work can be understood quickly without losing visual polish.',
      cta: 'Open main portfolio',
      items: projectItems,
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic direction presented in a clean timeline style.',
      description:
        'The education section stays minimal and professional, with emphasis on programming direction and full-stack interest.',
      items: [
        {
          institution: educationItems[0].institution,
          direction: 'Computer Science and Programming Technologies',
          detail: 'An academic direction focused on programming foundations, web technologies, and practical system-building skills.',
        },
      ],
    },
    languages: {
      eyebrow: 'Languages',
      title: 'Languages used for communication and learning.',
      description:
        'This section stays intentionally lightweight so the resume remains focused and easy to scan.',
      items: ['Uzbek', 'Russian', 'English'],
    },
    footer: {
      title: "Let's build a modern web product.",
      description:
        'I work across frontend and backend with clean architecture, premium UI execution, and practical product thinking.',
      contactLabel: 'Direct contact',
    },
  },
};
