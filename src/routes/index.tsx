import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Projects } from "@/components/Projects";
import { GitHubGraph } from "@/components/GitHubGraph";
import { Skills } from "@/components/Skills";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyam Sunder — Machine Learning Engineer" },
      {
        name: "description",
        content:
          "Shyam Sunder is a machine learning engineer at McDermott building software that solves real-world problems.",
      },
      {
        property: "og:title",
        content: "Shyam Sunder — Machine Learning Engineer",
      },
      {
        property: "og:description",
        content:
          "Machine learning engineer at McDermott, building software that solves real-world problems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative isolate flex min-h-screen flex-col bg-background text-foreground">
      {/* Page-wide background texture — consistent across every section */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Soft vertical fade so the grid melts toward the edges of the viewport */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 30%, transparent 40%, var(--background) 100%)",
          }}
        />
      </div>
      <Navbar />
      <main className="relative z-10 flex-1 pt-16">
        <Hero />
        <Products />
        <Projects />
        <GitHubGraph />
        <Skills />
        <CTA />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
