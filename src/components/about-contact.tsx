"use client";

import { useState } from "react";
import Image from "next/image";

export function EngineeringPhilosophySection() {
  return (
    <section id="philosophy" className="py-16 sm:py-24 border-b border-border-primary overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Profile */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-bg-secondary/40 border border-border-primary/40 relative shadow-lg">
              <Image
                src="/images/profile.webp"
                alt="Dashrath Bhil"
                fill
                className="object-cover object-top"
                priority
                quality={90}
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-text-primary tracking-tight">Dashrath Bhil</h3>
              <p className="text-[15px] text-blue-400 mt-1 font-medium">Backend Software Engineer</p>
              <p className="text-[14px] sm:text-[15px] text-text-secondary mt-2.5 leading-relaxed max-w-xs">
                Translating complex business operations into scalable software systems.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8 lg:pt-2">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-primary tracking-tight mb-6 leading-tight">
                How I Think
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[16px] text-text-secondary leading-relaxed max-w-3xl">
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
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                Core Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4.5">
                {[
                  "Business-first Architecture",
                  "Domain-driven Thinking",
                  "Configurable Rule Engines",
                  "Scalable Data Models",
                  "Workflow Automation",
                  "API-first Design",
                  "Performance Optimization",
                  "Long-term Maintainability"
                ].map(principle => (
                  <div key={principle} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-sm bg-blue-500/80 shrink-0" />
                    <span className="text-[14px] text-slate-300 font-medium">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProfessionalExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-border-primary bg-bg-secondary/10">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <h2 className="text-base sm:text-[17px] font-bold text-slate-200 uppercase tracking-[0.15em] mb-12">
          Professional Experience
        </h2>

        <div className="relative border-l border-border-secondary/50 pl-7 sm:pl-10 ml-2 sm:ml-4">
          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start mb-8">
            <a
              href="https://azentratech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 mt-1 hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-lg block"
              aria-label="Visit Azentra Technologies"
            >
              <Image
                src="/images/logos/azentra_logo.webp"
                alt="Azentra Technologies"
                width={200}
                height={80}
                className="h-12 sm:h-[56px] w-auto object-contain"
                priority
              />
            </a>

            <div className="flex-1">
              <h3 className="text-xl sm:text-[22px] font-bold text-text-primary tracking-tight mb-1">
                Backend Software Engineer
              </h3>
              <p className="text-[15px] font-medium text-slate-300 mb-3">
                Azentra Technologies
              </p>

              <div className="mb-4">
                <span className="text-[12.5px] font-mono text-slate-400 tracking-wider bg-bg-secondary/40 px-3 py-1.5 rounded-md border border-border-secondary/30">
                  2024 — Present
                </span>
              </div>

              <p className="text-[14.5px] sm:text-[15.5px] text-text-secondary leading-relaxed max-w-3xl line-clamp-3 mb-5">
                Architecting enterprise SaaS platforms across utilities, finance, lending, and accounting domains. My responsibilities focus on translating complex operations into scalable, multi-tenant backend architecture and automating critical workflows.
              </p>

              <a
                href="https://azentratech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-[13.5px] font-semibold text-slate-300 hover:text-blue-400 transition-colors duration-300 w-fit outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-md"
              >
                Visit Company Website
                <svg className="w-[14px] h-[14px] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 19L20 5M20 5v10M20 5H10" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-border-secondary/20">
            {["Enterprise SaaS", "Workflow Automation", "Financial Systems", "Backend Architecture"].map(skill => (
              <div key={skill} className="px-4 py-3.5 rounded-xl border border-border-secondary/35 bg-bg-elevated/30 backdrop-blur-sm flex items-center justify-center text-center hover:border-blue-500/40 hover:bg-bg-elevated/60 transition-colors duration-300">
                <span className="text-[13px] font-semibold text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string, email?: string, message?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!formData.message.trim()) newErrors.message = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Side */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-primary tracking-tight mb-5 leading-tight">
              Let's Build Something Great
            </h2>
            <p className="text-[15px] sm:text-[16.5px] text-text-secondary leading-relaxed max-w-2xl mb-10">
              Looking for someone to design scalable backend systems, automate complex operational workflows, or build production software? I'd love to hear about your project or opportunity.
            </p>

            <div className="max-w-2xl">
              {status === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center border border-emerald-500/20 bg-emerald-500/5 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[15px] text-text-secondary font-medium tracking-wide">Message sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full bg-[#111111]/80 border border-border-secondary/40 rounded-xl px-5 py-4 text-[14px] text-text-primary placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                      {errors.name && <p className="text-red-400 text-[11px] mt-1.5 ml-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email Address"
                        className="w-full bg-[#111111]/80 border border-border-secondary/40 rounded-xl px-5 py-4 text-[14px] text-text-primary placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                      {errors.email && <p className="text-red-400 text-[11px] mt-1.5 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message..."
                      className="w-full bg-[#111111]/80 border border-border-secondary/40 rounded-xl px-5 py-4 text-[14px] text-text-primary placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-[11px] mt-1.5 ml-1">{errors.message}</p>}
                  </div>

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-[14.5px] hover:bg-blue-500 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 min-w-[160px]"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 xl:col-span-4 lg:pt-2">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-8">
              Contact Details
            </h4>
            <div className="flex flex-col gap-8">
              <a href="mailto:dashrathbhil.in@gmail.com" className="group flex items-start gap-4">
                <div className="mt-0.5 p-2 rounded-lg bg-bg-secondary/30 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all border border-border-secondary/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] font-medium text-slate-400 uppercase tracking-wider">Email</span>
                  <span className="text-[16px] font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">dashrathbhil.in@gmail.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/dashrathbhil" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <div className="mt-0.5 p-2 rounded-lg bg-bg-secondary/30 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all border border-border-secondary/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] font-medium text-slate-400 uppercase tracking-wider">LinkedIn</span>
                  <span className="text-[16px] font-semibold text-slate-200 group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    Connect on LinkedIn <span className="text-[18px] leading-none mb-0.5">&rarr;</span>
                  </span>
                </div>
              </a>
              <a href="https://github.com/dashrathbhil" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <div className="mt-0.5 p-2 rounded-lg bg-bg-secondary/30 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all border border-border-secondary/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] font-medium text-slate-400 uppercase tracking-wider">GitHub</span>
                  <span className="text-[16px] font-semibold text-slate-200 group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    View GitHub <span className="text-[18px] leading-none mb-0.5">&rarr;</span>
                  </span>
                </div>
              </a>
              <a href="https://api.whatsapp.com/send?phone=919638028505&text=Hi%20Dashrath!%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect%20regarding%20your%20work." target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <div className="mt-0.5 p-2 rounded-lg bg-bg-secondary/30 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all border border-border-secondary/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] font-medium text-slate-400 uppercase tracking-wider">WhatsApp</span>
                  <span className="text-[16px] font-semibold text-slate-200 group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    Start a Conversation <span className="text-[18px] leading-none mb-0.5">&rarr;</span>
                  </span>
                </div>
              </a>
              <a href="/Dashrath_Bhil_Backend_Software_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer" download className="group flex items-start gap-4">
                <div className="mt-0.5 p-2 rounded-lg bg-bg-secondary/30 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all border border-border-secondary/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] font-medium text-slate-400 uppercase tracking-wider">Resume</span>
                  <span className="text-[16px] font-semibold text-slate-200 group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    Download Resume <span className="text-[18px] leading-none mb-0.5">&rarr;</span>
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 mt-2">
                <div className="mt-1 p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] font-medium text-slate-400 uppercase tracking-wider">Availability</span>
                  <span className="text-[15px] font-medium text-slate-200">Open to Backend Software Opportunities</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border-primary/40 py-8">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col items-center justify-center gap-1.5 text-center">
        <p className="text-[14px] font-medium text-slate-300">
          &copy; {currentYear} Dashrath Bhil
        </p>
        <p className="text-[12.5px] text-slate-500 max-w-2xl mx-auto">
          Built with Next.js, TypeScript, and a passion for solving complex backend problems.
        </p>
      </div>
    </footer>
  );
}
