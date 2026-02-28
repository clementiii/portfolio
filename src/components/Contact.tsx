"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "./animations";
import { sendContactEmail } from "@/app/actions/contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "clementhmcabus@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
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
          <button
            onClick={() => setShowEmail(true)}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            clementhmcabus@gmail.com
          </button>
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
                placeholder="Name"
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
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm text-muted">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
              placeholder="Subject"
            />
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
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
          )}
        </form>
      </FadeIn>
      </div>

      {/* Success / Error Modal Overlay */}
      <AnimatePresence>
        {(status === "sent" || status === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm px-6"
            onClick={() => setStatus("idle")}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {status === "sent" ? (
                <>
                  {/* Checkmark icon */}
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                    <svg className="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                  <p className="mt-2 text-sm text-muted">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                </>
              ) : (
                <>
                  {/* Error icon */}
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15">
                    <svg className="h-7 w-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Something went wrong</h4>
                  <p className="mt-2 text-sm text-muted">{errorMsg}</p>
                </>
              )}
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                {status === "sent" ? "Got it" : "Try Again"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Modal */}
      <AnimatePresence>
        {showEmail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm px-6"
            onClick={() => { setShowEmail(false); setCopied(false); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Email icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                <svg className="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-foreground">My Email</h4>
              <p className="mt-3 select-all rounded-lg bg-background px-4 py-2.5 font-mono text-sm text-foreground">
                {email}
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  onClick={copyEmail}
                  className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={() => { setShowEmail(false); setCopied(false); }}
                  className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground hover:border-foreground/20"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
