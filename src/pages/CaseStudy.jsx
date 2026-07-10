import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Logo from "../components/Logo";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Link to="/" className="text-sm text-muted hover:text-accent transition-colors">
            ← Back to Portfolio
          </Link>
          <Link to="/">
            <Logo className="h-8 w-auto text-body" />
          </Link>
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
            className="text-5xl md:text-7xl font-bold leading-tight"
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
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="px-8 pb-20"
      >
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-subtle shadow-accent-glow">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-8 pb-32 space-y-24">
        {/* Overview */}
        <motion.div {...fadeUp}>
          <h2 className="text-accent text-sm uppercase tracking-[6px] mb-4">
            Overview
          </h2>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            {project.overview}
          </p>
        </motion.div>

        {/* Problem */}
        <motion.div {...fadeUp}>
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
        <motion.div {...fadeUp}>
          <h2 className="text-accent text-sm uppercase tracking-[6px] mb-4">
            The Approach
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            {project.approach}
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div {...fadeUp}>
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
        <motion.div {...fadeUp}>
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

        {/* Back */}
        <motion.div {...fadeUp} className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold hover:shadow-accent-glow transition-all hover:scale-105"
          >
            ← Back to All Projects
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-subtle py-8 px-8 text-center text-muted-2 text-sm">
        © 2026 Man Sitt. All rights reserved.
      </footer>
    </div>
  );
}
