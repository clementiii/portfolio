import Image from "next/image";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "./animations";

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-center text-sm font-medium tracking-widest text-accent uppercase">
            About Me
          </h2>
          <h3 className="mt-2 text-center text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Who I am
          </h3>
        </FadeIn>

        <div className="mt-10 sm:mt-16 grid gap-8 sm:gap-12 md:grid-cols-5">
          {/* Photo */}
          <SlideIn direction="left" className="md:col-span-2 flex items-start justify-center">
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/photo.jpg"
                alt="Clement Cabus"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 288px"
                className="object-cover"
                priority
              />
            </div>
          </SlideIn>

          {/* Text content */}
          <FadeIn delay={0.2} className="md:col-span-3 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-muted">
              I&apos;m Clement Harold Miguel Cabus, a detail-oriented Software
              Developer and BS Computer Science (Major in Application Development)
              student at the University of Makati, graduating in 2026. I design,
              develop, and test software solutions across web and mobile platforms.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted">
              I have hands-on experience with PHP, Laravel, JavaScript, TypeScript,
              Java, Android development, and game development using Phaser.js.
              I&apos;m proficient in SDLC methodologies including Agile, Scrum, and
              Waterfall, and I leverage AI tools to maximize coding efficiency.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted">
              In December 2025, I earned a Certiport certification in Databases.
              I speak English, Tagalog, and Waray, and I&apos;m always looking for
              new challenges and opportunities to grow as a developer.
            </p>

            <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4 pt-4" delay={0.3}>
              {[
                { label: "GitHub Repos", value: "20+" },
                { label: "Contributions", value: "755+" },
                { label: "Organizations", value: "3" },
                { label: "Certifications", value: "1" },
              ].map(({ label, value }) => (
                <StaggerItem key={label}>
                  <div className="rounded-xl border border-border bg-card p-3 sm:p-4">
                    <p className="text-xl sm:text-2xl font-bold text-accent">{value}</p>
                    <p className="text-xs sm:text-sm text-muted">{label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
