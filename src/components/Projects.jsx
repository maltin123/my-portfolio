import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { designs } from "../data/designs";
import { logos } from "../data/logos";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [logoLightboxIdx, setLogoLightboxIdx] = useState(null);
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (lightboxIdx === null && logoLightboxIdx === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIdx(null);
        setLogoLightboxIdx(null);
      }
      if (e.key === "ArrowLeft") {
        if (lightboxIdx !== null) setLightboxIdx((i) => (i - 1 + designs.length) % designs.length);
        if (logoLightboxIdx !== null) setLogoLightboxIdx((i) => (i - 1 + logos.length) % logos.length);
      }
      if (e.key === "ArrowRight") {
        if (lightboxIdx !== null) setLightboxIdx((i) => (i + 1) % designs.length);
        if (logoLightboxIdx !== null) setLogoLightboxIdx((i) => (i + 1) % logos.length);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx === null, logoLightboxIdx === null]);

  return (
    <section
      id="projects"
      className="
      min-h-screen
      bg-body
      text-body
      px-8
      py-32
      "
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
          text-accent
          uppercase
          tracking-[8px]
          mb-6
          "
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
          text-5xl
          md:text-7xl
          font-bold
          "
        >
          Selected
          <span className="text-accent"> Works.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mt-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300
                ${activeCategory === cat ? "bg-accent text-white border-accent" : "bg-glass border-subtle text-muted hover:border-accent hover:text-accent"}
              `}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          mt-12
          "
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
group
relative
p-6
rounded-2xl
  border
  border-subtle
  bg-glass
  backdrop-blur-md
  transition-all
duration-500
hover:border-accent
hover:shadow-accent-glow
"
            >
              <div
                className="
  relative
  overflow-hidden
  rounded-2xl
  mb-8
  h-64
  group/image
  "
              >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
    w-full
    h-full
    object-cover
    transition
    duration-700
    group-hover/image:scale-110
    "
                  />

                {/* Hover Overlay */}
                <Link
                  to={`/case-study/${project.slug}`}
                  onClick={() =>
                    sessionStorage.setItem("scrollY", window.scrollY)
                  }
                  className="
    absolute
    inset-0
    bg-body/60
    opacity-0
    flex
    items-center
    justify-center
    transition
    duration-500
    group-hover/image:opacity-100
    "
                >
                  <span
                    className="
      px-6
      py-3
      rounded-full
      bg-accent
      text-white
      font-semibold
      hover:scale-105
      transition
      "
                  >
                    View Case Study →
                  </span>
                </Link>

                {/* Glow */}
                <div
                  className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[600px]
    h-[600px]
    bg-accent-muted
    blur-[180px]
    rounded-full
    animate-pulse
    pointer-events-none
    "
                />
              </div>
              <p
                className="
              text-accent
              text-sm
              uppercase
              tracking-widest
              "
              >
                {project.category}
              </p>

              <h3
                className="
              mt-4
              text-3xl
              font-bold
              "
              >
                {project.title}
              </h3>

              <p
                className="
              mt-4
              text-muted
              leading-relaxed
              "
              >
                {project.description}
              </p>

              <div
                className="
              flex
              flex-wrap
              gap-3
              mt-6
              "
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
px-4
py-2
rounded-full
text-sm
bg-glass
border
border-subtle
text-muted
backdrop-blur-md
hover:scale-105 hover:border-accent transition-all duration-200
"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:underline transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {designs.length > 0 && (
          <div className="mt-32">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
              text-accent
              uppercase
              tracking-[8px]
              mb-6
              "
            >
              Graphic Designs
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
              text-4xl
              md:text-6xl
              font-bold
              "
            >
              Graphic
              <span className="text-accent"> Designs.</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg text-muted leading-relaxed"
            >
              Bold visuals that bring ideas to life — crafted with color,
              composition and care.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {designs.map((image, index) => (
                <motion.button
                  key={image}
                  type="button"
                  onClick={() => setLightboxIdx(index)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-subtle
                  bg-glass
                  backdrop-blur-md
                  cursor-zoom-in
                  hover:border-accent
                  hover:shadow-accent-glow
                  transition-all
                  duration-500
                  "
                >
                  <img
                    src={image}
                    alt={`Graphic design ${index + 1}`}
                    loading="lazy"
                    className="
                    w-full
                    h-64
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                    "
                  />
                </motion.button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence>
          {lightboxIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLightboxIdx(null)}
              className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              backdrop-blur-sm
              p-4
              sm:p-12
              cursor-zoom-out
              "
            >
              <button
                type="button"
                aria-label="Previous design"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((i) => (i - 1 + designs.length) % designs.length);
                }}
                className="
                absolute
                left-3
                sm:left-6
                top-1/2
                -translate-y-1/2
                z-10
                w-11
                h-11
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                flex
                items-center
                justify-center
                hover:bg-accent
                hover:border-accent
                transition-all
                duration-200
                active:scale-90
                "
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <motion.img
                key={designs[lightboxIdx]}
                src={designs[lightboxIdx]}
                alt={`Graphic design ${lightboxIdx + 1} full view`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="
                max-h-[85vh]
                max-w-full
                object-contain
                rounded-2xl
                shadow-2xl
                cursor-default
                "
              />

              <button
                type="button"
                aria-label="Next design"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((i) => (i + 1) % designs.length);
                }}
                className="
                absolute
                right-3
                sm:right-6
                top-1/2
                -translate-y-1/2
                z-10
                w-11
                h-11
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                flex
                items-center
                justify-center
                hover:bg-accent
                hover:border-accent
                transition-all
                duration-200
                active:scale-90
                "
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <span
                onClick={(e) => e.stopPropagation()}
                className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                px-4
                py-1.5
                rounded-full
                text-sm
                text-white/80
                bg-white/10
                border
                border-white/15
                "
              >
                {lightboxIdx + 1} / {designs.length}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {logos.length > 0 && (
          <div className="mt-32">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent uppercase tracking-[8px] mb-6"
            >
              Logo Creation
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Logo
              <span className="text-accent"> Design.</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg text-muted leading-relaxed"
            >
              Brand identities crafted with purpose — mindful marks that carry
              each brand's story.
            </motion.p>

            <div className="logos-carousel relative mt-12 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-24 before:bg-gradient-to-r before:from-[var(--bg-body)] before:to-transparent before:z-10 before:pointer-events-none after:absolute after:right-0 after:top-0 after:bottom-0 after:w-24 after:bg-gradient-to-l after:from-[var(--bg-body)] after:to-transparent after:z-10 after:pointer-events-none">
              <div className="logos-track flex items-center gap-8 w-max">
                {[...logos, ...logos].map((logo, i) => (
                  <button
                    key={i}
                    onClick={() => setLogoLightboxIdx(i % logos.length)}
                    className="group/logo shrink-0 w-40 h-28 md:w-52 md:h-36 flex items-center justify-center outline-none"
                  >
                    <img
                      src={logo}
                      alt={`Logo design ${(i % logos.length) + 1}`}
                      loading="lazy"
                      draggable={false}
                      className="max-w-full max-h-full object-contain select-none grayscale opacity-30 cursor-pointer transition-all duration-700 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <AnimatePresence>
          {logoLightboxIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLogoLightboxIdx(null)}
              className="
              fixed inset-0 z-[100] flex items-center justify-center
              bg-black/90 backdrop-blur-sm p-4 sm:p-12 cursor-zoom-out
              "
            >
              <button
                type="button"
                aria-label="Previous logo"
                onClick={(e) => {
                  e.stopPropagation();
                  setLogoLightboxIdx((i) => (i - 1 + logos.length) % logos.length);
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 active:scale-90"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <motion.img
                key={logos[logoLightboxIdx]}
                src={logos[logoLightboxIdx]}
                alt={`Logo design ${logoLightboxIdx + 1} full view`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl cursor-default"
              />

              <button
                type="button"
                aria-label="Next logo"
                onClick={(e) => {
                  e.stopPropagation();
                  setLogoLightboxIdx((i) => (i + 1) % logos.length);
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 active:scale-90"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <span
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm text-white/80 bg-white/10 border border-white/15"
              >
                {logoLightboxIdx + 1} / {logos.length}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
