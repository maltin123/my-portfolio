import { motion } from "framer-motion";

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
    "
              >
                {skill.title}
              </h3>

              <p
                className="
      text-muted
      relative
  z-10
      mt-3
    "
              >
                {skill.items}
              </p>

              {/* Progress Bar ကို ဒီမှာထည့် */}

              <div className="relative z-10 mt-6">
                <div
                  className="
        h-2
        bg-glass-hover
        rounded-full
        overflow-hidden
      "
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: index * 0.15,
                    }}
                    className="
            h-full
            bg-accent
            rounded-full
          "
                  />
                </div>

                <div
                  className="
        text-right
        mt-2
        text-accent
        font-semibold
      "
                >
                  {skill.level}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
