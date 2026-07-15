import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

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

        <div className="max-[914px]:hidden flex gap-4 md:gap-8">
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
