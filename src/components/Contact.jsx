import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const bounceSpring = { type: "spring", stiffness: 400, damping: 8 };
const wordSpring = { type: "spring", stiffness: 300, damping: 6 };

export default function Contact() {
  return (
    <section
      id="contact"
      className="
  relative
  overflow-hidden
  min-h-screen
  bg-body
text-body
   px-8
  flex
  items-center
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
        bg-accent-muted
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
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...bounceSpring, delay: 0.1 }}
          className="
          text-accent
          uppercase
          tracking-[8px]
          mb-6
          "
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...bounceSpring, delay: 0.25 }}
          className="
          text-5xl
          md:text-7xl
          font-bold
          leading-tight
          "
        >
          Let's create
          <br />
          something{" "}
          <motion.span
            className="text-accent inline-block"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ ...wordSpring, delay: 0.6 }}
          >
            amazing.
          </motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...bounceSpring, delay: 0.45 }}
          className="
          mt-8
          text-muted
          text-lg
          max-w-2xl
          mx-auto
          "
        >
          I'm always open to discussing new projects, creative ideas and
          opportunities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...bounceSpring, delay: 0.65 }}
          className="
  mt-12
  flex
  flex-col
  items-center
  gap-8
  "
        >
          <motion.a
            href="mailto:your@email.com"
            whileHover={{ scale: 1.08, rotate: [-1, 1, -1, 1, 0] }}
            whileTap={{ scale: 0.92 }}
            className="
    px-10
    py-4
    rounded-full
    bg-accent
    text-body
    font-semibold
    transition-all
    duration-300
    hover:bg-accent
    hover:shadow-accent-glow
    "
          >
            Let's Talk →
          </motion.a>

          <div className="flex gap-5">
            {[FaFacebook, FaLinkedin, FaInstagram, FaTelegram].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  initial={{ opacity: 0, y: 40, rotate: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...wordSpring, delay: 0.8 + i * 0.1 }}
                  whileHover={{
                    scale: 1.25,
                    rotate: [0, -8, 8, -8, 0],
                    transition: { duration: 0.4 },
                  }}
                  className="
        w-12 h-12 rounded-full
        border border-subtle-hover
        flex items-center justify-center
        text-muted text-xl
        hover:text-accent hover:border-accent
        transition-all duration-300
        "
                >
                  <Icon />
                </motion.a>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
