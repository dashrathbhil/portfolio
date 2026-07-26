"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "@/components/hero-visual";

const projectMeta = [
  { id: "amsl", title: "AMSL", href: "#project-amsl" },
  { id: "auc", title: "AUC", href: "#project-auc" },
  { id: "trk", title: "TRK", href: "#project-trk" },
  { id: "accounting", title: "Accounting", href: "#project-account" },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = projectMeta[activeIndex];

  return (
    <section
      className="relative pt-20 pb-4 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-8 lg:min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
      id="hero"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-8 lg:gap-12 items-center">
          {/* ── Left Side — Content ── */}
          <div className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Label */}
            <div className="animate-fade-in-up opacity-0">
              <Badge variant="accent" className="mb-4.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-subtle" />
                Backend Engineer &bull; SaaS Platforms
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.55rem] font-bold tracking-tight text-text-primary leading-[1.15] animate-fade-in-up opacity-0 stagger-1">
              Transforming complex business operations{" "}
              <br className="hidden sm:block" />
              into{" "}
              <span className="text-text-secondary">
                scalable backend systems.
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-text-secondary leading-[1.65] animate-fade-in-up opacity-0 stagger-2 max-w-[500px] mx-auto lg:mx-0 font-normal">
              I build production backend systems where business logic drives the architecture. From multi-tenant SaaS platforms and rule-based pricing engines to OCR document processing and financial workflows.
            </p>

            {/* CTA */}
            <div className="mt-8 animate-fade-in-up opacity-0 stagger-3 flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  id="hero-cta-resume"
                  href="/Dashrath_Bhil_Backend_Software_Engineer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Dashrath_Bhil_Backend_Software_Engineer_Resume.pdf"
                >
                  Download Resume
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
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </Button>
              </div>
              <a
                href="#project-amsl"
                className="mt-1 text-[13.5px] font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-1.5 group relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-blue-400/30 hover:after:bg-blue-300 after:transition-colors duration-200"
              >
                Explore How AMSL Was Built
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* ── Right Side — Visual ── */}
          <div className="relative animate-fade-in opacity-0 stagger-2 lg:pl-4 w-full flex justify-center lg:justify-start">
            <HeroVisual activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
