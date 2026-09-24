import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, Github } from "lucide-react";

import { site } from "@/site";

const GITHUB_USERNAME = site.githubUsername;

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ApiResponse = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

const CELL = 11; // px
const GAP = 3; // px
const ROWS = 7;

const levelClass = [
  "bg-muted/60",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

type Cell = ContributionDay | null;

export function GitHubGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [weeks, setWeeks] = useState(53);
  const [cell, setCell] = useState(CELL);
  const [days, setDays] = useState<ContributionDay[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        if (cancelled) return;
        setDays(data.contributions);
        setTotal(data.contributions.reduce((acc, d) => acc + d.count, 0));
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Keep cells perfectly square: show as many trailing weeks as fit at the
  // minimum cell size, then grow the cells to fill the exact card width.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !days) return;
    const LABEL_WIDTH = 30; // weekday labels + gap
    const MIN_CELL = 8;
    const measure = () => {
      const available = el.clientWidth - LABEL_WIDTH;
      let w = 53;
      while (w > 4 && w * (MIN_CELL + GAP) - GAP > available) w--;
      setWeeks(w);
      setCell(Math.min(16, (available - (w - 1) * GAP) / w));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [days]);

  // Build week columns, Sunday-aligned, keeping only the trailing `weeks` weeks
  const columns: Cell[][] = [];
  if (days) {
    const firstDay = days.length ? new Date(days[0]!.date).getDay() : 0;
    const padded: Cell[] = [...Array<Cell>(firstDay).fill(null), ...days];
    const all: Cell[][] = [];
    for (let i = 0; i < padded.length; i += ROWS) {
      all.push(padded.slice(i, i + ROWS));
    }
    columns.push(...all.slice(-weeks));
  }

  // Month labels: place a label on the first column whose month differs from previous
  const monthLabels: { index: number; label: string }[] = [];
  let lastMonth = -1;
  columns.forEach((week, i) => {
    const firstReal = week.find((d): d is ContributionDay => d !== null);
    if (!firstReal) return;
    const m = new Date(firstReal.date).getMonth();
    if (m !== lastMonth) {
      // avoid a cramped label at the very end
      if (i < columns.length - 1) monthLabels.push({ index: i, label: MONTHS[m]! });
      lastMonth = m;
    }
  });

  return (
    <section id="github" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <h2
            className="animate-fade-up text-display text-4xl font-bold sm:text-5xl"
            style={{ "--delay": "0ms" } as CSSProperties}
          >
            GitHub Activity
          </h2>
        </div>

        <div
          className="animate-fade-up mt-12 rounded-xl border border-border bg-card transition-colors hover:border-accent/40"
          style={{ "--delay": "300ms" } as CSSProperties}
        >
          {/* Card header */}
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-5 py-4 sm:flex sm:justify-between sm:px-8">
            <div className="flex min-w-0 items-center gap-2.5 text-sm font-medium">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <Github className="size-4 text-accent" />
              </span>
              <span className="truncate">@{GITHUB_USERNAME}</span>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              View profile
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="px-5 py-5 sm:px-8 sm:py-6">
            {failed ? (
              <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-border py-12 text-center">
                <Github className="size-6 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Contribution data couldn't load right now.
                </p>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  See it on GitHub instead
                </a>
              </div>
            ) : days === null ? (
              <div className="flex h-[140px] items-center justify-center">
                <div className="size-5 animate-spin rounded-full border-2 border-border border-t-accent" />
              </div>
            ) : (
              <>
                <p className="mb-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {total?.toLocaleString()}
                  </span>{" "}
                  contributions in the last year
                </p>

                <div ref={containerRef} className="pb-1">
                  <div className="flex gap-2">
                    {/* Weekday labels */}
                    <div
                      className="flex shrink-0 flex-col pt-[18px] text-[10px] text-muted-foreground"
                      style={{ gap: GAP }}
                    >
                      {["", "Mon", "", "Wed", "", "Fri", ""].map((l, i) => (
                        <span
                          key={i}
                          className="flex items-center leading-none"
                          style={{ height: cell }}
                        >
                          {l}
                        </span>
                      ))}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      {/* Month labels */}
                      <div className="relative h-[18px] w-full text-[10px] text-muted-foreground">
                        {monthLabels.map((m) => (
                          <span
                            key={m.index}
                            className="absolute top-0 leading-none"
                            style={{ left: m.index * (cell + GAP) }}
                          >
                            {m.label}
                          </span>
                        ))}
                      </div>

                      {/* Grid: square cells sized to fill the card width */}
                      <div className="flex w-full" style={{ gap: GAP }}>
                        {columns.map((week, wi) => (
                          <div
                            key={wi}
                            className="flex shrink-0 flex-col"
                            style={{ gap: GAP }}
                          >
                            {Array.from({ length: ROWS }, (_, di) => {
                              const day = week[di];
                              if (!day)
                                return (
                                  <span
                                    key={di}
                                    style={{ width: cell, height: cell }}
                                    aria-hidden
                                  />
                                );
                              return (
                                <span
                                  key={di}
                                  title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                                  role="gridcell"
                                  aria-label={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                                  className={`rounded-[2px] outline outline-1 -outline-offset-1 outline-foreground/5 transition-colors hover:outline-accent ${levelClass[day.level]}`}
                                  style={{ width: cell, height: cell }}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer row */}
                <div className="mt-4 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    Learn how we count contributions
                  </a>
                  <div className="flex items-center gap-1.5">
                    <span className="mr-1">Less</span>
                    {levelClass.map((c, i) => (
                      <span
                        key={i}
                        className={`rounded-[2px] outline outline-1 -outline-offset-1 outline-foreground/5 ${c}`}
                        style={{ width: CELL, height: CELL }}
                      />
                    ))}
                    <span className="ml-1">More</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
