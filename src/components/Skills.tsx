import type { CSSProperties } from "react";

import { content } from "@/content";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="animate-fade-up text-display text-4xl font-bold sm:text-5xl"
            style={{ "--delay": "0ms" } as CSSProperties}
          >
            Skills
          </h2>
        </div>

        {/* Grouped skill chips — one compact card per group */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {content.skills.map((group, groupIndex) => (
            <div
              key={group.label}
              className="animate-fade-up rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-accent/40"
              style={{ "--delay": `${260 + groupIndex * 80}ms` } as CSSProperties}
            >
              <p className="text-xs font-medium uppercase text-muted-foreground">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-foreground/90 transition-colors duration-300 hover:border-accent/50 hover:text-foreground"
                    >
                      <Icon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
