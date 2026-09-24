import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/site";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-36"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="animate-glow-drift pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, var(--glow), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <h2
          className="animate-fade-up text-display text-4xl font-bold sm:text-5xl"
          style={{ "--delay": "0ms" } as CSSProperties}
        >
          Let's build <span className="text-accent">together</span>.
        </h2>

        <p
          className="animate-fade-up max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          style={{ "--delay": "120ms" } as CSSProperties}
        >
          Have an idea, a problem worth solving, or just want to talk shop? My
          inbox is always open.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="animate-fade-up group mt-2 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          style={{ "--delay": "240ms" } as CSSProperties}
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
