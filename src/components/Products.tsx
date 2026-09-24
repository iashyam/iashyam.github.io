import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { content } from "@/content";

export function Products() {
  return (
    <section id="products" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="animate-fade-up text-display text-4xl font-bold sm:text-5xl"
            style={{ "--delay": "0ms" } as CSSProperties}
          >
            Products
          </h2>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.products.map((product, index) => (
            <article
              key={product.name}
              className="animate-fade-up group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-accent/40"
              style={{ "--delay": `${index * 80}ms` } as CSSProperties}
            >
              {/* Real product screenshot */}
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] w-full overflow-hidden border-b border-border"
              >
                <img
                  src={product.image}
                  alt={`${product.name} homepage`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Live badge */}
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/85 px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Live
                </span>
              </a>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-display text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                {/* Tag pills — pinned below the summary */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-5 inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent"
                >
                  Visit product
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* More coming note */}
        <p
          className="animate-fade-up mt-8 text-center text-sm text-muted-foreground"
          style={{ "--delay": "300ms" } as CSSProperties}
        >
          More products are in the works — this space keeps growing.
        </p>
      </div>
    </section>
  );
}
