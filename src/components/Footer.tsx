export default function Footer() {
  return (
    <footer className="border-t border-border px-4 sm:px-6 py-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs sm:text-sm text-muted text-center">
          &copy; {new Date().getFullYear()} Clement Cabus. All rights reserved.
        </p>
        <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com/clementiii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/clement-cabus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/clementiiiii/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Facebook
          </a>
          <a
            href="mailto:clementhmcabus@gmail.com"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
