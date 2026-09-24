import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden">
      {/* Ambient accent glow */}
      <div
        aria-hidden
        className="animate-glow-drift pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 38%, var(--glow), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8">
        {/* Name */}
        <h1
          className="animate-fade-up text-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          style={{ "--delay": "0ms" } as CSSProperties}
        >
          Shyam Sunder
        </h1>

        {/* Position */}
        <p
          className="animate-fade-up mt-5 text-sm font-medium uppercase text-muted-foreground sm:text-base"
          style={{ "--delay": "120ms" } as CSSProperties}
        >
          Machine Learning Engineer <span className="text-accent">@</span>{" "}
          McDermott
        </p>

        {/* Tagline */}
        <p
          className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ "--delay": "240ms" } as CSSProperties}
        >
          Building software that solves{" "}
          <span className="text-shimmer font-medium text-foreground">
            real-world problems
          </span>
          .
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ "--delay": "360ms" } as CSSProperties}
        >
          <a
            href="#work"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground shadow-[0_10px_30px_-10px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_var(--glow)]"
          >
            View my work
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent/50 hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
