import {
  ContactMethod,
  Locale,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  Stat,
} from '../types';
import atlasPreview from '../assets/projects/atlas-preview.svg';
import jamshidAvatar from '../assets/profile/jamshid-avatar.svg';
import kursTizimiPreview from '../assets/projects/kurs-tizimi-preview.svg';
import medicalPreview from '../assets/projects/medical-preview.jpg';
import monarchPreview from '../assets/projects/monarch-preview.svg';
import nexaPreview from '../assets/projects/nexa-preview.svg';
import webGamePreview from '../assets/projects/web-game-preview.svg';

type ProfileContent = {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  location: string;
  availability: string;
  email: string;
  telegram: string;
  phone: string;
  photo: string;
};

type HeroContent = {
  headline: string;
  primaryCta: string;
  secondaryCta: string;
  focusLabel: string;
  focusText: string;
  approachLabel: string;
  approachText: string;
  profileLabel: string;
  onlineLabel: string;
  stackLabel: string;
  stackText: string;
  resultLabel: string;
  resultText: string;
  quickContactLabels: {
    email: string;
    telegram: string;
    phone: string;
  };
};

type AboutContent = {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  highlights: string[];
};

type SkillsContent = {
  eyebrow: string;
  title: string;
  description: string;
  categoryLabel: string;
  categories: SkillCategory[];
};

type ProjectsContent = {
  eyebrow: string;
  title: string;
  description: string;
  previewLabel: string;
  demoLabel: string;
  items: Project[];
};

type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  socialLabel: string;
  formEyebrow: string;
  formTitle: string;
  replyLabel: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  helperText: string;
  submitLabel: string;
  sendingText: string;
  successText: string;
  errorText: string;
  methods: ContactMethod[];
};

type FooterContent = {
  text: string;
  rights: string;
};

type PortfolioLocaleContent = {
  profile: ProfileContent;
  navigation: NavItem[];
  socialLinks: SocialLink[];
  heroPills: string[];
  hero: HeroContent;
  stats: Stat[];
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  contact: ContactContent;
  footer: FooterContent;
  labels: {
    contactCta: string;
    resumeCta: string;
  };
};

const identity = {
  name: 'Jalolov Jamshid',
  email: 'jamshidjalolov6767@gmail.com',
  telegram: 'https://t.me/JaLoLoV_005',
  phone: '+998942884884',
  photo: jamshidAvatar,
  github: 'https://github.com/Jamshidjalolov',
};

const socialLinksBase = {
  github: identity.github,
  telegram: identity.telegram,
  email: `mailto:${identity.email}`,
};

