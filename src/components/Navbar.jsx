import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${scrolled ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-subtle" : "bg-transparent border-b border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#home" className="hover:scale-105 transition-transform">
          <Logo className="h-9 w-auto text-body" />
        </a>

        {/* desktop links */}
        <div className="hidden md:flex gap-4 md:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`
                relative text-sm font-medium tracking-wide
                transition-colors duration-300
                ${active === link.href ? "text-accent" : "text-muted"}
                hover:text-accent
              `}
            >
              {link.name}
              {active === link.href && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
              )}
            </a>
          ))}
        </div>

        {/* desktop toggle + mobile hamburger */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-6 h-6 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[2px] bg-body rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-[2px] bg-body rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[2px] bg-body rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* mobile sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 z-50 bg-[var(--nav-bg)] backdrop-blur-xl border-l border-subtle md:hidden flex flex-col p-8"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMenuOpen(false)} className="text-body">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg font-medium tracking-wide transition-colors duration-300 ${active === link.href ? "text-accent" : "text-muted"} hover:text-accent`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3 text-muted text-sm">
                <span>Theme</span>
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
