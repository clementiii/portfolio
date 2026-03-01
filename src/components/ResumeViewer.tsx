"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeViewer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for PDF iframe fallback
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex flex-col bg-background/90 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Top bar */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="flex items-center justify-between border-b border-border bg-card/80 backdrop-blur-sm px-3 sm:px-6 py-2.5 sm:py-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-accent/15">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-foreground">Resume</h3>
                <p className="text-[10px] sm:text-xs text-muted">Clement Cabus</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Download button */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-border px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden xs:inline">Download</span>
              </a>

              {/* Open in new tab */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-border px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="hidden xs:inline">Open</span>
              </a>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close resume viewer"
                className="ml-0.5 sm:ml-1 flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-border hover:text-foreground"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* PDF container */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex-1 overflow-auto p-3 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {isMobile ? (
              /* Mobile fallback — many mobile browsers can't render PDF in iframe */
              <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10">
                  <svg className="h-10 w-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">View Resume</h4>
                  <p className="mt-2 text-sm text-muted max-w-xs">
                    For the best experience on mobile, download or open the PDF directly.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    Open PDF
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ) : (
              <div className="mx-auto h-full max-w-4xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                <iframe
                  src="/resume.pdf"
                  title="Resume — Clement Cabus"
                  className="h-full w-full border-0"
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
