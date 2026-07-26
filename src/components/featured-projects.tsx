"use client";

import React from "react";

const ArrowIcon = () => (
  <svg
    className="w-[15px] h-[15px] ml-1.5 transition-transform duration-300 group-hover/cta:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const IllustrationNode = ({ x, y, label, delay = 0 }: { x: number, y: number, label: string, delay?: number }) => (
  <g className="animate-float" style={{ animationDelay: `${delay}s` }}>
    <rect x={x - 44} y={y - 12} width="88" height="24" rx="6" fill="#0B1121" stroke="rgba(59,130,246,0.3)" strokeWidth="1" className="group-hover:stroke-blue-400/60 transition-colors duration-500" />
    <text x={x} y={y + 3} textAnchor="middle" fill="rgba(147,197,253,0.85)" fontSize="8" fontWeight="600" letterSpacing="0.05em">{label}</text>
  </g>
);

const IllustrationPath = ({ x1, y1, x2, y2 }: { x1: number, y1: number, x2: number, y2: number }) => (
  <path 
    d={`M ${x1} ${y1} C ${(x1+x2)/2} ${y1}, ${(x1+x2)/2} ${y2}, ${x2} ${y2}`} 
    stroke="rgba(59,130,246,0.2)" 
    strokeWidth="1.5" 
    fill="none" 
    className="group-hover:stroke-blue-500/50 transition-colors duration-500"
  />
);

const BaseIllustration = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-44 sm:h-48 bg-[#050810] relative overflow-hidden rounded-t-2xl border-b border-border-secondary/40 group-hover:bg-[#080d1a] transition-colors duration-500">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700" />
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet">
      {children}
    </svg>
  </div>
);

const AmslWorkflow = () => (
  <BaseIllustration>
    <IllustrationPath x1={104} y1={60} x2={156} y2={110} />
    <IllustrationPath x1={104} y1={160} x2={156} y2={110} />
    <IllustrationPath x1={244} y1={110} x2={296} y2={60} />
    <IllustrationPath x1={244} y1={110} x2={296} y2={160} />
    <IllustrationPath x1={200} y1={60} x2={200} y2={98} />
    <IllustrationPath x1={200} y1={160} x2={200} y2={122} />
    <IllustrationPath x1={244} y1={110} x2={296} y2={110} />

    <IllustrationNode x={60} y={60} label="SUPPLIER" delay={0} />
    <IllustrationNode x={200} y={60} label="MATRIX" delay={0.2} />
    <IllustrationNode x={340} y={60} label="CONTRACT" delay={0.4} />
    <IllustrationNode x={60} y={160} label="BROKER" delay={0.5} />
    <IllustrationNode x={200} y={160} label="COMMISSION" delay={0.7} />
    <IllustrationNode x={340} y={160} label="LEDGER" delay={0.9} />
    <IllustrationNode x={200} y={110} label="QUOTE ENGINE" delay={1} />
    <IllustrationNode x={340} y={110} label="CUSTOMER" delay={1.2} />
  </BaseIllustration>
);

const AucWorkflow = () => (
  <BaseIllustration>
    <IllustrationPath x1={104} y1={110} x2={156} y2={110} />
    <IllustrationPath x1={244} y1={110} x2={296} y2={60} />
    <IllustrationPath x1={244} y1={110} x2={296} y2={110} />
    <IllustrationPath x1={244} y1={110} x2={296} y2={160} />
    <IllustrationPath x1={296} y1={160} x2={244} y2={160} />
    <IllustrationPath x1={156} y1={160} x2={104} y2={160} />
    
    <IllustrationNode x={60} y={110} label="CASE" delay={0} />
    <IllustrationNode x={200} y={110} label="ASSIGN ENGINE" delay={0.2} />
    <IllustrationNode x={340} y={60} label="FIELD AGENT" delay={0.4} />
    <IllustrationNode x={340} y={110} label="SITE VISIT" delay={0.6} />
    <IllustrationNode x={340} y={160} label="RECOVERY" delay={0.8} />
    <IllustrationNode x={200} y={160} label="INVOICE" delay={1} />
    <IllustrationNode x={60} y={160} label="COMMISSION" delay={1.2} />
  </BaseIllustration>
);

const TrkWorkflow = () => (
  <BaseIllustration>
    <IllustrationPath x1={104} y1={60} x2={156} y2={60} />
    <IllustrationPath x1={244} y1={60} x2={296} y2={60} />
    <IllustrationPath x1={296} y1={60} x2={340} y2={98} />
    <IllustrationPath x1={104} y1={160} x2={156} y2={160} />
    <IllustrationPath x1={244} y1={160} x2={296} y2={160} />
    <IllustrationPath x1={296} y1={160} x2={340} y2={122} />
    
    <IllustrationNode x={60} y={60} label="BROKER" delay={0} />
    <IllustrationNode x={200} y={60} label="APPLICATION" delay={0.2} />
    <IllustrationNode x={340} y={60} label="APPROVAL" delay={0.4} />
    <IllustrationNode x={60} y={160} label="INVESTOR" delay={0.1} />
    <IllustrationNode x={200} y={160} label="ALLOCATION" delay={0.3} />
    <IllustrationNode x={340} y={160} label="LOAN" delay={0.5} />
    <IllustrationNode x={340} y={110} label="EMI TRACKING" delay={0.7} />
  </BaseIllustration>
);

