import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
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
        <p
          className="
          text-accent
          uppercase
          tracking-[8px]
          mb-6
          "
        >
          Projects
        </p>

        <h2
          className="
          text-5xl
          md:text-7xl
          font-bold
          "
        >
          Selected
          <span className="text-accent"> Works.</span>
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          mt-20
          "
        >
          {projects.map((project, index) => (
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
                  onClick={() => sessionStorage.setItem("scrollY", window.scrollY)}
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
"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
