import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
      bg-neutral-950
      text-white
      px-8
      py-10
      border-t
      border-white/10
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
        }}
        className="
        max-w-6xl
        mx-auto
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-6
        "
      >
        {/* Logo */}

        <div>
          <h3
            className="
            text-2xl
            font-bold
            "
          >
            MAN
          </h3>

          <p
            className="
            text-white/50
            mt-2
            "
          >
            UI/UX Designer
          </p>
        </div>

        {/* Text */}

        <p
          className="
          text-white/40
          text-sm
          text-center
          "
        >
          Creating meaningful digital experiences.
        </p>

        {/* Copyright */}

        <p
          className="
          text-white/40
          text-sm
          "
        >
          © 2026 MAN. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
