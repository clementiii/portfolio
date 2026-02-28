"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "./animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: connect to your email service (e.g. Resend, EmailJS, Formspree)
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
      <FadeIn>
        <h2 className="text-center text-sm font-medium tracking-widest text-accent uppercase">
          Contact
        </h2>
        <h3 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in touch
        </h3>
        <p className="mt-4 text-center text-muted">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        {/* Direct contact info */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:clementhmcabus@gmail.com"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            clementhmcabus@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/clement-cabus/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </FadeIn>
      </div>
    </section>
  );
}
