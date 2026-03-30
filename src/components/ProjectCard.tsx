import { Github } from 'lucide-react';
import gridPattern from '../assets/grid-pattern.svg';
import { Project } from '../types';
import Button from './Button';
import MotionPanel from './MotionPanel';

type ProjectCardProps = {
  project: Project;
  previewLabel: string;
  demoLabel: string;
};

function ProjectCard({ project, previewLabel, demoLabel }: ProjectCardProps) {
  return (
    <MotionPanel as="article" className="panel h-full p-4 sm:p-6">
      <div
        className="relative overflow-hidden rounded-[24px] border border-white/10 p-4 sm:p-5"
        style={{
          backgroundImage: `radial-gradient(circle at top right, ${project.accent}35, transparent 32%), linear-gradient(160deg, rgba(2,6,23,0.92), rgba(15,23,42,0.84))`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `url(${gridPattern})`, backgroundSize: 'cover' }}
        />
        <div className="relative z-10 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.28em] text-slate-300">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-hover-soft">{project.category}</span>
        </div>

        <div className="relative z-10 mt-8 space-y-3 sm:mt-10">
          <div className="rounded-[22px] border border-white/10 bg-slate-950/60 p-4">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-400">{previewLabel}</div>
              <div
                className="rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-slate-200"
                style={{ borderColor: `${project.accent}45`, background: `${project.accent}14` }}
              >
                <span className="text-hover-soft">{project.category}</span>
              </div>
            </div>
            <div className="mt-3 text-lg font-semibold text-white">
              <span className="text-hover-accent">{project.previewLabel}</span>
            </div>
            <div className="group/image relative mt-4 overflow-hidden rounded-[20px] border border-white/10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.32)_60%,rgba(2,6,23,0.72)_100%)]"
              />
              <img
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover/image:scale-[1.04] sm:aspect-[16/10]"
                src={project.image}
              />
              <div className="absolute inset-x-3 bottom-3 z-20 flex flex-col items-start gap-2 sm:inset-x-4 sm:bottom-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur-md">
                  <div className="text-[0.64rem] uppercase tracking-[0.22em] text-slate-400">
                    Live Preview
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    <span className="text-hover-accent">{project.title}</span>
                  </div>
                </div>
                <div className="hidden rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-right backdrop-blur-md sm:block">
                  <div className="text-[0.64rem] uppercase tracking-[0.22em] text-slate-400">Stack</div>
                  <div className="mt-1 text-sm font-semibold text-white">{project.tech[0]}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {project.metrics.map((metric) => (
              <div
                className="rounded-[20px] border border-white/10 px-4 py-3 text-sm text-slate-200"
                key={metric}
                style={{
                  background: `linear-gradient(180deg, ${project.accent}1c, rgba(255,255,255,0.02))`,
                }}
              >
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="text-hover-soft">{project.category}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
          <span className="text-hover-accent">{project.title}</span>
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[0.97rem]">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              className="group rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-cyan-300/[0.08]"
              key={item}
            >
              <span className="text-hover-accent">{item}</span>
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button className="w-full justify-center sm:w-auto" href={project.liveUrl} showArrow size="sm">
            {demoLabel}
          </Button>
          {project.githubUrl ? (
            <a
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
              href={project.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              <span className="text-hover-accent">GitHub</span>
            </a>
          ) : null}
        </div>
      </div>
    </MotionPanel>
  );
}

export default ProjectCard;
