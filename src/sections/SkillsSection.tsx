import { Code2, MonitorCog, Sparkles, Workflow } from 'lucide-react';
import Container from '../components/Container';
import MotionPanel from '../components/MotionPanel';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { portfolioContent } from '../data/portfolio';
import { Locale } from '../types';

type SkillsSectionProps = {
  locale: Locale;
};

const iconMap = {
  code2: Code2,
  sparkles: Sparkles,
  'monitor-cog': MonitorCog,
  workflow: Workflow,
};

function SkillsSection({ locale }: SkillsSectionProps) {
  const content = portfolioContent[locale];

  return (
    <section className="py-14 sm:py-16 lg:py-20" id="skills">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            description={content.skills.description}
            eyebrow={content.skills.eyebrow}
            title={content.skills.title}
          />
        </Reveal>

        <div className="mt-8 grid gap-5 sm:mt-10 xl:grid-cols-2">
          {content.skills.categories.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <Reveal delay={0.08 * index} key={category.title}>
                <MotionPanel
                  className="panel relative h-full overflow-hidden p-5 sm:p-6"
                  glow={`${category.accent}26`}
                  style={{
                    backgroundImage: `radial-gradient(circle at top right, ${category.accent}22, transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.03))`,
                  }}
                >
                  <div className="flex flex-col gap-4 min-[430px]:flex-row min-[430px]:items-start min-[430px]:justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {content.skills.categoryLabel}
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                        <span className="text-hover-accent">{category.title}</span>
                      </h3>
                    </div>
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 sm:h-14 sm:w-14"
                      style={{ background: `linear-gradient(180deg, ${category.accent}2a, rgba(255,255,255,0.04))` }}
                    >
                      <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  <p className="mt-5 text-[0.95rem] leading-7 text-slate-300 sm:text-[0.96rem]">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        className="group rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-cyan-300/[0.08]"
                        key={skill}
                      >
                        <span className="text-hover-accent">{skill}</span>
                      </span>
                    ))}
                  </div>
                </MotionPanel>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
