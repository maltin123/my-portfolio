import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const bounceSpring = { type: "spring", stiffness: 400, damping: 8 };
const wordSpring = { type: "spring", stiffness: 300, damping: 6 };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:mansitt1997@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`;
    setSent(true);
  };
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
  w-full
  max-w-md
  mx-auto
  "
          >
            {!sent && (
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-label="Your Name"
                  className="w-full px-5 py-3 rounded-xl bg-glass border border-subtle text-body placeholder:text-muted-2 focus:outline-none focus:border-accent transition-colors duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-label="Your Email"
                  className="w-full px-5 py-3 rounded-xl bg-glass border border-subtle text-body placeholder:text-muted-2 focus:outline-none focus:border-accent transition-colors duration-300"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  aria-label="Your Message"
                  className="w-full px-5 py-3 rounded-xl bg-glass border border-subtle text-body placeholder:text-muted-2 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:shadow-accent-glow transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}

            {sent && (
              <p className="text-accent font-semibold">Thanks! Your message has been sent.</p>
            )}

            <motion.a
            href="mailto:mansitt1997@gmail.com"
            whileHover={{ scale: 1.08, rotate: [-1, 1, -1, 1, 0] }}
            whileTap={{ scale: 0.92 }}
            className="
    px-10
    py-4
    rounded-full
    bg-accent
    text-white
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
            {[
              { Icon: FaGithub, href: "https://github.com/maltin123" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/man-sitt-9b914a37a" },
              { Icon: FaTelegram, href: "https://t.me/mansitt" },
              { Icon: FaFacebook, href: "https://www.facebook.com/share/1DwjwxnYNP/" },
              { Icon: FaInstagram, href: "https://www.instagram.com/mansitteain?igsh=ejVlbmJtMmJzeHR2" },
            ].map(
              ({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={href.includes("github") ? "GitHub" : href.includes("linkedin") ? "LinkedIn" : href.includes("telegram") ? "Telegram" : href.includes("facebook") ? "Facebook" : "Instagram"}
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
