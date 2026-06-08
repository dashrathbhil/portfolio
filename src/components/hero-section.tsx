"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "@/components/hero-visual";

export function HeroSection() {
  return (
    <section
      className="relative pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 overflow-hidden"
      id="hero"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* ── Left Side — Content ── */}
          <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Label */}
            <div className="animate-fade-in-up opacity-0">
              <Badge variant="accent" className="mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-subtle" />
                Backend Software Engineer
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-text-primary leading-[1.2] animate-fade-in-up opacity-0 stagger-1">
              Building the core software{" "}
              <br className="hidden sm:block" />
              used by{" "}
              <span className="text-text-secondary">
                utility brokers, finance teams,
                <br className="hidden lg:block" />
                and recovery agencies.
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-6 text-[15px] sm:text-base text-text-secondary leading-[1.7] animate-fade-in-up opacity-0 stagger-2 max-w-md mx-auto lg:mx-0">
              My work revolves around translating strict business rules into reliable server-side code. I focus on the data modeling, third-party integrations, and background processing required to run heavy CRMs, loan software, and accounting ledgers.
            </p>

            {/* CTA */}
            <div className="mt-10 animate-fade-in-up opacity-0 stagger-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                size="lg"
                id="hero-cta-contact"
                href="#contact"
              >
                Contact Me
              </Button>
              <Button
                variant="secondary"
                size="lg"
                id="hero-cta-resume"
                href="/Dashrath_Bhil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Dashrath_Bhil_Resume.pdf"
              >
                View Resume
                <svg
                  className="w-4 h-4 text-text-muted transition-colors group-hover:text-text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* ── Right Side — Visual ── */}
          <div className="relative animate-fade-in opacity-0 stagger-2 lg:pl-4">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
