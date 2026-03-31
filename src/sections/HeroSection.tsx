import { motion } from 'framer-motion';
import { BadgeCheck, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import gridPattern from '../assets/grid-pattern.svg';
import Button from '../components/Button';
import Container from '../components/Container';
import MotionPanel from '../components/MotionPanel';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { portfolioContent } from '../data/portfolio';
import { Locale } from '../types';

type HeroSectionProps = {
  locale: Locale;
};

function HeroSection({ locale }: HeroSectionProps) {
  const content = portfolioContent[locale];
  const [photoSrc, setPhotoSrc] = useState(content.profile.photo);
  const stackSupportText =
    locale === 'uz'
      ? 'Frontend va backend stack bir-biri bilan mos ishlashi uchun tanlangan asosiy texnologiyalar.'
      : 'Core technologies selected to keep frontend and backend architecture clean, fast and consistent.';

  const quickContacts = [
    {
      icon: Mail,
      label: content.hero.quickContactLabels.email,
      value: content.profile.email,
      href: `mailto:${content.profile.email}`,
    },
    {
      icon: Send,
      label: content.hero.quickContactLabels.telegram,
      value: '@JaLoLoV_005',
      href: content.profile.telegram,
    },
    {
      icon: Phone,
      label: content.hero.quickContactLabels.phone,
      value: content.profile.phone,
      href: `tel:${content.profile.phone}`,
    },
  ];

  return (
    <section className="relative pb-12 pt-24 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36" id="home">
      <Container>
        <div className="grid gap-6 sm:gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center xl:mx-0 xl:text-left">
              <span className="eyebrow mx-auto xl:mx-0">
                <BadgeCheck className="mr-2 h-3.5 w-3.5 text-cyan-200" />
                {content.profile.availability}
              </span>

              <div className="mt-7">
                <p className="text-sm uppercase tracking-[0.34em] text-slate-400">
                  <span className="text-hover-soft">{content.profile.role}</span>
                </p>
                <h1 className="mt-5 max-w-3xl text-[2.65rem] font-semibold leading-[0.96] text-white min-[430px]:text-[3.15rem] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.03]">
                  <span className="text-hover-accent">{content.hero.headline}</span>
                </h1>
                <p className="mt-6 max-w-2xl text-[0.98rem] leading-7 text-slate-300 sm:text-lg sm:leading-8 xl:max-w-[44rem]">
                  {content.profile.tagline} {content.profile.intro}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                  <MapPin className="h-4 w-4 text-cyan-200" />
                  <span>{content.profile.location}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 min-[430px]:justify-center xl:justify-start">
                <Button className="w-full justify-center min-[430px]:w-auto" href="#projects" showArrow>
                  {content.hero.primaryCta}
                </Button>
                <Button className="w-full justify-center min-[430px]:w-auto" href="/resume" variant="secondary">
                  {content.labels.resumeCta}
                </Button>
                <Button className="w-full justify-center min-[430px]:w-auto" href="#contact" variant="ghost">
                  {content.hero.secondaryCta}
                </Button>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
                {quickContacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <MotionPanel key={item.label}>
                      <a
                        className="group panel-soft flex min-h-[82px] items-center gap-3 px-4 py-3 transition duration-300 hover:border-white/20"
                        href={item.href}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                          <Icon className="h-4 w-4 text-cyan-200" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">
                            <span className="text-hover-soft">{item.label}</span>
                          </div>
                          <div className="truncate text-sm font-semibold text-white">
                            <span className="text-hover-accent">{item.value}</span>
                          </div>
                        </div>
                      </a>
                    </MotionPanel>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-center gap-3 xl:justify-start">
                <SocialLinks links={content.socialLinks} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <MotionPanel
              className="panel relative mx-auto w-full max-w-[34rem] overflow-hidden p-4 sm:p-6 xl:max-w-none"
              glow="rgba(103,232,249,0.2)"
              style={{
                backgroundImage:
                  'radial-gradient(circle at top right, rgba(103,232,249,0.18), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))',
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-45"
                style={{ backgroundImage: `url(${gridPattern})`, backgroundSize: 'cover' }}
              />
              <div className="absolute inset-x-5 top-4 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent sm:inset-x-8 sm:top-5" />

              <div className="relative z-10 flex flex-col gap-3 min-[430px]:flex-row min-[430px]:items-start min-[430px]:justify-between sm:gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span className="text-hover-soft">{content.hero.profileLabel}</span>
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white">
                    <span className="text-hover-accent">{content.profile.name}</span>
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    <span className="text-hover-soft">{content.profile.role}</span>
                  </div>
                </div>
                <div className="self-start rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-200">
                  {content.hero.onlineLabel}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                className="relative z-10 mt-6 overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/65"
                transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
              >
                <div className="aspect-[4/4.7] bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.22),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-2.5 sm:aspect-[4/4.4] sm:p-3">
                  <img
                    alt={content.profile.name}
                    className="h-full w-full rounded-[24px] border border-white/10 object-cover object-center"
                    onError={() => setPhotoSrc('/profile-placeholder.svg')}
                    src={photoSrc}
                  />
                </div>
              </motion.div>

              <div className="relative z-10 mt-5 grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-slate-950/55 p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      <span className="text-hover-soft">{content.hero.stackLabel}</span>
                    </div>
                    <div className="mt-3 text-sm font-semibold leading-7 text-white">
                      <span className="text-hover-accent">{content.hero.stackText}</span>
                    </div>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-slate-950/55 p-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      <span className="text-hover-soft">{content.hero.resultLabel}</span>
                    </div>
                    <div className="mt-3 text-sm font-semibold leading-7 text-white">
                      <span className="text-hover-accent">{content.hero.resultText}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-slate-950/55 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    <span className="text-hover-soft">{content.hero.approachLabel}</span>
                  </div>
                  <div className="mt-3 text-sm font-semibold leading-7 text-white">
                    <span className="text-hover-accent">{content.hero.approachText}</span>
                  </div>
                </div>
              </div>
            </MotionPanel>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 2xl:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.stats.map((stat, index) => (
              <Reveal delay={0.08 * (index + 1)} key={stat.label}>
                <MotionPanel className="panel-soft h-full p-5 text-center sm:p-6 sm:text-left sm:min-h-[210px]" glow="rgba(103,232,249,0.12)">
                  <div className="text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-100">
                    <span className="text-hover-accent">{stat.label}</span>
                  </div>
                  <p className="mt-3 text-sm leading-8 text-slate-400">{stat.detail}</p>
                </MotionPanel>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <MotionPanel className="panel-soft h-full p-5 text-center sm:p-6 sm:text-left sm:min-h-[210px]" glow="rgba(245,183,95,0.12)">
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                <span className="text-hover-soft">{content.hero.stackLabel}</span>
              </div>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:mx-0">
                {stackSupportText}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
                {content.heroPills.map((pill) => (
                  <span
                    className="group rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-cyan-300/[0.08]"
                    key={pill}
                  >
                    <span className="text-hover-accent">{pill}</span>
                  </span>
                ))}
              </div>
            </MotionPanel>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
