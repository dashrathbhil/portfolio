"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: "amsl",
    title: "AMSL Broker Portal",
    subtitle: "Enterprise SaaS for UK Energy Brokers",
    highlights: [
      "Rule-Based Quote Engine",
      "Multi-Tenant SaaS",
      "OCR Invoice Processing",
      "Commission Distribution",
      "Market Benchmark Analytics"
    ],
    metrics: ["15+ Modules", "300+ APIs", "20+ Suppliers"],
    workflow: ["Quote", "Contract", "Settlement"],
    color: "from-blue-600/20 via-blue-500/5 to-bg-elevated/95",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.22)]",
    borderColor: "border-blue-500/35",
    accentColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    accentHex: "#60a5fa",
    borderColorHex: "rgba(59, 130, 246, 0.35)",
    glowColorHex: "rgba(59, 130, 246, 0.22)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "auc",
    title: "AUC Collections CRM",
    subtitle: "Production System for Debt Recovery Agencies",
    highlights: [
      "Postcode Assignment Engine",
      "Field Agent Workflow Automation",
      "Automated PDF Letter Generation",
      "Real-Time Payment Tracking Ledger",
      "Granular Role-Based Permissions"
    ],
    metrics: ["10+ Orgs Active", "Real-Time Sync"],
    workflow: ["Assignment", "Field Visit", "Recovery"],
    color: "from-rose-600/20 via-rose-500/5 to-bg-elevated/95",
    glow: "shadow-[0_0_40px_rgba(244,63,94,0.22)]",
    borderColor: "border-rose-500/35",
    accentColor: "text-rose-400",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    accentHex: "#f43f5e",
    borderColorHex: "rgba(244, 63, 94, 0.35)",
    glowColorHex: "rgba(244, 63, 94, 0.22)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: "trk",
    title: "TRK Merchant Lending",
    subtitle: "Lending SaaS & Capital Allocation Platform",
    highlights: [
      "Automated Underwriting Flow",
      "EMI Interest Calculations Engine",
      "Investor Allocation Algorithm",
      "KYC Document Verification Integration",
      "Bank Statement PDF Parsing"
    ],
    metrics: ["£12M+ Volume", "Audit-Ready Logs"],
    workflow: ["Application", "Approval", "Repayment"],
    color: "from-emerald-600/20 via-emerald-500/5 to-bg-elevated/95",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.22)]",
    borderColor: "border-emerald-500/35",
    accentColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentHex: "#34d399",
    borderColorHex: "rgba(16, 185, 129, 0.35)",
    glowColorHex: "rgba(16, 185, 129, 0.22)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1" />
      </svg>
    )
  },
  {
    id: "accounting",
    title: "Accounting Ledger",
    subtitle: "Financial Operations & Double-Entry Ledger",
    highlights: [
      "Double-Entry General Ledger",
      "Purchase Order Reconciliation Engine",
      "Supplier Statement PDF Parser",
      "Auditable Transactions Journal",
      "Multi-Currency FX Pipeline"
    ],
    metrics: ["100% Tax Compliant", "Instant Reconciliation"],
    workflow: ["PO Raised", "Invoice Match", "Ledger Post"],
    color: "from-amber-600/20 via-amber-500/5 to-bg-elevated/95",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.22)]",
    borderColor: "border-amber-500/35",
    accentColor: "text-amber-400",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    accentHex: "#fbbf24",
    borderColorHex: "rgba(245, 158, 11, 0.35)",
    glowColorHex: "rgba(245, 158, 11, 0.22)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