export const portfolioContent: Record<Locale, PortfolioLocaleContent> = {
  uz: {
    profile: {
      name: identity.name,
      role: 'Frontend va Backend Dasturchi',
      tagline: "Men frontend va backend yo'nalishida zamonaviy, tezkor va ishonchli saytlar hamda web ilovalar yarataman.",
      intro:
        "Har bir loyihada toza dizayn, mustahkam tizim va qulay foydalanuvchi tajribasiga e'tibor beraman.",
      location: "Buxoro, O'zbekiston",
      availability: 'Yangi loyihalar uchun ochiq',
      email: identity.email,
      telegram: identity.telegram,
      phone: identity.phone,
      photo: identity.photo,
    },
    navigation: [
      { label: 'Bosh', href: '#home' },
      { label: 'Haqimda', href: '#about' },
      { label: 'Stack', href: '#skills' },
      { label: 'Loyihalar', href: '#projects' },
      { label: 'Aloqa', href: '#contact' },
    ],
    socialLinks: [
      { label: 'GitHub', href: socialLinksBase.github, icon: 'github' },
      { label: 'Telegram', href: socialLinksBase.telegram, icon: 'telegram' },
      { label: 'Email', href: socialLinksBase.email, icon: 'mail' },
    ],
    heroPills: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    hero: {
      headline: "Frontend va backend bilan aniq, tez va qulay saytlar hamda web ilovalar yarataman.",
      primaryCta: "Loyihalarni ko'rish",
      secondaryCta: "Bog'lanish",
      focusLabel: 'Fokus',
      focusText: 'Portfolio, landing page va web ilovalar',
      approachLabel: 'Yondashuv',
      approachText: "Tartibli UI, silliq animatsiya va kuchli responsive tuzilma",
      profileLabel: 'Profil',
      onlineLabel: 'Online',
      stackLabel: 'Asosiy stack',
      stackText: 'React, TypeScript, FastAPI, PostgreSQL',
      resultLabel: 'Yo\'nalish',
      resultText: 'Toza interfeys, API integratsiya va foydali foydalanuvchi oqimi',
      quickContactLabels: {
        email: 'Email',
        telegram: 'Telegram',
        phone: 'Telefon',
      },
    },
    stats: [
      {
        value: '3+',
        label: 'Yil tajriba',
        detail: "Frontend, admin panel va amaliy web ilovalar bilan ishlash tajribasi.",
      },
      {
        value: '20+',
        label: 'Ishlangan loyiha',
        detail: "Portfolio, biznes sayt, dashboard va ichki tizimlar yo'nalishida ishlangan loyihalar.",
      },
      {
        value: '24/7',
        label: 'Moslashuvchan aloqa',
        detail: 'Telegram, email va telefon orqali tez bog\'lanish imkoniyati mavjud.',
      },
    ],
    about: {
      eyebrow: 'Haqimda',
      title: "Interfeys va tizimni birgalikda o'ylab quraman.",
      description:
        "Mening yondashuvim chiroyli ko'rinish bilan tugamaydi. Men har bir loyiha uchun interfeys, foydalanuvchi oqimi va ichki tizimni bitta yaxlit mahsulot sifatida qurishga harakat qilaman.",
      paragraphs: [
        "Frontend tomonida toza komponent arxitekturasi, kuchli tipografiya va har bir ekranda aniq ishlaydigan responsiv layoutlarga e'tibor beraman.",
        "Backend va integratsiya tomonida esa API, ma'lumot oqimi, forma ishlovi va amaliy servis logikasini sodda, tushunarli va barqaror tarzda yo'lga qo'yaman.",
      ],
      highlights: [
        'One-page portfolio va landing page lar',
        'Dashboard va admin interfeyslar',
        'API integratsiya va forma ishlov berish',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: "Ishlatadigan texnologiyalarim va ish uslubim.",
      description:
        "Stack tanlashda maqsadim ko'proq kutubxona yig'ish emas, balki loyiha uchun eng mos va sodda yechimni tanlash.",
      categoryLabel: "Yo'nalish",
      categories: [
        {
          title: 'Frontend',
          description: "Interfeys, komponent tizimi va responsiv layoutlar men ishlaydigan asosiy qatlam.",
          icon: 'code2',
          accent: '#67e8f9',
          skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
        },
        {
          title: 'Backend',
          description: "API bilan ishlash, ma'lumot yuborish va server logikasini ulash bo'yicha amaliy yondashuv.",
          icon: 'monitor-cog',
          accent: '#2dd4bf',
          skills: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'REST API'],
        },
        {
          title: 'UI Tizimi',
          description: "Tartibli spacing, komponent qayta ishlatish va har ekranda aniq ko'rinish beradigan tizim.",
          icon: 'sparkles',
          accent: '#f5b75f',
          skills: ['Figma', 'Typography', 'Motion', 'Responsive UX', 'Visual Hierarchy'],
        },
        {
          title: 'Ish Jarayoni',
          description: "Kod sifati, tez topshirish va tushunarli strukturaga doimiy e'tibor qarataman.",
          icon: 'workflow',
          accent: '#a78bfa',
          skills: ['Git', 'Vite', 'Clean UI', 'Component Design', 'Communication'],
        },
      ],
    },
    projects: {
      eyebrow: 'Loyihalar',
      title: "Tanlangan ishlardan qisqa namunalar.",
      description:
        "Quyidagi ishlar turli yo'nalishdagi sahifalar va tizimlar uchun qanday yechimlar qurishimni ko'rsatadi.",
      previewLabel: "Ko'rinish",
      demoLabel: 'Demo',
      items: [
        {
          title: 'Kurs Tizimi',
          description:
            "Online kurs platformasi uchun landing page va foydalanuvchi oqimi. Login, register, kurslar ro'yxati va course detail sahifalari bitta tizimda ishlangan.",
          category: 'Product',
          previewLabel: "Kurslar uchun ta'lim platformasi",
          image: kursTizimiPreview,
          tech: ['React', 'React Router', 'Tailwind CSS', 'Responsive UI'],
          liveUrl: 'https://kurs-tizimi.vercel.app/',
          accent: '#3cc7e8',
          metrics: ["Login va register oqimi", "Kurs katalogi va detail sahifa"],
        },
        {
          title: 'Lotin tili va tibbiy terminologiya',
          description:
            "Lotin tili va tibbiy terminologiya bo'yicha o'quv platformasi. Mavzular, testlar, sertifikat imtihoni va admin boshqaruvi bitta oqimda jamlangan.",
          category: 'Product',
          previewLabel: "Sertifikatli ta'lim platformasi",
          image: medicalPreview,
          tech: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
          liveUrl: 'https://medical-iota-wheat.vercel.app/',
          accent: '#0c8b9b',
          metrics: ['Mavzular va quiz oqimi', 'Sertifikat hamda admin panel'],
        },
        {
          title: 'Web Game',
          description:
            "Brauzerda ishlaydigan interaktiv o'yin sahifasi. Harakat, tezkor javob va foydalanuvchi bilan bevosita interaksiya asosida qurilgan loyiha.",
          category: 'Game',
          previewLabel: "Interaktiv web o'yin",
          image: webGamePreview,
          tech: ['JavaScript', 'HTML', 'CSS', 'Responsive UI'],
          liveUrl: 'https://web-game-jade-three.vercel.app',
          githubUrl: 'https://github.com/Jamshidjalolov/web-game',
          accent: '#38bdf8',
          metrics: ["Interaktiv o'yin oqimi", 'Tez va yengil ishlash'],
        },
        {
          title: 'Monarch Studio',
          description:
            "Studio brendi uchun tayyorlangan sahifa. Matn, kompozitsiya va harakat bir ritmda ishlaydi.",
          category: 'Brand',
          previewLabel: 'Studio landing sahifasi',
          image: monarchPreview,
          tech: ['React', 'Tailwind', 'Motion Design', 'Figma'],
          liveUrl: 'https://example.com/monarch',
          githubUrl: 'https://github.com/Jamshidjalolov/monarch-studio',
          accent: '#f59e0b',
          metrics: ['Matn ritmi', 'Tartibli section flow'],
        },
        {
          title: 'Atlas Commerce',
          description:
            "Mahsulot vitrinasi va checkout oqimi uchun mobilga mos e-commerce interfeysi.",
          category: 'Commerce',
          previewLabel: "Mahsulot va checkout oqimi",
          image: atlasPreview,
          tech: ['React', 'TypeScript', 'Responsive UI', 'Tailwind'],
          liveUrl: 'https://example.com/atlas',
          githubUrl: 'https://github.com/Jamshidjalolov/atlas-commerce',
          accent: '#2dd4bf',
          metrics: ['Mobil-first katalog', 'Silliq checkout'],
        },
        {
          title: 'Nexa Workspace',
          description:
            "SaaS mahsuloti uchun yaratilgan launch sahifa va ilova shell tuzilmasi.",
          category: 'Product',
          previewLabel: 'SaaS launch sahifa',
          image: nexaPreview,
          tech: ['React', 'TypeScript', 'Tailwind', 'Lucide'],
          liveUrl: 'https://example.com/nexa',
          githubUrl: 'https://github.com/Jamshidjalolov/nexa-workspace',
          accent: '#a78bfa',
          metrics: ['CTA oqimi', 'Soddalashtirilgan UI'],
        },
      ],
    },
    contact: {
      eyebrow: 'Aloqa',
      title: "Loyiha bo'yicha yozishingiz mumkin.",
      description:
        "Portfolio, biznes sayt yoki web ilova bo'lsa, qulay kanal orqali bog'laning.",
      socialLabel: 'Ijtimoiy havolalar',
      formEyebrow: 'Xabar',
      formTitle: "Qisqa ma'lumot qoldiring",
      replyLabel: 'Javob odatda tez beriladi',
      nameLabel: 'Ism',
      namePlaceholder: 'Ismingiz',
      emailLabel: 'Email',
      emailPlaceholder: 'emailingiz@gmail.com',
      messageLabel: 'Xabar',
      messagePlaceholder: "Loyihangiz haqida qisqacha yozing.",
      helperText: "Xabar yuborilganda u to'g'ridan-to'g'ri mening emailimga yuboriladi.",
      submitLabel: 'Xabar yuborish',
      sendingText: 'Yuborilmoqda...',
      successText: 'Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog\'lanaman.',
      errorText: "Xabar yuborilmadi. Keyinroq yana urinib ko'ring yoki to'g'ridan-to'g'ri email/Telegram orqali yozing.",
      methods: [
        {
          label: 'Email',
          value: identity.email,
          href: `mailto:${identity.email}`,
          icon: 'mail',
        },
        {
          label: 'Telegram',
          value: '@JaLoLoV_005',
          href: identity.telegram,
          icon: 'send',
        },
        {
          label: 'Telefon',
          value: identity.phone,
          href: `tel:${identity.phone}`,
          icon: 'phone',
        },
        {
          label: 'Manzil',
          value: "Buxoro, O'zbekiston",
          href: 'https://maps.google.com/?q=Bukhara',
          icon: 'map-pin',
        },
      ],
    },
    footer: {
      text: "Frontend va backend yo'nalishida tez, toza va foydalanuvchiga qulay web mahsulotlar ustida ishlayman.",
      rights: 'Barcha huquqlar himoyalangan.',
    },
    labels: {
      contactCta: "Bog'lanish",
      resumeCta: 'Resume',
    },
  },
  en: {
    profile: {
      name: identity.name,
      role: 'Frontend & Backend Developer',
      tagline: 'I build modern, reliable web products across frontend and backend.',
      intro:
        'I combine clean interface design with solid backend logic to deliver scalable, user-focused, and production-ready digital products.',
      location: 'Bukhara, Uzbekistan',
      availability: 'Open for new projects',
      email: identity.email,
      telegram: identity.telegram,
      phone: identity.phone,
      photo: identity.photo,
    },
    navigation: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Stack', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    socialLinks: [
      { label: 'GitHub', href: socialLinksBase.github, icon: 'github' },
      { label: 'Telegram', href: socialLinksBase.telegram, icon: 'telegram' },
      { label: 'Email', href: socialLinksBase.email, icon: 'mail' },
    ],
    heroPills: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    hero: {
      headline: 'I build clear, fast, and responsive web products across frontend and backend.',
      primaryCta: 'View Projects',
      secondaryCta: 'Contact',
      focusLabel: 'Focus',
      focusText: 'Portfolios, landing pages, and web apps',
      approachLabel: 'Approach',
      approachText: 'Structured UI, smooth motion, and responsive execution',
      profileLabel: 'Profile',
      onlineLabel: 'Available',
      stackLabel: 'Core stack',
      stackText: 'React, TypeScript, FastAPI, PostgreSQL',
      resultLabel: 'Direction',
      resultText: 'Clear interfaces, API integration, and usable product flow',
      quickContactLabels: {
        email: 'Email',
        telegram: 'Telegram',
        phone: 'Phone',
      },
    },
    stats: [
      {
        value: '3+',
        label: 'Years of experience',
        detail: 'Hands-on work across frontend interfaces, admin panels, and practical web products.',
      },
      {
        value: '20+',
        label: 'Projects delivered',
        detail: 'Portfolio sites, business pages, dashboards, and internal product interfaces.',
      },
      {
        value: '24/7',
        label: 'Flexible communication',
        detail: 'Fast contact via Telegram, email, and phone when needed.',
      },
    ],
    about: {
      eyebrow: 'About',
      title: 'I think about interface and system together.',
      description:
        'My process goes beyond surface styling. I approach interface, user flow, and system structure as one connected product experience.',
      paragraphs: [
        'On the frontend side I focus on clean component structure, strong typography, and responsive layouts that stay consistent across screens.',
        'On the backend and integration side I work with APIs, data flow, form handling, and practical service logic that keeps the product stable and easy to maintain.',
      ],
      highlights: [
        'One-page portfolios and landing pages',
        'Dashboards and admin interfaces',
        'API integration and form handling',
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'The tools and workflow I use.',
      description:
        'I do not optimize for the longest tool list. I optimize for a stack that fits the project and stays maintainable.',
      categoryLabel: 'Category',
      categories: [
        {
          title: 'Frontend',
          description: 'UI structure, component systems, and responsive layouts are my main working layer.',
          icon: 'code2',
          accent: '#67e8f9',
          skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
        },
        {
          title: 'Backend',
          description: 'Practical work with APIs, data flow, and lightweight server-side logic.',
          icon: 'monitor-cog',
          accent: '#2dd4bf',
          skills: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'REST API'],
        },
        {
          title: 'UI System',
          description: 'Spacing, reusable patterns, and visual structure that hold together across devices.',
          icon: 'sparkles',
          accent: '#f5b75f',
          skills: ['Figma', 'Typography', 'Motion', 'Responsive UX', 'Visual Hierarchy'],
        },
        {
          title: 'Workflow',
          description: 'Code quality, delivery speed, and understandable structure stay important in every project.',
          icon: 'workflow',
          accent: '#a78bfa',
          skills: ['Git', 'Vite', 'Clean UI', 'Component Design', 'Communication'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work samples.',
      description:
        'These examples show how I approach different product types, from dashboards to business pages and launch sites.',
      previewLabel: 'Preview',
      demoLabel: 'Live Demo',
      items: [
        {
          title: 'Course System',
          description:
            'A course platform landing and user flow with login, registration, course listing, and course detail pages connected into one learning experience.',
          category: 'Product',
          previewLabel: 'Online course platform',
          image: kursTizimiPreview,
          tech: ['React', 'React Router', 'Tailwind CSS', 'Responsive UI'],
          liveUrl: 'https://kurs-tizimi.vercel.app/',
          accent: '#3cc7e8',
          metrics: ['Login and registration flow', 'Course catalog and detail page'],
        },
        {
          title: 'Latin Language and Medical Terminology',
          description:
            'A learning platform for Latin language and medical terminology with structured topics, quizzes, certificate exams, and admin management in one flow.',
          category: 'Product',
          previewLabel: 'Certificate-based learning platform',
          image: medicalPreview,
          tech: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
          liveUrl: 'https://medical-iota-wheat.vercel.app/',
          accent: '#0c8b9b',
          metrics: ['Topics and quiz flow', 'Certificate and admin panel'],
        },
        {
          title: 'Web Game',
          description:
            'An interactive browser-based game built around quick response, simple controls, and direct user interaction.',
          category: 'Game',
          previewLabel: 'Interactive web game',
          image: webGamePreview,
          tech: ['JavaScript', 'HTML', 'CSS', 'Responsive UI'],
          liveUrl: 'https://web-game-jade-three.vercel.app',
          githubUrl: 'https://github.com/Jamshidjalolov/web-game',
          accent: '#38bdf8',
          metrics: ['Interactive gameplay', 'Fast lightweight flow'],
        },
        {
          title: 'Monarch Studio',
          description: 'A studio website built around content rhythm, composition, and controlled motion.',
          category: 'Brand',
          previewLabel: 'Studio landing page',
          image: monarchPreview,
          tech: ['React', 'Tailwind', 'Motion Design', 'Figma'],
          liveUrl: 'https://example.com/monarch',
          githubUrl: 'https://github.com/Jamshidjalolov/monarch-studio',
          accent: '#f59e0b',
          metrics: ['Content rhythm', 'Structured section flow'],
        },
        {
          title: 'Atlas Commerce',
          description: 'A mobile-friendly ecommerce interface focused on catalog browsing and checkout flow.',
          category: 'Commerce',
          previewLabel: 'Catalog and checkout flow',
          image: atlasPreview,
          tech: ['React', 'TypeScript', 'Responsive UI', 'Tailwind'],
          liveUrl: 'https://example.com/atlas',
          githubUrl: 'https://github.com/Jamshidjalolov/atlas-commerce',
          accent: '#2dd4bf',
          metrics: ['Mobile-first catalog', 'Smooth checkout'],
        },
        {
          title: 'Nexa Workspace',
          description: 'A launch site and app shell built for a SaaS-style product presentation.',
          category: 'Product',
          previewLabel: 'SaaS launch page',
          image: nexaPreview,
          tech: ['React', 'TypeScript', 'Tailwind', 'Lucide'],
          liveUrl: 'https://example.com/nexa',
          githubUrl: 'https://github.com/Jamshidjalolov/nexa-workspace',
          accent: '#a78bfa',
          metrics: ['CTA flow', 'Simplified UI'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Reach out about a project.',
      description:
        'If you need a portfolio, business site, or web app, feel free to contact me through the channel that works best for you.',
      socialLabel: 'Social links',
      formEyebrow: 'Message',
      formTitle: 'Leave a short brief',
      replyLabel: 'Replies are usually fast',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me a bit about your project.',
      helperText: 'When submitted, the message is sent directly to my email.',
      submitLabel: 'Send Message',
      sendingText: 'Sending...',
      successText: 'Your message was sent successfully. I will get back to you soon.',
      errorText: 'The message could not be sent. Please try again later or contact me directly by email or Telegram.',
      methods: [
        {
          label: 'Email',
          value: identity.email,
          href: `mailto:${identity.email}`,
          icon: 'mail',
        },
        {
          label: 'Telegram',
          value: '@JaLoLoV_005',
          href: identity.telegram,
          icon: 'send',
        },
        {
          label: 'Phone',
          value: identity.phone,
          href: `tel:${identity.phone}`,
          icon: 'phone',
        },
        {
          label: 'Location',
          value: 'Bukhara, Uzbekistan',
          href: 'https://maps.google.com/?q=Bukhara',
          icon: 'map-pin',
        },
      ],
    },
    footer: {
      text: 'Frontend and backend developer focused on fast, clean, and user-centered web products.',
      rights: 'All rights reserved.',
    },
    labels: {
      contactCta: 'Contact',
      resumeCta: 'Resume',
    },
  },
};
