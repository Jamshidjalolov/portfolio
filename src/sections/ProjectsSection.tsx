import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { portfolioContent } from '../data/portfolio';
import { Locale } from '../types';

type ProjectsSectionProps = {
  locale: Locale;
};

function ProjectsSection({ locale }: ProjectsSectionProps) {
  const content = portfolioContent[locale];

  return (
    <section className="py-14 sm:py-16 lg:py-20" id="projects">
      <Container>
        <Reveal>
          <SectionHeading
            description={content.projects.description}
            eyebrow={content.projects.eyebrow}
            title={content.projects.title}
          />
        </Reveal>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {content.projects.items.map((project, index) => (
            <Reveal delay={0.07 * index} key={project.title}>
              <ProjectCard
                demoLabel={content.projects.demoLabel}
                previewLabel={content.projects.previewLabel}
                project={project}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
