import Container from '../components/Container';
import MotionPanel from '../components/MotionPanel';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { portfolioContent } from '../data/portfolio';
import { Locale } from '../types';

type AboutSectionProps = {
  locale: Locale;
};

function AboutSection({ locale }: AboutSectionProps) {
  const content = portfolioContent[locale];

  return (
    <section className="py-14 sm:py-16 lg:py-20" id="about">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <Reveal>
            <SectionHeading
              description={content.about.description}
              eyebrow={content.about.eyebrow}
              title={content.about.title}
            />
          </Reveal>

          <Reveal delay={0.12}>
            <MotionPanel className="panel p-5 sm:p-8">
              <div className="space-y-5 text-[0.98rem] leading-7 text-slate-300 sm:text-base sm:leading-8">
                {content.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 soft-divider" />

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {content.about.highlights.map((item) => (
                  <div
                    className="group rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-100 transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.06]"
                    key={item}
                  >
                    <span className="text-hover-accent">{item}</span>
                  </div>
                ))}
              </div>
            </MotionPanel>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {content.stats.map((stat, index) => (
            <Reveal delay={0.08 * index} key={stat.label}>
              <MotionPanel className="panel-soft h-full p-5 sm:min-h-[220px] sm:p-6" glow="rgba(245,183,95,0.14)">
                <div className="text-4xl font-semibold text-white">{stat.value}</div>
                <div className="mt-3 text-lg font-semibold text-slate-100">
                  <span className="text-hover-accent">{stat.label}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{stat.detail}</p>
              </MotionPanel>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