const backgroundParticles = [
  { id: 1, size: 3, x: 15, y: 20, duration: 18, delay: -2, color: 'rgba(59,130,246,0.25)' },
  { id: 2, size: 4, x: 75, y: 15, duration: 22, delay: -5, color: 'rgba(244,63,94,0.25)' },
  { id: 3, size: 5, x: 45, y: 80, duration: 15, delay: -8, color: 'rgba(16,185,129,0.25)' },
  { id: 4, size: 3, x: 85, y: 70, duration: 20, delay: -4, color: 'rgba(245,158,11,0.25)' },
  { id: 5, size: 4, x: 25, y: 60, duration: 17, delay: -1, color: 'rgba(59,130,246,0.25)' },
  { id: 6, size: 5, x: 60, y: 40, duration: 25, delay: -12, color: 'rgba(244,63,94,0.25)' },
  { id: 7, size: 3, x: 10, y: 85, duration: 14, delay: -3, color: 'rgba(16,185,129,0.25)' },
  { id: 8, size: 4, x: 90, y: 30, duration: 19, delay: -6, color: 'rgba(245,158,11,0.25)' },
  { id: 9, size: 3, x: 50, y: 10, duration: 21, delay: -9, color: 'rgba(59,130,246,0.25)' },
  { id: 10, size: 5, x: 30, y: 35, duration: 16, delay: -7, color: 'rgba(16,185,129,0.25)' },
  { id: 11, size: 4, x: 70, y: 85, duration: 24, delay: -10, color: 'rgba(244,63,94,0.25)' },
  { id: 12, size: 3, x: 80, y: 55, duration: 18, delay: -11, color: 'rgba(245,158,11,0.25)' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
};

interface HeroVisualProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export function HeroVisual({ activeIndex, setActiveIndex }: HeroVisualProps) {
  const [workflowStep, setWorkflowStep] = useState(0);

  const activeProduct = products[activeIndex];

  // Handle workflow timeline progression inside active card
  useEffect(() => {
    setWorkflowStep(0);
    const totalSteps = activeProduct.workflow.length;
    const stepDuration = 4200 / (totalSteps - 1);

    const interval = setInterval(() => {
      setWorkflowStep((prev) => {
        if (prev < totalSteps - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [activeIndex, activeProduct.workflow.length]);

  const targetProjectHref = activeIndex === 0
    ? "#project-amsl"
    : activeIndex === 1
    ? "#project-auc"
    : activeIndex === 2
    ? "#project-trk"
    : "#project-account";

  return (
    <div 
      className="relative w-full flex flex-col items-center justify-center p-2 font-sans overflow-visible select-none"
    >
      {/* CSS Hardware-Accelerated floating keyframes for butter-smooth animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes compositor-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .animate-compositor-float {
          animation: compositor-float 6s ease-in-out infinite;
          will-change: transform;
        }
      `}} />

      {/* Ambient Grid Accent Background */}
      <div className="absolute -inset-10 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>
      
      {/* Dynamic Light Beams and Glow effects behind the card */}
      <div 
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 z-0 animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, ${activeProduct.accentHex}15 0%, transparent 70%)`
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 z-0 animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, ${activeProduct.accentHex}10 0%, transparent 70%)`
        }}
      ></div>

      {/* Floating Data Particles */}
      {backgroundParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-[0.5px] pointer-events-none z-0"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
            opacity: [0.15, 0.55, 0.25, 0.15]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Card Content Wrap */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center gap-5 sm:gap-6 z-10 py-2">
        
        {/* Hover scale + float wrapper & Link to Project Deep Dive */}
        <a 
          href={targetProjectHref}
          className="w-full flex justify-center items-center cursor-pointer group/card block"
        >
          <motion.div
            whileHover={{ scale: 1.025 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="w-full flex justify-center animate-compositor-float"
          >
            {/* The Active Platform Card */}
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 26
              }}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-500 flex flex-col justify-between w-full max-w-full sm:max-w-[480px] h-[400px] sm:h-[425px] bg-gradient-to-br ${activeProduct.color} ${activeProduct.borderColor} ${activeProduct.glow} hover:border-white/10`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg border bg-bg-primary border-border-secondary shadow-md">
                        <span className={activeProduct.accentColor}>
                          {activeProduct.icon}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {activeProduct.metrics.map((metric) => (
                          <span 
                            key={metric}
                            className={`text-[9.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${activeProduct.badgeColor}`}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-text-primary tracking-tight group-hover/card:text-blue-400 transition-colors duration-200">
                      {activeProduct.title}
                    </h3>
                    <p className={`text-[11.5px] sm:text-[12.5px] font-semibold uppercase tracking-wider mt-0.5 ${activeProduct.accentColor}`}>
                      {activeProduct.subtitle}
                    </p>

                    {/* Highlights List */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-col gap-2 mt-4 pt-4 border-t border-border-secondary/20"
                    >
                      {activeProduct.highlights.map((highlight) => (
                        <motion.div 
                          key={highlight}
                          variants={chipVariants}
                          className="flex items-center gap-2.5 text-[12.5px] sm:text-[13.5px] text-text-secondary font-medium"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-current ${activeProduct.accentColor} opacity-80`} />
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div>
                    {/* Precise Inline Workflow Timeline */}
                    <div className="relative flex items-center justify-between w-full mt-4 p-3.5 bg-bg-primary/60 border border-border-secondary/35 rounded-xl px-4.5 shadow-inner">
                      {activeProduct.workflow.map((step, idx) => {
                        const isCompleted = idx < workflowStep;
                        const isActiveStep = idx === workflowStep;
                        
                        return (
                          <React.Fragment key={step}>
                            {/* Node bubble and its absolute centered label */}
                            <div className="relative flex flex-col items-center z-10">
                              {/* Circle Bubble bubble */}
                              <motion.div
                                className="w-5.5 h-5.5 rounded-full flex items-center justify-center border text-[9px] font-bold bg-bg-primary transition-all duration-300"
                                animate={{
                                  scale: isActiveStep ? 1.15 : 1.0,
                                  borderColor: isCompleted || isActiveStep ? activeProduct.accentHex : "rgba(255, 255, 255, 0.15)",
                                  boxShadow: isActiveStep 
                                    ? `0 0 14px ${activeProduct.accentHex}` 
                                    : isCompleted
                                    ? `0 0 6px ${activeProduct.accentHex}80`
                                    : "0 0 0px transparent",
                                  color: isCompleted || isActiveStep ? activeProduct.accentHex : "rgba(255, 255, 255, 0.35)"
                                }}
                                transition={{ 
                                  type: "spring" as const, 
                                  stiffness: 220, 
                                  damping: 20,
                                  delay: isActiveStep ? 0.35 : 0 
                                }}
                              >
                                {isCompleted ? (
                                  <svg className="w-2.5 h-2.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <span>{idx + 1}</span>
                                )}
                              </motion.div>
                              
                              {/* Absolute Positioned text label centered directly below node */}
                              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-[65px] sm:w-[80px] text-center">
                                <span 
                                  className="text-[8.5px] sm:text-[9.5px] font-bold tracking-wide leading-tight transition-colors duration-300 block"
                                  style={{
                                    color: isCompleted || isActiveStep ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.3)'
                                  }}
                                >
                                  {step}
                                </span>
                              </div>
                            </div>

                            {/* Connector Line: renders ONLY between adjacent node elements in flow */}
                            {idx < activeProduct.workflow.length - 1 && (
                              <div className="flex-1 h-[2px] bg-border-secondary/25 relative mx-1.5 rounded-full overflow-hidden z-0">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: activeProduct.accentHex }}
                                  initial={{ width: "0%" }}
                                  animate={{ 
                                    width: idx < workflowStep ? "100%" : "0%" 
                                  }}
                                  transition={{ 
                                    type: "tween", 
                                    ease: "easeInOut", 
                                    duration: 0.95
                                  }}
                                />
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </a>

        {/* Platform Selector Indicators */}
        <div className="flex items-center gap-1.5 p-1 bg-bg-elevated/45 border border-border-secondary/35 rounded-xl backdrop-blur-md relative z-10">
          {products.map((prod, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveIndex(idx)}
                className="relative px-4 py-2 rounded-lg text-[10.5px] sm:text-[11.5px] font-bold tracking-wider uppercase transition-colors duration-300 select-none outline-none cursor-pointer"
                style={{
                  color: isSelected ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.4)'
                }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-indicator-bg"
                    className="absolute inset-0 rounded-lg border bg-white/5"
                    style={{
                      color: prod.accentHex,
                      borderColor: `${prod.accentHex}40`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{prod.title}</span>
              </button>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
