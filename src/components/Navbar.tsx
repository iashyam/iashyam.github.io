import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { LogoMark } from "@/components/Logo";
import { site } from "@/site";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Work", href: "#work" },
  { label: "GitHub", href: "#github" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: site.blogUrl, external: true },
];

function Logo() {
  return (
    <a href="/" className="flex min-w-0 items-center gap-2.5">
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="truncate text-display text-base font-semibold">
        {site.name}
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-fade-up fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 md:flex md:justify-between">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              {link.external && (
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="animate-in max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl fade-in slide-in-from-top-2 duration-300 md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
                {link.external && <ArrowUpRight className="h-4 w-4" />}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
