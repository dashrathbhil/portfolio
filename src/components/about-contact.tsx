"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
export function AboutSection() {
  return (
    <Section id="about" spacing="md" size="wide">
      <SectionHeader 
        title="ABOUT"
        description="Building scalable business software through workflow design, database architecture, and operational thinking."
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Left Side: Profile */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-5">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-bg-secondary/40 border border-border-primary/40 shadow-md relative">
            <Image
              src="/images/profile.webp"
              alt="Dashrath Bhil"
              width={400}
              height={400}
              className="w-full h-full object-cover object-top"
              priority
              quality={90}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary tracking-tight">Dashrath Bhil</h3>
            <p className="text-[13px] text-text-secondary mt-0.5">Backend Software Engineer</p>
            <p className="text-[12px] text-text-muted mt-0.5">Ahmedabad, Gujarat</p>
          </div>
          <div className="flex items-center gap-4.5 pt-1.5">
            <a href="mailto:dashrathbhil.in@gmail.com" className="text-text-muted hover:text-text-primary transition-colors" aria-label="Email">
               <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
            </a>
            <a href="https://github.com/dashrathbhil" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label="GitHub">
               <svg className="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                 <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
               </svg>
            </a>
            <a href="https://linkedin.com/in/dashrathbhil" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label="LinkedIn">
               <svg className="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
               </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="md:col-span-8 lg:col-span-9 space-y-8">
          
          <div className="max-w-3xl space-y-4 text-[14px] sm:text-[14.5px] text-text-secondary leading-relaxed font-normal">
            <p>
              I specialize in building business software for utility brokerage, debt recovery, finance, and accounting operations.
            </p>
            <p>
              My strongest skill is understanding how businesses work behind the scenes and translating those workflows into scalable software systems.
            </p>
            <p>
              I focus on database design, business process modeling, workflow automation, and backend architecture that can support long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="md:col-span-1 border-t border-border-secondary/40 pt-5">
              <h4 className="text-[10px] font-mono text-slate-400/80 uppercase tracking-[0.15em] mb-4">Experience</h4>
              <div className="space-y-5 border-l border-border-primary/50 pl-4">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border-strong/40" />
                  <p className="text-[11px] font-mono text-slate-400 mb-1">2025 — Present</p>
                  <p className="text-[13.5px] font-medium text-text-primary">Backend Software Engineer</p>
                  <p className="text-[12.5px] text-slate-300 mt-0.5">Azentra Technologies</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border-secondary/40" />
                  <p className="text-[11px] font-mono text-slate-400 mb-1">2024 — 2025</p>
                  <p className="text-[13.5px] font-medium text-text-primary">Fullstack Software Engineer Intern</p>
                  <p className="text-[12.5px] text-slate-300 mt-0.5">FramboxxIT Pvt Ltd</p>
                </div>
              </div>
            </div>

            {/* Core Focus */}
            <div className="md:col-span-1 border-t border-border-secondary/40 pt-5">
              <h4 className="text-[10px] font-mono text-slate-400/80 uppercase tracking-[0.15em] mb-4">Core Focus</h4>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {[
                  "Business Process Analysis",
                  "Database Design",
                  "Backend Architecture",
                  "Workflow Automation",
                  "Data Modeling",
                  "System Scalability",
                  "API Integrations",
                  "Operational Software"
                ].map(tech => (
                  <li key={tech} className="text-[12.5px] text-text-secondary/80 flex items-center gap-2 font-normal">
                    <span className="w-1 h-1 rounded-full bg-slate-600 inline-block shrink-0" />
                    <span className="truncate">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}

export function EngineeringApproachSection() {
  const cards = [
    {
      title: "Multi-Tenant Architecture",
      desc: "Supports multiple businesses and agencies within a single platform while maintaining complete data isolation.",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Business Workflow Modeling",
      desc: "Systems are designed around real operational processes including quoting, debt recovery, loan management, invoicing, and financial tracking.",
      icon: (
        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Database Design",
      desc: "Relational database structures optimized for scalability, reporting, audit trails, and long-term business growth.",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Role-Based Access Control",
      desc: "Permission-driven access ensuring users only interact with data and actions relevant to their responsibilities.",
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Third-Party Integrations",
      desc: "Integration with external services including telephony systems, document generation, cloud storage, email delivery, and financial services.",
      icon: (
        <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    }
  ];

  return (
    <Section id="architecture" spacing="md" size="wide">
      <SectionHeader 
        title="Architecture"
        description="Engineering patterns and backend design decisions used across CRM platforms, financial systems, debt recovery software, and accounting applications."
        className="!mb-8 sm:!mb-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border-secondary/40">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className={`p-6 rounded-xl border border-border-secondary/35 bg-[#111111]/40 hover:bg-[#111111]/70 hover:border-border-secondary/60 transition-all duration-300 flex items-start gap-4 ${
              idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="p-2.5 rounded-lg bg-bg-secondary/60 border border-border-secondary/25 shrink-0 flex items-center justify-center">
              {card.icon}
            </div>
            <div className="space-y-1.5 min-w-0">
              <h5 className="text-[14px] font-bold text-text-primary tracking-tight">
                {card.title}
              </h5>
              <p className="text-[12.5px] text-text-secondary leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FlowInline({ text }: { text: string }) {
  return (
    <span className="text-[11px] text-text-secondary font-medium px-2 py-0.5 rounded border border-border-secondary/40 bg-bg-secondary/20">
      {text}
    </span>
  );
}

function FlowArrow() {
  return (
    <span className="text-text-muted/30">
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<{name?: string, email?: string, phone?: string, message?: string, general?: string}>({});

  const validateForm = () => {
    const newErrors: {name?: string, email?: string, phone?: string, message?: string} = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Required";
      isValid = false;
    } else if (formData.message.length > 5000) {
      newErrors.message = "Too long";
      isValid = false;
    }

    const emailTrimmed = formData.email.trim();
    const phoneTrimmed = formData.phone.trim();

    if (!emailTrimmed && !phoneTrimmed) {
      newErrors.email = "Please provide an email or phone number";
      newErrors.phone = "Please provide an email or phone number";
      isValid = false;
    } else {
      if (emailTrimmed && !/^\S+@\S+\.\S+$/.test(emailTrimmed)) {
        newErrors.email = "Invalid email";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (!validateForm()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        const data = await res.json();
        setErrors({ general: data.error || "Something went wrong." });
        setStatus("error");
      }
    } catch {
      setErrors({ general: "Network error. Please try again later." });
      setStatus("error");
    }
  };

  return (
    <Section id="contact" spacing="md" className="mb-8 sm:mb-12" size="wide">
      <SectionHeader 
        title="Let's Connect"
        description="Have a project, business idea, collaboration opportunity, or role to discuss? Send a message and I'll get back to you as soon as possible."
      />
      <div className="rounded-2xl bg-[#111111] p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          {status === "success" ? (
            <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-300 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[14px] text-text-secondary font-medium tracking-wide">Message sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errors.general && (
                <div className="px-4 py-3 rounded-md bg-red-500/10 border border-red-500/20 text-[13px] text-red-400">
                  {errors.general}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[13px] font-medium text-slate-300">Full Name <span className="text-blue-500">*</span></label>
                    {errors.name && <span className="text-[11px] text-red-400">{errors.name}</span>}
                  </div>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={e => {
                      setFormData({...formData, name: e.target.value});
                      if (errors.name) setErrors({...errors, name: undefined});
                    }} 
                    className={`w-full bg-[#18181b] border rounded-lg px-4 py-3 text-[14px] text-text-primary placeholder-slate-500 focus:outline-none focus:bg-[#202024] transition-all ${errors.name ? 'border-red-500/50' : 'border-white/[0.05] focus:border-white/[0.15]'}`}
                    placeholder="Your name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[13px] font-medium text-slate-300">Email Address</label>
                    {errors.email && <span className="text-[11px] text-red-400">{errors.email}</span>}
                  </div>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={e => {
                      setFormData({...formData, email: e.target.value});
                      if (errors.email || errors.phone) setErrors({...errors, email: undefined, phone: undefined});
                    }} 
                    className={`w-full bg-[#18181b] border rounded-lg px-4 py-3 text-[14px] text-text-primary placeholder-slate-500 focus:outline-none focus:bg-[#202024] transition-all ${errors.email ? 'border-red-500/50' : 'border-white/[0.05] focus:border-white/[0.15]'}`}
                    placeholder="your@email.com" 
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[13px] font-medium text-slate-300">Phone Number</label>
                    {errors.phone && <span className="text-[11px] text-red-400">{errors.phone}</span>}
                  </div>
                  <input 
                    type="text" 
                    value={formData.phone} 
                    onChange={e => {
                      setFormData({...formData, phone: e.target.value});
                      if (errors.email || errors.phone) setErrors({...errors, email: undefined, phone: undefined});
                    }} 
                    className={`w-full bg-[#18181b] border rounded-lg px-4 py-3 text-[14px] text-text-primary placeholder-slate-500 focus:outline-none focus:bg-[#202024] transition-all ${errors.phone ? 'border-red-500/50' : 'border-white/[0.05] focus:border-white/[0.15]'}`}
                    placeholder="Your phone number" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[13px] font-medium text-slate-300">Message <span className="text-blue-500">*</span></label>
                  {errors.message && <span className="text-[11px] text-red-400">{errors.message}</span>}
                </div>
                <textarea 
                  rows={4} 
                  value={formData.message} 
                  onChange={e => {
                    setFormData({...formData, message: e.target.value});
                    if (errors.message) setErrors({...errors, message: undefined});
                  }} 
                  className={`w-full bg-[#18181b] border rounded-lg px-4 py-3 text-[14px] text-text-primary placeholder-slate-500 focus:outline-none focus:bg-[#202024] transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/[0.05] focus:border-white/[0.15]'}`}
                  placeholder="Your message..." 
                />
              </div>

              <div className="pt-2">
                <p className="text-[11.5px] text-slate-400 leading-relaxed">
                  Your contact information will only be used to respond to your enquiry and any future communication related to your message.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                <button 
                  disabled={status === "loading"} 
                  type="submit" 
                  className="px-6 py-2.5 rounded-lg bg-[#3b82f6] text-white font-medium text-[14px] hover:bg-[#2563eb] transition-colors disabled:opacity-50 flex items-center justify-center tracking-wide min-w-[140px]"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                <div className="flex items-center gap-5 sm:gap-6">
                  <a href="mailto:dashrathbhil.in@gmail.com" className="text-[13px] text-slate-400 hover:text-white transition-colors">
                    Email
                  </a>
                  <a href="https://github.com/dashrathbhil" target="_blank" rel="noopener noreferrer" className="text-[13px] text-slate-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/dashrathbhil" target="_blank" rel="noopener noreferrer" className="text-[13px] text-slate-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="/Dashrath_Bhil_Backend_Software_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer" download="Dashrath_Bhil_Backend_Software_Engineer_Resume.pdf" className="text-[13px] text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                    Resume ↗
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-primary/30 py-8 text-center">
      <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
        Designed & Built by Dashrath Bhil
      </p>
    </footer>
  );
}
