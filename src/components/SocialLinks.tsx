import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { SocialLink } from '../types';

type SocialLinksProps = {
  links: SocialLink[];
  size?: 'sm' | 'md';
};

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  telegram: Send,
  mail: Mail,
};

function SocialLinks({ links, size = 'md' }: SocialLinksProps) {
  const sizeClasses = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  const buttonClasses =
    size === 'sm'
      ? 'h-9 w-9 rounded-2xl sm:h-10 sm:w-10'
      : 'h-10 w-10 rounded-2xl sm:h-11 sm:w-11';

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        const external = link.href.startsWith('http');

        return (
          <a
            aria-label={link.label}
            className={`group relative inline-flex ${buttonClasses} items-center justify-center overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] text-slate-300 shadow-[0_12px_30px_rgba(4,8,22,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:text-white`}
            href={link.href}
            key={link.label}
            rel={external ? 'noreferrer' : undefined}
            target={external ? '_blank' : undefined}
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.2),transparent_65%)]" />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(103,232,249,0.12),transparent)]" />
            </span>
            <Icon className={`${sizeClasses} relative z-10 transition duration-300 group-hover:scale-110 group-hover:-translate-y-0.5`} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
