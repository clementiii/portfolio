"use client";

import { useState } from "react";
import { FadeIn } from "./animations";

export default function Showcase() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="showcase" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-sm font-medium tracking-widest text-accent uppercase">
            Showcase
          </h2>
          <h3 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See it in action
          </h3>
          <p className="mt-4 text-center text-muted">
            An interactive preview of one of my projects — explore it live right
            here.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-accent/5">
            {/* Browser chrome bar */}
            <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted truncate">
                elec-3-compilation-hnan.vercel.app
              </div>
              <a
                href="https://elec-3-compilation-hnan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors"
              >
                <svg
                  className="h-3.5 w-3.5"
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
                Open
              </a>
            </div>

            {/* Iframe container */}
            <div className="relative aspect-video w-full bg-background">
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                    <span className="text-xs text-muted">Loading preview…</span>
                  </div>
                </div>
              )}
              <iframe
                src="https://elec-3-compilation-hnan.vercel.app/"
                title="ELEC 3 Compilation — Live Preview"
                className={`h-full w-full border-0 transition-opacity duration-500 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setLoaded(true)}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>

          {/* Caption */}
          <p className="mt-4 text-center text-xs text-muted">
            Interact with the live site above, or{" "}
            <a
              href="https://elec-3-compilation-hnan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              open it in a new tab
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
