import {
  BriefcaseBusiness,
  Download,
  Github,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import BrandLogo from '../components/BrandLogo';
import Button from '../components/Button';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import { resumeContent } from '../data/resume';
import type { Locale } from '../types';

type ResumePageProps = {
  locale: Locale;
};

type ResumeSheetProps = {
  content: (typeof resumeContent)[Locale];
  exportMode?: boolean;
};

type SidebarSectionProps = {
  title: string;
  children: React.ReactNode;
  compact?: boolean;
};

type ContactRowProps = {
  icon: LucideIcon;
  label: string;
  href?: string;
  compact?: boolean;
};

type ExperienceItem = {
  company: string;
  role: string;
  label: string;
  details: string[];
};

function SidebarSection({ title, children, compact = false }: SidebarSectionProps) {
  return (
    <section className={compact ? 'mt-6' : 'mt-8'}>
      <h2
        className={`font-display font-semibold uppercase tracking-[0.14em] text-white ${
          compact ? 'text-[1.02rem]' : 'text-[1.15rem]'
        }`}
      >
        {title}
      </h2>
      <div className={`h-px bg-white/25 ${compact ? 'mt-2 w-10' : 'mt-2 w-12'}`} />
      <div className={compact ? 'mt-3' : 'mt-4'}>{children}</div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href, compact = false }: ContactRowProps) {
  const content = (
    <span
      className={`flex items-start text-zinc-200 ${
        compact ? 'gap-2.5 text-[11px] leading-[1.05rem]' : 'gap-3 text-[12px] leading-5'
      }`}
    >
      <Icon className={`mt-0.5 shrink-0 text-zinc-400 ${compact ? 'h-3 w-3' : 'h-3.5 w-3.5'}`} />
      <span className="break-words">{label}</span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <a className="transition hover:text-white" href={href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}

function SectionHeading({ title, compact = false }: { title: string; compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? 'gap-3' : 'gap-4'}`}>
      <h2
        className={`font-display font-semibold uppercase tracking-[0.14em] text-[#161514] ${
          compact ? 'text-[1.2rem]' : 'text-[1.35rem]'
        }`}
      >
        {title}
      </h2>
      <div className="h-px flex-1 bg-[#a49b8e]" />
    </div>
  );
}

function LogoBadge() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_30%,#314a7e_0%,#131927_55%,#080b12_100%)]">
      <div className="absolute inset-4 rounded-full border border-cyan-200/15" />
      <div className="absolute h-16 w-16 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="relative flex h-full w-full items-center justify-center p-5">
        <BrandLogo className="h-full w-full object-contain" variant="mark" />
      </div>
    </div>
  );
}

function ResumeSheet({ content, exportMode = false }: ResumeSheetProps) {
  const compact = exportMode;
  const [firstName, lastName] = content.profile.name.split(' ');
  const skills = content.skills.items.flatMap((group) => group.skills);
  const visibleSkills = compact ? skills.slice(0, 8) : skills.slice(0, 10);
  const aboutText =
    `${content.profile.tagline} React, TypeScript, TailwindCSS, Python, FastAPI va PostgreSQL bilan ishlayman. ` +
    "Frontend UI, backend API va database integratsiyasini birgalikda qurishga qiziqaman.";
  const experienceItems: ExperienceItem[] = [
    {
      company: 'Shift Academy',
      role: 'Frontend & Backend Developer',
      label: 'React / TypeScript / FastAPI',
      details: [
        "Amaliy web loyihalar, interaktiv sahifalar va component asosidagi interfeyslar ustida ishladim.",
        "Frontend va backend oqimini uyg'un mahsulot sifatida qurishga e'tibor qaratdim.",
      ],
    },
    {
      company: 'IT Park',
      role: 'Frontend Developer',
      label: 'Responsive UI / Product Layout',
      details: [
        "Landing page, CTA oqimi va mobilga mos zamonaviy layoutlar bilan ishladim.",
        "Interfeysning o'qilishi, tezligi va foydalanuvchi tajribasini yaxshilashga urg'u berdim.",
      ],
    },
    {
      company: 'Freelance / Personal Projects',
      role: 'Full-Stack Developer',
      label: 'Portfolio / Education / API',
      details: [
        "Portfolio, task board, ta'limiy platforma va backend API tizimlari kabi loyihalarni ishlab chiqdim.",
        'Frontend, API va PostgreSQL integratsiyasini birlashtirib toza product flow yaratdim.',
      ],
    },
  ];
  const references = [
    {
      title: 'GitHub Profile',
      href: content.profile.github,
      lines: [
        content.profile.github.replace(/^https?:\/\//, ''),
        `Email: ${content.profile.email}`,
        `Phone: ${content.profile.phone}`,
      ],
    },
    {
      title: 'Portfolio / Telegram',
      href: content.profile.portfolio,
      lines: [
        content.profile.portfolio.replace(/^https?:\/\//, ''),
        'Telegram: @JaLoLoV_005',
        `Location: ${content.profile.city}, ${content.profile.country}`,
      ],
    },
  ];

  return (
    <article
      className={`overflow-hidden border border-black/10 bg-[#dfd5c7] text-[#161514] ${
        exportMode
          ? 'h-[1122px] w-[794px]'
          : 'mx-auto max-w-[940px] rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]'
      }`}
    >
      <div className={`grid ${exportMode ? 'h-full grid-cols-[248px_minmax(0,1fr)]' : 'md:grid-cols-[270px_minmax(0,1fr)]'}`}>
        <aside className="relative bg-[#232323] text-white">
          <div
            className={`bg-[linear-gradient(180deg,#1a1a1b_0%,#8f8f8c_54%,#ece6dd_100%)] ${
              compact ? 'h-28' : 'h-32'
            }`}
          />

          <div
            className={`absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-full border-white bg-zinc-500 shadow-[0_18px_40px_rgba(0,0,0,0.35)] ${
              compact ? 'top-7 h-32 w-32 border-[2px]' : 'top-8 h-36 w-36 border-[3px]'
            }`}
          >
            <LogoBadge />
          </div>

          <div className={compact ? 'px-6 pb-6 pt-[8.5rem]' : 'px-8 pb-8 pt-40'}>
            <h1
              className={`font-display break-words font-semibold uppercase tracking-[0.01em] text-white ${
                compact ? 'text-[2.18rem] leading-[0.9]' : 'text-[2.55rem] leading-[0.9]'
              }`}
            >
              {firstName}
              <br />
              {lastName}
            </h1>
            <p className={`mt-3 text-zinc-300 ${compact ? 'text-[0.84rem] leading-5' : 'text-[0.95rem] leading-6'}`}>
              {content.profile.role}
            </p>

            <SidebarSection compact={compact} title="Contact">
              <div className={compact ? 'space-y-2.5' : 'space-y-3'}>
                <ContactRow compact={compact} href={`mailto:${content.profile.email}`} icon={Mail} label={content.profile.email} />
                <ContactRow compact={compact} href={`tel:${content.profile.phone}`} icon={Phone} label={content.profile.phone} />
                <ContactRow
                  compact={compact}
                  href={content.profile.portfolio}
                  icon={Globe}
                  label={
                    compact
                      ? 'portfolio-kappa-three.vercel.app'
                      : content.profile.portfolio.replace(/^https?:\/\//, '')
                  }
                />
                <ContactRow compact={compact} icon={MapPin} label={`${content.profile.city}, ${content.profile.country}`} />
              </div>
            </SidebarSection>

            <SidebarSection compact={compact} title="Skills">
              <ul className={`text-zinc-200 ${compact ? 'space-y-1.5 text-[11px] leading-[1.05rem]' : 'space-y-2 text-[12px] leading-5'}`}>
                {visibleSkills.map((skill) => (
                  <li className="flex items-start gap-2" key={skill}>
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/80" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </SidebarSection>

            <SidebarSection compact={compact} title="Language">
              <ul className={`text-zinc-200 ${compact ? 'space-y-1.5 text-[11px] leading-[1.05rem]' : 'space-y-2 text-[12px] leading-5'}`}>
                {content.languages.items.map((language) => (
                  <li className="flex items-start gap-2" key={language}>
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/80" />
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </SidebarSection>
          </div>
        </aside>

        <section className={`bg-[#dfd5c7] ${compact ? 'px-7 py-8' : 'px-8 py-10 sm:px-10 sm:py-12'}`}>
          <section>
            <SectionHeading compact={compact} title="About Me" />
            <p className={`text-[#4a433b] ${compact ? 'mt-4 text-[12px] leading-6' : 'mt-5 text-[13px] leading-7'}`}>
              {aboutText}
            </p>
          </section>

          <section className={compact ? 'mt-7' : 'mt-10'}>
            <SectionHeading compact={compact} title="Work Experience" />
            <div className={compact ? 'mt-4 space-y-4' : 'mt-5 space-y-6'}>
              {experienceItems.map((item) => (
                <article key={`${item.company}-${item.role}`}>
                  <div className={`flex items-start justify-between ${compact ? 'gap-3' : 'gap-4'}`}>
                    <div>
                      <h3 className={`font-semibold text-[#181615] ${compact ? 'text-[0.98rem] leading-5' : 'text-[1.08rem]'}`}>
                        {item.role}
                      </h3>
                      <p className={`mt-1 font-medium text-[#3c3732] ${compact ? 'text-[0.92rem]' : 'text-[0.98rem]'}`}>
                        {item.company}
                      </p>
                    </div>
                    <span
                      className={`pt-1 text-right font-semibold uppercase tracking-[0.18em] text-[#847b6f] ${
                        compact ? 'text-[8px]' : 'text-[10px]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <ul className={`text-[#4a433b] ${compact ? 'mt-2.5 space-y-1.5 text-[11.5px] leading-5' : 'mt-3 space-y-2 text-[13px] leading-6'}`}>
                    {item.details.map((detail) => (
                      <li className="flex items-start gap-2" key={detail}>
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#232323]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={compact ? 'mt-7' : 'mt-10'}>
            <SectionHeading compact={compact} title="Education" />
            <div className={compact ? 'mt-4 flex items-start gap-3.5' : 'mt-5 flex items-start gap-4'}>
              <div
                className={`flex shrink-0 items-center justify-center rounded-full bg-[#232323] text-white ${
                  compact ? 'h-9 w-9' : 'h-11 w-11'
                }`}
              >
                <GraduationCap className={compact ? 'h-4 w-4' : 'h-5 w-5'} />
              </div>
              <div>
                <h3 className={`font-semibold text-[#181615] ${compact ? 'text-[0.98rem]' : 'text-[1.08rem]'}`}>
                  {content.education.items[0].institution}
                </h3>
                <p className={`mt-1 font-medium text-[#3c3732] ${compact ? 'text-[0.9rem]' : 'text-[0.98rem]'}`}>
                  {content.education.items[0].direction}
                </p>
                <p className={`text-[#4a433b] ${compact ? 'mt-1.5 text-[11.5px] leading-5' : 'mt-2 text-[13px] leading-6'}`}>
                  {content.education.items[0].detail}
                </p>
              </div>
            </div>
          </section>

          <section className={compact ? 'mt-7' : 'mt-10'}>
            <SectionHeading compact={compact} title="References" />
            <div className={`grid sm:grid-cols-2 ${compact ? 'mt-4 gap-3' : 'mt-5 gap-4'}`}>
              {references.map((reference) => (
                <a
                  className={`rounded-[22px] border border-black/10 bg-[#e9e0d5] transition hover:-translate-y-0.5 hover:bg-[#ede5dc] ${
                    compact ? 'px-4 py-3.5' : 'px-5 py-4'
                  }`}
                  href={reference.href}
                  key={reference.title}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-2 text-[#181615]">
                    {reference.title.includes('GitHub') ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <BriefcaseBusiness className="h-4 w-4" />
                    )}
                    <h3 className={`font-semibold ${compact ? 'text-[0.92rem]' : 'text-[1rem]'}`}>{reference.title}</h3>
                  </div>
                  <div className={`text-[#4a433b] ${compact ? 'mt-2.5 space-y-1 text-[11px] leading-[1.05rem]' : 'mt-3 space-y-1.5 text-[12px] leading-5'}`}>
                    {reference.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </section>
      </div>
    </article>
  );
}

function ResumePage({ locale }: ResumePageProps) {
  const content = resumeContent[locale];
  const exportResumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadLabel =
    isDownloading
      ? locale === 'uz'
        ? 'PDF tayyorlanmoqda...'
        : 'Preparing PDF...'
      : content.hero.ctas.download;

  const handleDownloadResume = async () => {
    const exportNode = exportResumeRef.current;

    if (!exportNode || isDownloading) {
      return;
    }

    setIsDownloading(true);

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);

      if ('fonts' in document) {
        await document.fonts.ready;
      }

      await new Promise<void>((resolve) => {
        window.requestAnimationFrame(() => resolve());
      });

      const canvas = await html2canvas(exportNode, {
        backgroundColor: '#dfd5c7',
        scale: 2,
        useCORS: true,
        width: exportNode.scrollWidth,
        height: exportNode.scrollHeight,
        windowWidth: exportNode.scrollWidth,
        windowHeight: exportNode.scrollHeight,
        scrollX: 0,
        scrollY: 0,
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 3;
      const printableHeight = pageHeight - margin * 2;
      const printableWidth = pageWidth - margin * 2;
      const scale = Math.min(printableWidth / canvas.width, printableHeight / canvas.height);
      const renderWidth = canvas.width * scale;
      const renderHeight = canvas.height * scale;
      const imageData = canvas.toDataURL('image/jpeg', 0.98);
      const offsetX = (pageWidth - renderWidth) / 2;
      const offsetY = (pageHeight - renderHeight) / 2;

      pdf.addImage(imageData, 'JPEG', offsetX, offsetY, renderWidth, renderHeight, undefined, 'FAST');
      pdf.save(`${content.profile.name.replace(/\s+/g, '-')}-Resume.pdf`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="resume-page relative overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#070b14_0%,#0f1623_48%,#090d16_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(120,119,198,0.12),transparent_18%),radial-gradient(circle_at_82%_14%,rgba(245,183,95,0.08),transparent_18%),radial-gradient(circle_at_50%_86%,rgba(255,255,255,0.06),transparent_18%)]" />

      <Container className="max-w-[1140px]">
        <div className="print-hide mb-6 flex justify-end">
          <Button className="min-w-[12rem] justify-center" disabled={isDownloading} onClick={handleDownloadResume}>
            <span className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" />
              {downloadLabel}
            </span>
          </Button>
        </div>

        <Reveal>
          <ResumeSheet content={content} />
        </Reveal>
      </Container>

      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[-1] opacity-0">
        <div ref={exportResumeRef}>
          <ResumeSheet content={content} exportMode />
        </div>
      </div>
    </main>
  );
}

export default ResumePage;