const AccountWorkflow = () => (
  <BaseIllustration>
    <IllustrationPath x1={104} y1={60} x2={156} y2={60} />
    <IllustrationPath x1={244} y1={60} x2={296} y2={60} />
    <IllustrationPath x1={104} y1={160} x2={156} y2={160} />
    <IllustrationPath x1={244} y1={160} x2={296} y2={160} />
    <IllustrationPath x1={296} y1={60} x2={340} y2={98} />
    <IllustrationPath x1={296} y1={160} x2={340} y2={122} />
    
    <IllustrationNode x={60} y={60} label="INVENTORY" delay={0} />
    <IllustrationNode x={200} y={60} label="PURCHASE ORDER" delay={0.2} />
    <IllustrationNode x={340} y={60} label="INVOICE" delay={0.4} />
    <IllustrationNode x={60} y={160} label="BANK" delay={0.1} />
    <IllustrationNode x={200} y={160} label="RECONCILE" delay={0.3} />
    <IllustrationNode x={340} y={160} label="LEDGER" delay={0.5} />
    <IllustrationNode x={340} y={110} label="REPORTS" delay={0.7} />
  </BaseIllustration>
);

const featuredProjects = [
  {
    id: "amsl",
    name: "AMSL Broker Portal",
    positioning: "Enterprise SaaS for UK Energy Brokers",
    description: "A multi-tenant SaaS platform connecting suppliers, agencies, brokers, customers, quotations, contracts, commissions, and operational workflows.",
    domains: ["Enterprise SaaS", "Utilities", "B2B Automation"],
    link: "#project-amsl",
    Illustration: AmslWorkflow
  },
  {
    id: "auc",
    name: "AUC Debt Recovery",
    positioning: "Automated Debt Collection Platform",
    description: "A specialized debt collection platform driving automated case assignment, field agent routing, evidence capture, and recovery outcome tracking across distributed teams.",
    domains: ["Finance", "Debt Recovery", "Workflow Automation"],
    link: "#project-auc",
    Illustration: AucWorkflow
  },
  {
    id: "trk",
    name: "TRK Lending System",
    positioning: "End-to-End Lending Finance Platform",
    description: "A dedicated lending system managing broker submissions, KYC verification, complex loan schedules, EMI tracking, and investor fund allocations.",
    domains: ["Finance", "Lending", "Workflow Automation"],
    link: "#project-trk",
    Illustration: TrkWorkflow
  },
  {
    id: "account",
    name: "Operational Accounting System",
    positioning: "Double-Entry Financial Tracking",
    description: "A dedicated financial platform powering double-entry accounting, real-time bank reconciliation, supplier purchases, and complex inventory management operations.",
    domains: ["Accounting", "Finance", "Inventory"],
    link: "#project-account",
    Illustration: AccountWorkflow
  }
];

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="py-10 sm:py-14 border-b border-border-primary overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-base sm:text-[17px] font-bold text-slate-200 uppercase tracking-[0.15em] mb-2.5">
            Featured Projects
          </h2>
          <p className="text-base sm:text-[17px] text-slate-400 leading-[1.7] max-w-3xl">
            A selection of production software platforms engineered to solve complex business problems across enterprise SaaS, finance, utilities, lending, and workflow automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-border-secondary/35 bg-bg-elevated/40 backdrop-blur-md hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_4px_30px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out flex flex-col h-full overflow-hidden"
            >
              <project.Illustration />
              
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="mb-2.5 h-[48px]">
                  <h3 className="text-xl sm:text-[22px] font-bold text-text-primary tracking-tight mb-0.5 group-hover:text-blue-400 transition-colors duration-200 truncate">
                    {project.name}
                  </h3>
                  <p className="text-[14px] font-medium text-blue-400/90 truncate">
                    {project.positioning}
                  </p>
                </div>

                <div className="h-[60px] mb-3.5">
                  <p className="text-[14px] text-text-secondary leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-2 h-[26px] overflow-hidden">
                  {project.domains.map((domain) => (
                    <span
                      key={domain}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium border border-border-secondary/50 bg-bg-primary/50 text-slate-300 whitespace-nowrap"
                    >
                      {domain}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-border-secondary/30">
                  <a
                    href={project.link}
                    className="group/cta inline-flex items-center text-[13.5px] font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    How It Was Built
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
