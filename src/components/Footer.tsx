import { ArrowUpRight } from "lucide-react";

import { site } from "@/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-display text-base font-semibold">
            {site.name}
          </span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — All rights reserved.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
          <a
            href={site.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
