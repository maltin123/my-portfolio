import { useEffect, useState } from "react";
export default function Navbar() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  const links = [
    {
      name: "About",
      href: "about",
    },
    {
      name: "Skills",
      href: "skills",
    },
    {
      name: "Projects",
      href: "projects",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-widest text-white"
        >
          MAN
        </a>

        {/* Menu */}
        <div className="flex gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`
transition
duration-300

${active === link.href ? "text-lime-300" : "text-white/70"}

hover:text-lime-300
`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
