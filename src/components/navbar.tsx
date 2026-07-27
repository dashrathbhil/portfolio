"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#featured-projects" },
  { label: "Experience", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(href) as HTMLElement;
      if (el) {
        // Offset for the navbar height (approx 64px)
        const y = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150); // wait for menu to start closing
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      
      let current = pathname === "/" ? "home" : "";
      // Trigger point slightly below the navbar to feel natural
      const triggerPoint = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section === "home") continue;
        const el = document.getElementById(section);
        if (el && el.offsetTop <= triggerPoint) {
          current = section;
        }
      }
      
      // If at absolute bottom of page, highlight contact
      if (pathname === "/" && window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = "contact";
      }

      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#050810]/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <nav className="flex items-center justify-between h-14 sm:h-16" id="main-nav">

          {/* ── Left: Identity ── */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group shrink-0 outline-none rounded-md focus-visible:ring-2 focus-visible:ring-blue-500/50"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <span className="text-black font-bold text-[11px] leading-none tracking-wide">
                DB
              </span>
            </div>
            <span className="text-[14px] font-semibold text-slate-200 tracking-tight transition-colors duration-300 group-hover:text-white">
              Dashrath Bhil
            </span>
          </a>

          {/* ── Center: Navigation Links — Desktop only ── */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 sm:px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:bg-white/[0.03] ${
                    isActive 
                      ? "text-blue-400" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── Right: Socials / Specific Page Title — Desktop only ── */}
          <div className="hidden md:flex items-center gap-1 shrink-0">
            {pathname === "/amsl" ? (
              <span className="text-[14px] font-semibold text-slate-200">AMSL Broker Portal</span>
            ) : (
              <>
                <a
                  href="mailto:dashrathbhil.in@gmail.com"
                  className="p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/[0.05] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                  aria-label="Email"
                >
                  <svg className="w-[17px] h-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/dashrathbhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/[0.05] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                  aria-label="GitHub"
                >
                  <svg className="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/dashrathbhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/[0.05] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                  aria-label="LinkedIn"
                >
                  <svg className="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </>
            )}
          </div>

          {/* ── Right: Hamburger Toggle — Mobile only ── */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-slate-300 hover:text-white transition-colors focus:outline-none rounded-md focus-visible:ring-2 focus-visible:ring-blue-500/50"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.25">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </nav>
      </div>

      {/* ── Mobile Menu Dropdown Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-white/[0.05] bg-[#050810]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {/* Navigation Links */}
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`relative px-4 py-3 text-[14.5px] font-semibold transition-all duration-300 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                        isActive
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
              
              {/* Socials Link Row */}
              <div className="border-t border-white/[0.05] pt-5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connect</span>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:dashrathbhil.in@gmail.com"
                    className="p-2 bg-white/[0.03] rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/dashrathbhil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/[0.03] rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/dashrathbhil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/[0.03] rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
