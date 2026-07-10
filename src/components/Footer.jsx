import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

import { projects } from "../data/projects";

export default function Footer() {
  return (
    <footer className="bg-body text-body px-8 py-16 border-t border-subtle">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-stretch gap-10">
          {/* Brand + Contact */}
          <div>
            <Logo className="h-8 w-auto text-body mb-4" />
            <p className="text-muted-2 text-sm leading-relaxed mb-6">
              Designing meaningful digital experiences through user research,{" "}
              <br />
              interaction design and modern interfaces.
            </p>
            <h4 className="text-body font-semibold mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:mansitt1997@gmail.com"
                  className="text-muted text-sm hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  mansitt1997@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+959441093130"
                  className="text-muted text-sm hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +959-441093130
                </a>
              </li>
            </ul>
          </div>

          {/* Case Studies + Quick Links */}
          <div className="ml-auto grid grid-cols-2 gap-10 md:gap-20 w-full md:w-auto">
            <div>
              <h4 className="text-body font-semibold mb-4 tracking-wide">
                Case Studies
              </h4>
              <ul className="space-y-3">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/case-study/${p.slug}`}
                      className="text-muted text-sm hover:text-accent transition-colors duration-300"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick Links */}
            <div className="justify-self-end text-left">
              <h4 className="text-body font-semibold mb-4 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted text-sm hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-subtle text-center">
          <p className="text-muted-2 text-sm text-center">
            © 2026 MAN. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
