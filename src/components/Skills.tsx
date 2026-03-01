"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const skillCategories = [
  {
    title: "Languages",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: ["PHP", "JavaScript", "TypeScript", "Java", "SQL", "HTML / CSS"],
  },
  {
    title: "Frameworks & Tools",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
    skills: ["Laravel", "Node.js", "Tailwind CSS", "Phaser.js", "Git / GitHub", "Android SDK"],
  },
  {
    title: "Databases & DevOps",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    skills: ["MySQL", "SQLite", "Docker", "REST APIs", "AI-Assisted Dev", "Certiport Certified"],
  },
  {
    title: "Methodologies",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    skills: ["Agile", "Scrum", "Waterfall", "SDLC", "Application Dev", "Game Development"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-sm font-medium tracking-widest text-accent uppercase">
            Skills
          </h2>
          <h3 className="mt-2 text-center text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            My tech stack
          </h3>
          <p className="mt-4 text-center text-sm sm:text-base text-muted">
            Technologies and methodologies I work with
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />

                {/* Icon */}
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  {category.icon}
                </div>

                <h4 className="relative mb-4 text-lg font-semibold text-foreground">
                  {category.title}
                </h4>

                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08 }}
                      className="cursor-default rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="relative mt-5 flex items-center gap-2 text-xs text-muted/60">
                  <div className="h-px flex-1 bg-border" />
                  <span>{category.skills.length} skills</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
