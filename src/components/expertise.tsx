"use client";

import React from "react";
import { Section, SectionHeader } from "@/components/ui/section";

const expertiseData = [
  {
    title: "Enterprise SaaS Platforms",
    desc: "Designing scalable backend platforms that support complex business operations, configurable workflows, and enterprise-grade architecture.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Multi-Tenant Architecture",
    desc: "Designing secure multi-tenant systems with isolated business data, configurable permissions, and scalable organizational structures.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Business Rule Engines",
    desc: "Engineering configurable decision engines that automate pricing, approvals, validations, workflow routing, financial calculations, and operational business logic.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Database Design",
    desc: "Designing normalized relational database architectures optimized for scalability, maintainability, and high-performance business applications.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "Workflow Automation",
    desc: "Building automated backend workflows that eliminate manual operations through event-driven processing, scheduled jobs, intelligent automation, and business orchestration.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
      </svg>
    )
  },
  {
    title: "API Integrations",
    desc: "Integrating enterprise applications with cloud services, document platforms, communication systems, storage providers, payment services, and external business APIs.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2" />
      </svg>
    )
  },
  {
    title: "Background Processing",
    desc: "Engineering asynchronous processing pipelines using queues, schedulers, workers, and event-driven services for scalable backend operations.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Financial Systems",
    desc: "Building backend systems supporting accounting, invoicing, reconciliation, commission management, payment workflows, operational finance, and financial reporting.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1" />
      </svg>
    )
  }
];

export function EngineeringExpertiseSection() {
  return (
    <section id="expertise" className="py-12 sm:py-16 border-b border-border-primary overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-base sm:text-[17px] font-bold text-slate-200 uppercase tracking-[0.15em] mb-4">
            Core Capabilities
          </h2>
          <p className="text-base sm:text-[17px] text-slate-400 leading-[1.7] max-w-3xl">
            Core technical capabilities developed through building scalable software platforms, enterprise applications, workflow automation, and production backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl border border-border-secondary/35 bg-bg-elevated/40 backdrop-blur-md hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_4px_25px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out flex flex-col items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                {item.icon}
              </div>
              <div className="space-y-1.5 min-w-0">
                <h3 className="text-[14px] font-bold text-text-primary tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-[12.5px] text-text-secondary leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
