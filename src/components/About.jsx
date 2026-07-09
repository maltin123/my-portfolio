import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Counter({ number, label }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const duration = 1500;

    const increment = number / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= number) {
        current = number;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [start, number]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      onViewportEnter={() => setStart(true)}
      transition={{
        duration: 0.8,
      }}
    >
      <p
        className="
          text-4xl
          font-bold
          text-lime-300
        "
      >
        {count}+
      </p>

      <p
        className="
          mt-2
          text-white
          text-lg
        "
      >
        {label}
      </p>
    </motion.div>
  );
}
export default function About() {
  const cards = [
    {
      title: "UX Design",
      text: "Understanding users and solving real problems through research and strategy.",
    },

    {
      title: "UI Design",
      text: "Creating clean, modern and meaningful interfaces.",
    },

    {
      title: "Design Systems",
      text: "Building consistent and scalable digital experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="
    relative
    overflow-hidden
    min-h-screen
    bg-neutral-950
    text-white
    px-8
    py-32
  "
    >
      <div
        className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[500px]
    h-[500px]
    bg-lime-300/10
    blur-[160px]
    rounded-full
    pointer-events-none
  "
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
  text-lime-300
  uppercase
  tracking-[8px]
  mb-6
"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
  text-5xl
  md:text-7xl
  font-bold
  
"
        >
          Designing experiences
          <br />
          that feel
          <span className="text-lime-300 leading-[1.2]"> natural.</span>
        </motion.h2>

        {/* Content */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-16
          mt-6
        "
        >
          <div>
            <p
              className="
              text-white/60
              text-lg
              leading-relaxed
            "
            >
              I'm a UI/UX Designer passionate about creating digital products
              that are simple, intuitive and enjoyable to use.
            </p>

            <p
              className="
              mt-6
              text-white/60
              text-lg
              leading-relaxed
            "
            >
              My approach combines user research, interaction design and visual
              design to create meaningful experiences.
            </p>
            <div className="space-y-8 mt-10">
              <Counter number={3} label="Years Learning" />

              <Counter number={15} label="Projects Completed" />

              <Counter number={1000} label="Happy Clients" />
            </div>
          </div>

          {/* Cards */}

          <motion.div
            className="
    space-y-8
  "
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className="
        group
        relative
        overflow-hidden
        min-h-[140px]
        p-6
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        flex
        flex-col
        justify-center
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-lime-300/60
        hover:shadow-[0_0_40px_rgba(163,230,53,0.15)]
      "
              >
                <div
                  className="
          absolute
          inset-0
          bg-gradient-to-r
          from-lime-300/10
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
                />

                <h3
                  className="
          relative
          text-2xl
          font-bold
          mb-3
          text-white
          group-hover:text-lime-300
          transition-colors
        "
                >
                  {card.title}
                </h3>

                <p
                  className="
          relative
          text-white/60
          leading-relaxed
        "
                >
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
