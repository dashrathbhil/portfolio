"use client";
import React, { useState, useEffect, useRef } from "react";

export function WorkflowFeature({
  title,
  description,
  focusPoints,
  workflowStages,
  visual,
  screenshots,
  screenshotMap,
  imageLabel,
  reversed = false,
}: {
  title: string;
  description: string;
  focusPoints: string[];
  workflowStages?: string[];
  visual?: React.ReactNode;
  screenshots?: string[];
  screenshotMap?: number[];
  imageLabel?: string;
  reversed?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Derived constants — declared before useEffects so they are always in scope
  const hasScreenshots = screenshots && screenshots.length > 0;
  const hasMultipleScreenshots = screenshots && screenshots.length > 1;

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Only autoplay when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoplay: 6s interval, pauses on hover, only for multi-screenshot workflows
  useEffect(() => {
    if (!hasMultipleScreenshots || isPaused || !isVisible) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % focusPoints.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, isVisible, hasMultipleScreenshots, focusPoints.length]);


  const handleInteraction = (index: number) => {
    if (hasMultipleScreenshots) setActiveIndex(index);
  };

  const currentScreenshotIndex = hasScreenshots
    ? hasMultipleScreenshots
      ? screenshotMap && screenshotMap[activeIndex] !== undefined
        ? screenshotMap[activeIndex]
        : activeIndex % screenshots.length
      : 0
    : -1;

  const currentScreenshot =
    hasScreenshots && currentScreenshotIndex >= 0
      ? screenshots[currentScreenshotIndex]
      : null;

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 lg:items-center items-center group/section"
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Content Area */}
      <div
        className={`lg:col-span-4 flex flex-col justify-start lg:pt-0 min-w-0 ${
          reversed ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
        }`}
      >
        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary tracking-tight leading-tight mb-4">
          {title}
        </h4>
        <p className="text-[14px] sm:text-[15px] text-text-secondary leading-relaxed mb-8 whitespace-pre-wrap">
          {description}
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold text-slate-500/60 uppercase tracking-[0.15em]">
            Key Capabilities
          </p>

          {/* Vertical Timeline Navigation */}
          <div className="relative flex flex-col">
            {/* Vertical timeline track */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-700/30" />

            {focusPoints.map((point, index) => {
              const isActive = hasMultipleScreenshots && activeIndex === index;
              const isHovered =
                hasMultipleScreenshots && hoveredIndex === index && !isActive;

              return (
                <div
                  key={point}
                  className={`relative flex items-center gap-4 py-3 transition-all duration-200 ${
                    hasMultipleScreenshots ? "cursor-pointer" : "cursor-default"
                  }`}
                  onMouseEnter={() => {
                    if (hasMultipleScreenshots) {
                      setIsPaused(true);
                      setHoveredIndex(index);
                      handleInteraction(index);
                    }
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleInteraction(index)}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-[15px] h-[15px] shrink-0">
                    {isActive ? (
                      <>
                        {/* Glow ring */}
                        <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" style={{ animationDuration: '2.4s' }} />
                        {/* Outer ring */}
                        <span className="absolute inset-[2px] rounded-full bg-blue-500/30" />
                        {/* Core dot */}
                        <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)] relative z-10" />
                      </>
                    ) : (
                      <span
                        className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
                          isHovered ? "bg-slate-400 scale-125" : "bg-slate-600/50"
                        }`}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <span
                    className={`text-[13.5px] leading-snug transition-all duration-300 ${
                      isActive
                        ? "text-white font-semibold"
                        : isHovered
                        ? "text-slate-300 font-medium"
                        : "text-slate-500 font-normal"
                    }`}
                  >
                    {point}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Canvas */}
      <div
        className={`lg:col-span-8 min-w-0 ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          onClick={() => {
            if (hasScreenshots) setIsModalOpen(true);
          }}
          className={`relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[1.4/1] rounded-xl border border-border-secondary bg-bg-elevated flex flex-col overflow-hidden shadow-xl ring-1 ring-white/5 transition-all duration-300 ${
            hasScreenshots
              ? "cursor-pointer hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99]"
              : ""
          }`}
        >
          {/* Browser Header */}
          <div className="h-8 bg-bg-secondary/80 border-b border-border-secondary flex items-center px-4 gap-2.5 z-20">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
          </div>

          {/* Screenshots Area */}
          <div className="flex-1 relative bg-bg-primary overflow-hidden">
            {hasScreenshots ? (
              screenshots.map((src, idx) => {
                const isCurrent = currentScreenshotIndex === idx;
                return (
                  <img
                    key={src}
                    src={src}
                    alt={`${title} view ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain object-top transition-opacity duration-[400ms] ease-in-out ${
                      isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                );
              })
            ) : (
              <div className="w-full h-full absolute inset-0 flex items-center justify-center">
                {visual}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && currentScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            aria-label="Close Preview"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentScreenshot}
              alt={`${title} Full Preview`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
