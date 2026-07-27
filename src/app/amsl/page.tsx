"use client";

import React, { useState, useEffect } from 'react';

export default function AMSLCaseStudy() {
  const [activeSection, setActiveSection] = useState("business-overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { 
        root: null,
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const getLinkClasses = (id: string) => 
    `flex items-center gap-4 transition-colors ${
      activeSection === id 
        ? "text-white font-semibold" 
        : "text-slate-500 hover:text-slate-300"
    }`;

  const getNumberClasses = (id: string) => 
    `font-mono text-xs ${
      activeSection === id ? "text-slate-500" : "text-slate-600"
    }`;

  return (
    <div className="min-h-screen bg-bg-primary text-slate-200 font-sans pt-28 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row gap-12 xl:gap-24">
        
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
          <div className="sticky top-32 flex flex-col gap-5 text-[13.5px] font-medium tracking-wide">
            <a href="#business-overview" onClick={(e) => scrollToSection(e, 'business-overview')} className={getLinkClasses('business-overview')}>
              <span className={getNumberClasses('business-overview')}>01</span> Business Overview
            </a>
            <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className={getLinkClasses('how-it-works')}>
              <span className={getNumberClasses('how-it-works')}>02</span> How The Platform Works
            </a>
            <a href="#engineering-challenges" onClick={(e) => scrollToSection(e, 'engineering-challenges')} className={getLinkClasses('engineering-challenges')}>
              <span className={getNumberClasses('engineering-challenges')}>03</span> Engineering Challenges
            </a>
            <a href="#platform-architecture" onClick={(e) => scrollToSection(e, 'platform-architecture')} className={getLinkClasses('platform-architecture')}>
              <span className={getNumberClasses('platform-architecture')}>04</span> Platform Architecture
            </a>
            <a href="#product-tour" onClick={(e) => scrollToSection(e, 'product-tour')} className={getLinkClasses('product-tour')}>
              <span className={getNumberClasses('product-tour')}>05</span> Product Tour
            </a>
            <a href="#tech-integrations" onClick={(e) => scrollToSection(e, 'tech-integrations')} className={getLinkClasses('tech-integrations')}>
              <span className={getNumberClasses('tech-integrations')}>06</span> Technology & Integrations
            </a>
            <a href="#engineering-decisions" onClick={(e) => scrollToSection(e, 'engineering-decisions')} className={getLinkClasses('engineering-decisions')}>
              <span className={getNumberClasses('engineering-decisions')}>07</span> Engineering Decisions
            </a>
            <a href="#reflection" onClick={(e) => scrollToSection(e, 'reflection')} className={getLinkClasses('reflection')}>
              <span className={getNumberClasses('reflection')}>08</span> Reflection
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-32 pb-32 min-w-0">
          
          {/* Hero Section */}
          <section className="flex flex-col gap-7 w-full max-w-4xl items-start">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white">AMSL Broker Portal</h1>
              <h2 className="text-xl sm:text-[22px] text-slate-400 font-medium tracking-tight mt-1">Enterprise SaaS Platform for UK Utility Brokers</h2>
            </div>
            
            <p className="text-[16px] sm:text-[17px] text-slate-300 leading-[1.8] mt-2">
              Utility brokerage businesses rely on supplier pricing, customer quotations, supplier agreements, contracts, and commission calculations as part of their daily operations. As those operations grow, managing them through disconnected systems becomes increasingly difficult. AMSL Broker Portal was built to bring those business processes together into one platform, giving brokerage businesses a consistent way to manage their operations from beginning to end.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-4 w-full max-w-[520px]">
              <div className="p-4 rounded-xl bg-bg-elevated/30 border border-border-secondary/50">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Role</p>
                <p className="text-[13.5px] font-semibold text-white">Backend Software Engineer</p>
              </div>
              <div className="p-4 rounded-xl bg-bg-elevated/30 border border-border-secondary/50">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Industry</p>
                <p className="text-[13.5px] font-semibold text-white">UK Utility Brokerage</p>
              </div>
              <div className="p-4 rounded-xl bg-bg-elevated/30 border border-border-secondary/50">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Platform</p>
                <p className="text-[13.5px] font-semibold text-white">Enterprise SaaS</p>
              </div>
              <div className="p-4 rounded-xl bg-bg-elevated/30 border border-border-secondary/50">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Primary Focus</p>
                <p className="text-[13.5px] font-semibold text-white">Backend Architecture</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-2">
              {["Multi-Tenant SaaS", "Supplier Price Matrix", "Quote Engine", "Workflow Automation", "Document Automation", "Commission Management"].map(tag => (
                <div key={tag} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-elevated/20 border border-border-secondary/40">
                  <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[12.5px] font-medium text-slate-300">{tag}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="px-6 py-3 bg-white text-black text-[13.5px] font-bold rounded-lg hover:bg-slate-200 transition-colors">
                Explore Business Workflow
              </button>
              <button className="px-6 py-3 bg-transparent border border-border-secondary text-white text-[13.5px] font-bold rounded-lg hover:bg-white/[0.05] transition-colors">
                View Product Tour
              </button>
            </div>
          </section>

          {/* Business Overview */}
          <section id="business-overview" className="flex flex-col gap-12 scroll-mt-32">
            <div className="flex flex-col gap-3">
              <h3 className="text-[26px] font-bold text-white tracking-tight">Business Overview</h3>
              <p className="text-[15px] text-slate-400 font-medium">Understanding the business before understanding the software.</p>
            </div>

            <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] text-slate-300 leading-[1.8] max-w-4xl">
              <p>
                A utility brokerage business sits between energy suppliers and business customers. Its responsibility is to compare supplier offerings, prepare accurate quotations, manage contracts, and ensure commissions are correctly recorded once agreements become active. Every quotation depends on supplier pricing, commercial rules, and customer requirements, making accuracy a critical part of the business.
              </p>
              <p>
                As the number of suppliers, agencies, customers, and contracts increases, operational complexity grows with it. Information passes through multiple business processes before a customer reaches a completed contract. Without a connected platform, maintaining consistency becomes increasingly difficult, manual administration grows, and operational visibility becomes harder to maintain across the business.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[18px] font-bold text-white">Brokerage Lifecycle</h4>
                <p className="text-[13.5px] text-slate-400">The operational journey managed by the AMSL Broker Portal.</p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 overflow-x-auto pb-4 pt-1 snap-x w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {[
                  { name: "Supplier", desc: "Publishes commercial agreements and utility pricing available to brokerage businesses." },
                  { name: "Supplier Products", desc: "Defines the utility services and contract options offered by each supplier." },
                  { name: "Price Matrix", desc: "Stores supplier pricing and commercial rules used during quotation generation." },
                  { name: "Agency", desc: "Represents brokerage organisations operating within the platform and managing their business activities." },
                  { name: "Customer", desc: "Businesses requesting quotations and progressing through the brokerage lifecycle." },
                  { name: "Quotation", desc: "Compares supplier pricing and prepares commercial proposals based on customer requirements." },
                  { name: "Contract", desc: "Captures accepted quotations and records the commercial agreement between customer and supplier." },
                  { name: "Commission", desc: "Calculates brokerage earnings according to supplier agreements and completed contracts." },
                  { name: "Business Operations", desc: "Supports ongoing operational activities including user management, permissions, documents, tickets, business configuration and day-to-day platform administration." },
                ].map((item, index, arr) => (
                  <React.Fragment key={item.name}>
                    <div className="flex flex-col gap-2 w-[140px] shrink-0 snap-start">
                      <div className="px-3 py-2.5 rounded-xl bg-bg-elevated/30 border border-border-secondary/40 text-center text-[13px] font-semibold text-white shadow-sm">
                        {item.name}
                      </div>
                      <span className="text-[11.5px] text-slate-400 text-center leading-[1.4] px-1">
                        {item.desc}
                      </span>
                    </div>
                    {index < arr.length - 1 && (
                      <div className="flex items-center justify-center text-slate-600/60 mt-3 shrink-0 px-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              <h4 className="text-[18px] font-bold text-white">Business Value</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                <div className="p-6 rounded-xl bg-bg-elevated/20 border border-border-secondary/30 flex flex-col gap-2.5">
                  <h5 className="text-[14.5px] font-bold text-white">Connected Business Processes</h5>
                  <p className="text-[13.5px] text-slate-400 leading-[1.6]">Information entered once supports multiple business processes, reducing duplicate work and improving operational consistency.</p>
                </div>
                <div className="p-6 rounded-xl bg-bg-elevated/20 border border-border-secondary/30 flex flex-col gap-2.5">
                  <h5 className="text-[14.5px] font-bold text-white">Reliable Quotations</h5>
                  <p className="text-[13.5px] text-slate-400 leading-[1.6]">Supplier pricing and commercial rules are managed centrally to help produce accurate and consistent quotations.</p>
                </div>
                <div className="p-6 rounded-xl bg-bg-elevated/20 border border-border-secondary/30 flex flex-col gap-2.5">
                  <h5 className="text-[14.5px] font-bold text-white">Operational Efficiency</h5>
                  <p className="text-[13.5px] text-slate-400 leading-[1.6]">Structured workflows reduce repetitive administration and support day-to-day brokerage operations.</p>
                </div>
                <div className="p-6 rounded-xl bg-bg-elevated/20 border border-border-secondary/30 flex flex-col gap-2.5">
                  <h5 className="text-[14.5px] font-bold text-white">Business Visibility</h5>
                  <p className="text-[13.5px] text-slate-400 leading-[1.6]">Suppliers, customers, quotations, contracts, commissions, and operational activity can all be managed from one connected platform.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How The Platform Works */}
          {/* How The Platform Works */}
          <section id="how-it-works" className="flex flex-col gap-12 scroll-mt-32">
            <div className="flex flex-col gap-3">
              <h3 className="text-[26px] font-bold text-white tracking-tight">How The Platform Works</h3>
              <p className="text-[15px] text-slate-400 font-medium">Following the complete business journey from the first lead through contract activation and ongoing customer operations.</p>
            </div>

            <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] text-slate-300 leading-[1.8] max-w-4xl">
              <p>
                Every customer relationship within AMSL begins as a lead. Before any quotation can be prepared, the brokerage collects the business information required to search the live market, compare supplier offerings, and identify the most suitable commercial option. Only after a quotation has been accepted and the contractual process is completed does the lead become an active customer.
              </p>
              <p>
                This workflow represents the core operational journey managed by the AMSL Broker Portal.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[18px] font-bold text-white">From Lead to Customer</h4>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full bg-bg-elevated/20 border border-border-secondary/30 rounded-2xl p-8 lg:p-12">
                  {[
                    "Lead Created", "Lead Information Collected", "Live Market Search & Quotation",
                    "Supplier Comparison", "Lead Selects Supplier", "Contract Generated",
                    "Contract Signed", "Lead Converted to Customer", "Commission Schedule Generated", "Business Operations"
                  ].map((step, idx, arr) => (
                    <React.Fragment key={step}>
                      <div className="px-4 py-2.5 rounded-xl bg-[#111622] border border-blue-900/30 text-[13px] font-semibold text-blue-100 shadow-sm whitespace-nowrap">
                        {step}
                      </div>
                      {idx < arr.length - 1 && (
                        <div className="text-slate-600 shrink-0">
                          <svg className="w-4 h-4 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Lead Created", desc: "A new lead enters the platform through manual creation by an agency user or by importing lead data supplied by brokerage partners." },
                    { title: "Lead Information Collected", desc: "Business details, site information, meter information, consumption data and quotation requirements are collected before searching the market." },
                    { title: "Live Market Search & Quotation", desc: "Using the collected information, the platform searches the live market, evaluates supplier pricing and generates quotations that match the lead's requirements." },
                    { title: "Supplier Comparison", desc: "Multiple supplier quotations are presented so commercial offers can be compared before a final decision is made." },
                    { title: "Lead Selects Supplier", desc: "The preferred supplier quotation is selected and becomes the basis for the contractual process." },
                    { title: "Contract Generated", desc: "The platform prepares the contract using the selected supplier quotation and the agreed commercial terms." },
                    { title: "Contract Signed", desc: "The signed contract confirms the agreement between the customer and the supplier, allowing the onboarding process to continue." },
                    { title: "Lead Converted to Customer", desc: "Once the contract has been successfully signed, the lead is automatically converted into an active customer within the platform." },
                    { title: "Commission Schedule Generated", desc: "The platform automatically creates the commission schedule according to the supplier agreement and contractual terms." },
                    { title: "Business Operations", desc: "The customer now moves into normal business operations, including account management, documentation, tickets, permissions and ongoing administration." },
                  ].map(item => (
                    <div key={item.title} className="p-5 rounded-xl bg-bg-elevated/20 border border-border-secondary/30 flex flex-col gap-2">
                      <h5 className="text-[14px] font-bold text-white">{item.title}</h5>
                      <p className="text-[13px] text-slate-400 leading-[1.6]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Engineering Challenges */}
          <section id="engineering-challenges" className="flex flex-col gap-10 scroll-mt-32">
            <h3 className="text-[26px] font-bold text-white tracking-tight">Engineering Challenges</h3>
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="h-[15px] bg-bg-elevated/70 rounded-md w-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-7 rounded-2xl bg-[#1a0f12] border border-[#3b1c20] flex flex-col gap-4 h-[180px] relative overflow-hidden">
                <div className="h-3.5 bg-[#3b1c20] rounded-md w-1/3"></div>
                <div className="h-3.5 bg-[#3b1c20] rounded-md w-full mt-3"></div>
                <div className="h-3.5 bg-[#3b1c20] rounded-md w-[80%]"></div>
                <svg className="absolute bottom-5 right-5 w-7 h-7 text-[#5e2b32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="p-7 rounded-2xl bg-[#1a0f12] border border-[#3b1c20] flex flex-col gap-4 h-[180px] relative overflow-hidden">
                <div className="h-3.5 bg-[#3b1c20] rounded-md w-1/3"></div>
                <div className="h-3.5 bg-[#3b1c20] rounded-md w-full mt-3"></div>
                <div className="h-3.5 bg-[#3b1c20] rounded-md w-[80%]"></div>
                <svg className="absolute bottom-5 right-5 w-7 h-7 text-[#5e2b32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </section>

          {/* Platform Architecture */}
          <section id="platform-architecture" className="flex flex-col gap-10 scroll-mt-32">
            <h3 className="text-[26px] font-bold text-white tracking-tight">Platform Architecture</h3>
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="h-[15px] bg-bg-elevated/70 rounded-md w-full"></div>
              <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[80%]"></div>
            </div>
            <div className="w-full h-[450px] rounded-2xl bg-[#090e16] border border-blue-900/20 flex items-center justify-center mt-4">
              <span className="text-blue-500/40 text-[13px] font-mono">[ System Architecture Diagram Placeholder ]</span>
            </div>
          </section>

          {/* Product Tour */}
          <section id="product-tour" className="flex flex-col gap-20 scroll-mt-32">
            <h3 className="text-[26px] font-bold text-white tracking-tight -mb-8">Product Tour</h3>
            
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              <div className="w-full md:w-[60%] aspect-[16/10] rounded-2xl bg-[#11141a] border border-border-secondary/40 flex items-center justify-center">
                <span className="text-slate-600 text-[13px] font-mono">[ UI Screenshot 1 ]</span>
              </div>
              <div className="w-full md:w-[40%] flex flex-col gap-4">
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[50%]"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-full mt-2"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[90%]"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[80%]"></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
              <div className="w-full md:w-[60%] aspect-[16/10] rounded-2xl bg-[#11141a] border border-border-secondary/40 flex items-center justify-center">
                <span className="text-slate-600 text-[13px] font-mono">[ UI Screenshot 2 ]</span>
              </div>
              <div className="w-full md:w-[40%] flex flex-col gap-4">
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[50%]"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-full mt-2"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[90%]"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[80%]"></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              <div className="w-full md:w-[60%] aspect-[16/10] rounded-2xl bg-[#11141a] border border-border-secondary/40 flex items-center justify-center">
                <span className="text-slate-600 text-[13px] font-mono">[ UI Screenshot 3 ]</span>
              </div>
              <div className="w-full md:w-[40%] flex flex-col gap-4">
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[50%]"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-full mt-2"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[90%]"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[80%]"></div>
              </div>
            </div>
          </section>

          {/* Technology & Integrations */}
          <section id="tech-integrations" className="flex flex-col gap-10 scroll-mt-32 mt-4">
            <h3 className="text-[26px] font-bold text-white tracking-tight">Technology & Integrations</h3>
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1 flex flex-col gap-4 pt-1">
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-full"></div>
                <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[90%]"></div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="h-7 bg-bg-elevated/50 border border-border-secondary/30 rounded-full w-20"></div>
                  <div className="h-7 bg-bg-elevated/50 border border-border-secondary/30 rounded-full w-20"></div>
                  <div className="h-7 bg-bg-elevated/50 border border-border-secondary/30 rounded-full w-24"></div>
                  <div className="h-7 bg-bg-elevated/50 border border-border-secondary/30 rounded-full w-16"></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="h-7 bg-bg-elevated/50 border border-border-secondary/30 rounded-full w-24"></div>
                  <div className="h-7 bg-bg-elevated/50 border border-border-secondary/30 rounded-full w-20"></div>
                </div>
              </div>
              <div className="w-full lg:w-[400px] shrink-0 grid grid-cols-2 gap-5">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square rounded-2xl bg-[#0d1016] border border-border-secondary/30 flex items-center justify-center shadow-lg">
                    <span className="text-blue-500/30 text-[11px] font-mono">[ Integration ]</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Engineering Decisions */}
          <section id="engineering-decisions" className="flex flex-col gap-10 scroll-mt-32">
            <h3 className="text-[26px] font-bold text-white tracking-tight">Engineering Decisions</h3>
            <div className="h-[15px] bg-bg-elevated/70 rounded-md w-[60%] max-w-xl"></div>
            
            <div className="flex flex-col gap-5 mt-2">
              <div className="flex flex-col sm:flex-row rounded-2xl border border-border-secondary/40 overflow-hidden sm:h-32">
                <div className="sm:w-1/3 bg-[#0a1122] border-b sm:border-b-0 sm:border-r border-border-secondary/40 p-6 flex flex-col gap-3 justify-center">
                  <div className="h-3.5 bg-blue-500/20 rounded-md w-1/2"></div>
                  <div className="h-3.5 bg-blue-500/20 rounded-md w-3/4"></div>
                </div>
                <div className="flex-1 bg-[#0d1016] p-6 flex flex-col gap-3.5 justify-center">
                  <div className="h-3.5 bg-bg-elevated/80 rounded-md w-[90%]"></div>
                  <div className="h-3.5 bg-bg-elevated/80 rounded-md w-[80%]"></div>
                  <div className="h-3.5 bg-bg-elevated/80 rounded-md w-[60%]"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row rounded-2xl border border-border-secondary/40 overflow-hidden sm:h-32">
                <div className="sm:w-1/3 bg-[#0a1122] border-b sm:border-b-0 sm:border-r border-border-secondary/40 p-6 flex flex-col gap-3 justify-center">
                  <div className="h-3.5 bg-blue-500/20 rounded-md w-1/2"></div>
                  <div className="h-3.5 bg-blue-500/20 rounded-md w-3/4"></div>
                </div>
                <div className="flex-1 bg-[#0d1016] p-6 flex flex-col gap-3.5 justify-center">
                  <div className="h-3.5 bg-bg-elevated/80 rounded-md w-[90%]"></div>
                  <div className="h-3.5 bg-bg-elevated/80 rounded-md w-[80%]"></div>
                  <div className="h-3.5 bg-bg-elevated/80 rounded-md w-[60%]"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section id="reflection" className="flex flex-col gap-10 scroll-mt-32">
            <h3 className="text-[26px] font-bold text-white tracking-tight">Reflection</h3>
            <div className="w-full max-w-4xl rounded-2xl border border-border-secondary/30 bg-[#0d1016] p-12 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
              <div className="flex flex-col gap-4.5 items-center justify-center max-w-2xl mx-auto py-4">
                <div className="h-[15px] bg-bg-elevated rounded-md w-[95%]"></div>
                <div className="h-[15px] bg-bg-elevated rounded-md w-[90%]"></div>
                <div className="h-[15px] bg-bg-elevated rounded-md w-[100%]"></div>
                <div className="h-[15px] bg-bg-elevated rounded-md w-[75%] mt-1"></div>
              </div>
            </div>
          </section>
          
        </main>
      </div>
    </div>
  );
}
