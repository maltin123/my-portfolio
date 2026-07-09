import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
  relative
  overflow-hidden
  min-h-screen
  bg-neutral-950
  text-white
  px-8
  flex
  items-center
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
        bg-lime-300/10
        blur-[180px]
        rounded-full
        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        text-center
        "
      >
        <motion.p
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
          className="
          text-lime-300
          uppercase
          tracking-[8px]
          mb-6
          "
        >
          Contact
        </motion.p>
        <motion.h2
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
          text-5xl
          md:text-7xl
          font-bold
          leading-tight
          "
        >
          Let's create
          <br />
          something
          <span className="text-lime-300"> amazing.</span>
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
          mt-8
          text-white/60
          text-lg
          max-w-2xl
          mx-auto
          "
        >
          I'm always open to discussing new projects, creative ideas and
          opportunities.
        </motion.p>
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
            delay: 0.5,
            duration: 0.6,
          }}
          className="
  mt-12
  flex
  flex-col
  items-center
  gap-8
  "
        >
          {/* Main Button */}

          <a
            href="mailto:your@email.com"
            className="
    px-10
    py-4
    rounded-full
    bg-lime-300
    text-black
    font-semibold
    transition-all
    duration-300
    hover:bg-lime-200
    hover:scale-105
    hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]
    "
          >
            Let's Talk →
          </a>

          {/* Social Icons */}

          <div
            className="
  flex
  gap-5
  "
          >
            <a
              href="#"
              className="
    w-12
    h-12
    rounded-full
    border
    border-white/20
    flex
    items-center
    justify-center
    text-white/70
    text-xl
    hover:text-lime-300
    hover:border-lime-300
    hover:-translate-y-1
    transition-all
    duration-300
    "
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="
    w-12
    h-12
    rounded-full
    border
    border-white/20
    flex
    items-center
    justify-center
    text-white/70
    text-xl
    hover:text-lime-300
    hover:border-lime-300
    hover:-translate-y-1
    transition-all
    duration-300
    "
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="
    w-12
    h-12
    rounded-full
    border
    border-white/20
    flex
    items-center
    justify-center
    text-white/70
    text-xl
    hover:text-lime-300
    hover:border-lime-300
    hover:-translate-y-1
    transition-all
    duration-300
    "
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="
    w-12
    h-12
    rounded-full
    border
    border-white/20
    flex
    items-center
    justify-center
    text-white/70
    text-xl
    hover:text-lime-300
    hover:border-lime-300
    hover:-translate-y-1
    transition-all
    duration-280
    "
            >
              <FaTelegram />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
