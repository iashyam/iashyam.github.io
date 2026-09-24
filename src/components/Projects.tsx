import { useState } from "react";
import type { CSSProperties } from "react";
import { Github } from "lucide-react";

import { content, type Project } from "@/content";
import {
  ALL_PROJECTS_LABEL,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "@/content/categories";

type Filter = typeof ALL_PROJECTS_LABEL | ProjectCategory;

const filters: Filter[] = [ALL_PROJECTS_LABEL, ...PROJECT_CATEGORIES];

/** A real screenshot when content.yml names one, a lettered panel otherwise. */
function ProjectMedia({ project }: { project: Project }) {
  if (project.image !== undefined) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div
        aria-hidden
        className="animate-glow-drift pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, var(--glow), transparent 70%)",
        }}
      />
      <span className="text-display absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/40 transition-colors duration-300 group-hover:text-accent/50">
        {project.title.charAt(0)}
      </span>
    </>
  );
}

export function Projects() {
  const [active, setActive] = useState<Filter>(ALL_PROJECTS_LABEL);

  const visible =
    active === ALL_PROJECTS_LABEL
      ? content.projects
      : content.projects.filter((p) => p.categories.includes(active));

  return (
    <section id="work" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="animate-fade-up text-display text-4xl font-bold sm:text-5xl"
            style={{ "--delay": "0ms" } as CSSProperties}
          >
            Projects
          </h2>
        </div>

        {/* Category filter */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-2"
          style={{ "--delay": "260ms" } as CSSProperties}
        >
          {filters.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project grid — remounts on filter change so cards re-stagger */}
        <div
          key={active}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project, index) => (
            <article
              key={project.title}
              className="animate-fade-up group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-accent/40"
              style={{ "--delay": `${index * 60}ms` } as CSSProperties}
            >
              {/* Media links to the repository */}
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] w-full overflow-hidden border-b border-border bg-gradient-to-br from-secondary/50 via-card to-background"
              >
                <ProjectMedia project={project} />
              </a>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {/* Category pills — pinned below the summary */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-5 inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
