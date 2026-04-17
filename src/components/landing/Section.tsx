import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  contained = true,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  contained?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 lg:py-32 ${className}`}>
      <div className={contained ? "mx-auto max-w-7xl px-5 md:px-8" : ""}>
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && (
              <div className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent">
                <span className="h-px w-8 bg-accent" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-2xl text-base text-muted-foreground text-pretty md:text-lg">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
