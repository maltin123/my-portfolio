import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const others = projects.filter((p) => p.slug !== slug);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselProject = others[carouselIdx];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = `${project.title} — Man Sitt`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = project.description;
    return () => {
      document.title = "Man Sitt — UI/UX Designer";
      const old = document.querySelector('meta[name="description"]');
      if (old) old.remove();
    };
  }, [project.title]);

  if (!project) {
    return (
      <div className="min-h-screen bg-body flex items-center justify-center text-body">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link
            to="/"
            className="mt-6 inline-block text-accent hover:underline"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-body text-body">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-subtle">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Logo className="h-8 w-auto text-body" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-muted blur-[180px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p
            {...fadeUp}
            className="text-accent uppercase tracking-[8px] mb-6"
          >
            {project.category}
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="text-5xl md:text-7xl font-bold leading-tight transition-colors duration-300"
          >
            {project.title}
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {project.description}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm bg-glass border border-subtle text-muted backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {project.role && project.timeline && (
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mt-10 text-center"
            >
              <div>
                <p className="text-muted-2 text-sm uppercase tracking-widest">
                  Role
                </p>
                <p className="text-body font-semibold mt-1">{project.role}</p>
              </div>
              <div>
                <p className="text-muted-2 text-sm uppercase tracking-widest">
                  Timeline
                </p>
                <p className="text-body font-semibold mt-1">
                  {project.timeline}
                </p>
              </div>
            </motion.div>
          )}

          {project.link && project.link !== "#" && (
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:shadow-accent-glow transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Website
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Sidebar - right edge of viewport */}
      <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40 w-44">
        <div className="bg-glass backdrop-blur-md border border-subtle rounded-xl p-4">
          <p className="text-xs uppercase tracking-widest text-muted-2 mb-3">On this page</p>
          <ul className="space-y-2 text-sm">
            {["Gallery", "Overview", "The Problem", "The Approach", "The Solution", "Results"].map((s) => (
              <li key={s}>
                <a
                  href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-muted hover:text-accent transition-colors duration-200"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8">
        {/* Hero Image */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pb-20"
        >
          <div className="rounded-2xl overflow-hidden border border-subtle shadow-accent-glow">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.section>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="pb-20 scroll-mt-24" id="gallery">
            <div>
              <motion.h2
                {...fadeUp}
                className="text-accent text-sm uppercase tracking-[6px] mb-8 text-center"
              >
                Gallery
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="rounded-2xl overflow-hidden border border-subtle"
                  >
                    <img
                      src={img}
                      alt={`${project.title} gallery ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="pb-32 space-y-24">
        {/* Overview */}
        <motion.div {...fadeUp} className="scroll-mt-24" id="overview">
          <h2 className="text-accent text-sm uppercase tracking-[6px] mb-4">
            Overview
          </h2>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            {project.overview}
          </p>
        </motion.div>

        {/* Problem */}
        <motion.div {...fadeUp} className="scroll-mt-24" id="the-problem">
          <h2 className="text-accent text-sm uppercase tracking-[6px] mb-4">
            The Problem
          </h2>
          <div className="p-8 rounded-2xl border border-subtle bg-glass backdrop-blur-md">
            <p className="text-lg text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>
        </motion.div>

        {/* Approach */}
        <motion.div {...fadeUp} className="scroll-mt-24" id="the-approach">
          <h2 className="text-accent text-sm uppercase tracking-[6px] mb-4">
            The Approach
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            {project.approach}
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div {...fadeUp} className="scroll-mt-24" id="the-solution">
          <h2 className="text-accent text-sm uppercase tracking-[6px] mb-4">
            The Solution
          </h2>
          <div className="p-8 rounded-2xl border border-accent bg-accent-muted backdrop-blur-md">
            <p className="text-lg text-body leading-relaxed">
              {project.solution}
            </p>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div {...fadeUp} className="scroll-mt-24" id="results">
          <h2 className="text-accent text-sm uppercase tracking-[6px] mb-6">
            Results
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                className="p-6 rounded-2xl border border-subtle bg-glass backdrop-blur-md text-center"
              >
                <p className="text-accent text-lg font-semibold">{result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Case Studies Carousel */}
        <motion.div {...fadeUp} className="relative text-center">
          <p className="text-xs uppercase tracking-[4px] text-muted mb-8">
            More Case Studies
          </p>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() =>
                setCarouselIdx(
                  carouselIdx === 0 ? others.length - 1 : carouselIdx - 1
                )
              }
              className="shrink-0 w-12 h-12 rounded-full border border-subtle bg-glass flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/50 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous case study"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex-1 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselProject.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/case-study/${carouselProject.slug}`}
                    className="group inline-flex items-center gap-4"
                  >
                    <span className="text-2xl sm:text-4xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {carouselProject.title}
                    </span>
                    <span className="text-2xl sm:text-4xl text-accent group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() =>
                setCarouselIdx(
                  carouselIdx === others.length - 1 ? 0 : carouselIdx + 1
                )
              }
              className="shrink-0 w-12 h-12 rounded-full border border-subtle bg-glass flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/50 transition-all hover:scale-105 active:scale-95"
              aria-label="Next case study"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {others.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === carouselIdx
                    ? "bg-accent w-6"
                    : "bg-muted/40 hover:bg-muted/60"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Back */}
        <motion.div {...fadeUp} className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:shadow-accent-glow transition-all hover:scale-105 active:scale-95"
          >
            ← Back to All Projects
          </Link>
        </motion.div>
      </section>
      </div>

      <Footer simple />
    </div>
  );
}
