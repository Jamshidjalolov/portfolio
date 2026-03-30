export type Locale = 'uz' | 'en';

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialIconName = 'github' | 'linkedin' | 'telegram' | 'mail';

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconName;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type SkillIconName = 'code2' | 'sparkles' | 'monitor-cog' | 'workflow';

export type SkillCategory = {
  title: string;
  description: string;
  icon: SkillIconName;
  accent: string;
  skills: string[];
};

export type ProjectCategory = 'Product' | 'Dashboard' | 'Commerce' | 'Brand' | 'Game';
export type ProjectFilter = 'All' | ProjectCategory;

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  previewLabel: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  accent: string;
  metrics: string[];
};

export type ServiceIconName =
  | 'layout-dashboard'
  | 'monitor-smartphone'
  | 'pen-tool'
  | 'rocket';

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
  accent: string;
};

export type JourneyItem = {
  year: string;
  title: string;
  company: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ContactIconName = 'mail' | 'map-pin' | 'send' | 'phone';

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: ContactIconName;
};
