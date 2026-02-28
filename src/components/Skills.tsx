import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "Java",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "Laravel",
      "Node.js",
      "Tailwind CSS",
      "Phaser.js",
      "Git / GitHub",
      "Android SDK",
    ],
  },
  {
    title: "Databases & DevOps",
    skills: [
      "MySQL",
      "SQLite",
      "Docker",
      "REST APIs",
      "AI-Assisted Dev",
      "Certiport Certified",
    ],
  },
  {
    title: "Methodologies",
    skills: [
      "Agile",
      "Scrum",
      "Waterfall",
      "SDLC",
      "Application Dev",
      "Game Development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-sm font-medium tracking-widest text-accent uppercase">
            Skills
          </h2>
          <h3 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My tech stack
          </h3>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <h4 className="mb-4 text-lg font-semibold text-foreground">
                {category.title}
              </h4>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
