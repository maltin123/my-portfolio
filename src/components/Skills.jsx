import { motion } from "framer-motion";
import {
  FaPaintBrush, FaLayerGroup, FaDesktop, FaSearch,
  FaRoute, FaPencilAlt, FaReact, FaHtml5,
  FaCss3Alt, FaJs, FaImage, FaPenNib,
} from "react-icons/fa";

const iconMap = {
  "Visual Design": FaPaintBrush,
  "Design Systems": FaLayerGroup,
  "Interfaces": FaDesktop,
  "Research": FaSearch,
  "User Flow": FaRoute,
  "Wireframing": FaPencilAlt,
  "React": FaReact,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "JavaScript": FaJs,
  "Figma": FaPaintBrush,
  "Photoshop": FaImage,
  "Illustrator": FaPenNib,
};

export default function Skills() {
  const skills = [
    {
      title: "UI Design",
      level: 90,
      items: "Visual Design • Design Systems • Interfaces",
    },

    {
      title: "UX Design",
      level: 85,
      items: "Research • User Flow • Wireframing",
    },

    {
      title: "Frontend",
      level: 75,
      items: "React • HTML • CSS • JavaScript",
    },

    {
      title: "Tools",
      level: 95,
      items: "Figma • Photoshop • Illustrator",
    },
  ];

  return (
    <section
      id="skills"
      className="
      relative
      overflow-hidden
      min-h-screen
      bg-body
      text-body
      px-8
      py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        bg-accent-muted
        blur-[160px]
        rounded-full
        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10
        max-w-6xl
        mx-auto
        "
      >
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
          Skills
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
          What I <span className="text-accent">Use.</span>
        </motion.h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          mt-20
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
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
                amount: 0.3,
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
    absolute
    -inset-1
    rounded-2xl
    bg-gradient-to-r
    from-[var(--accent)]/20
    via-transparent
    to-[var(--accent)]/20
    opacity-0
    blur-xl
    group-hover:opacity-100
    transition
    duration-700
  "
              />
              <h3
                className="
                relative
  z-10
      text-2xl
      font-bold
      text-body
      group-hover:text-accent
      transition-colors
    "
              >
                {skill.title}
              </h3>

              <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                {skill.items.split(" • ").map((item) => {
                  const Icon = iconMap[item];
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-glass border border-subtle text-muted text-sm"
                    >
                      {Icon && <Icon className="text-accent" />}
                      {item}
                    </span>
                  );
                })}
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
