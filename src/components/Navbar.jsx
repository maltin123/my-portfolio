import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
