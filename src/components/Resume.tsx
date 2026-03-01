"use client";

import { useState, useCallback } from "react";
import { FadeIn } from "./animations";
import ResumeViewer from "./ResumeViewer";

export default function Resume() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <section id="resume" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Resume
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            My qualifications
          </h3>
          <p className="mt-4 text-muted">
            A summary of my education, experience, and skills — all in one
            document.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10">
            {/* Document icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <h4 className="text-lg font-semibold text-foreground">
              Clement Cabus — Resume
            </h4>
            <p className="mt-2 text-sm text-muted">
              Software Developer &bull; Computer Science Student
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Resume
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      <ResumeViewer open={open} onClose={close} />
    </section>
  );
}
