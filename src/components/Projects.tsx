import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const projects = [
  {
    title: "Bathala",
    description:
      "A Filipino mythology-inspired roguelike card game developed as a 4th-year thesis project. Built with Phaser.js and TypeScript, featuring poker-based combat, deck-sculpting progression, and a rule-based Dynamic Difficulty Adjustment system designed to maintain player flow.",
    tags: ["TypeScript", "Phaser.js", "Game Dev", "Thesis"],
    link: "https://github.com/devlocke-acsad/bathala",
    image: "https://opengraph.githubassets.com/1/devlocke-acsad/bathala",
    demo: "",
  },
  {
    title: "Barangay Post Proper Southside Information System",
    description:
      "Led development of a full barangay information system for Post Proper Southside, Taguig City. Features an Android app for residents and a Laravel admin web dashboard. Built with Laravel, Tailwind CSS, Android (Java), and SQL.",
    tags: ["Laravel", "Android", "Java", "Tailwind CSS", "SQL"],
    link: "https://github.com/clementiii/PostProperAdminLaravel",
    image: "https://opengraph.githubassets.com/1/clementiii/PostProperAdminLaravel",
    demo: "",
  },
  {
    title: "Calbeans Coffee Web Application",
    description:
      "A point-of-sale and ordering management system for Calbeans Coffee in Taguig. Features a customer ordering website and an admin dashboard for inventory management, order processing, and sales tracking. Built with HTML, CSS, and SQL.",
    tags: ["HTML", "CSS", "SQL", "POS"],
    link: "https://github.com/clementiii/calbeans",
    image: "https://opengraph.githubassets.com/1/clementiii/calbeans",
    demo: "",
  },
  {
    title: "InternTrack",
    description:
      "An intern tracking system with Zod validation schemas, TypeScript type declarations, and a modern developer workflow. Actively maintained with 169+ commits across the team.",
    tags: ["TypeScript", "React", "Zod"],
    link: "https://github.com/project-intern-track/InternTrack",
    image: "https://opengraph.githubassets.com/1/project-intern-track/InternTrack",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-sm font-medium tracking-widest text-accent uppercase">
            Projects
          </h2>
          <h3 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve built
          </h3>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <div
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card-hover hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Project image */}
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl border border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
