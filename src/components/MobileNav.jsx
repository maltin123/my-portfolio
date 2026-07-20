import { FaUser, FaCode, FaFolderOpen, FaFileDownload, FaEnvelope } from "react-icons/fa";

const links = [
  { label: "About", href: "#about", icon: FaUser },
  { label: "Skills", href: "#skills", icon: FaCode },
  { label: "Projects", href: "#projects", icon: FaFolderOpen },
  { label: "Resume", href: "/resume.pdf", icon: FaFileDownload },
  { label: "Contact", href: "#contact", icon: FaEnvelope },
];

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-[var(--nav-bg)] backdrop-blur-xl border-t border-subtle px-4 py-2">
      <div className="flex justify-around items-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith("/") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex flex-col items-center gap-0.5 text-muted hover:text-accent transition-colors duration-200 py-1"
          >
            <link.icon className="text-lg" />
            <span className="text-[10px] font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
