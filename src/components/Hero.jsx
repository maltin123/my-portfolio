import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-body px-8 overflow-hidden"
    >
      {/* Ripple Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-24 h-24 rounded-full bg-accent-muted blur-2xl" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--accent)]/20 via-cyan-400/20 to-transparent blur-[120px] animate-ambient" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-accent shadow-accent-glow animate-wave" />
        <div
          style={{ animationDelay: "1.5s" }}
          className="absolute w-[550px] h-[550px] rounded-full border border-cyan-300/10 shadow-[0_0_100px_rgba(34,211,238,0.15)] animate-wave"
        />
        <div
          style={{ animationDelay: "3s" }}
          className="absolute w-[800px] h-[800px] rounded-full border border-accent animate-wave"
        />
      </div>

      {/* Photo - bottom right */}
      <div className="hidden md:block absolute bottom-0 right-0 w-80 md:w-[450px] lg:w-[600px] pointer-events-none select-none">
        <img
          src="/photo.png"
          alt="Man Sitt"
          className="w-full h-auto scale-x-[-1]"
        />
      </div>

      {/* Text */}
      <div
        className={`
          relative z-10 max-w-6xl w-full mx-auto
          transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="max-w-2xl">
          <p className="text-accent uppercase tracking-[8px] mb-6">
            UI / UX Designer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none text-body mb-8">
            It's me
            <br />
            <span className="text-accent">MAN SITT EAIN</span>
          </h1>
          <p className="text-xl md:text-2xl text-body/80 font-medium">
            Designing Your Digital Experiences
          </p>
          <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
            I create meaningful digital products through user research,
            interaction design and modern interfaces.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block mt-10 px-8 py-4 rounded-full bg-accent text-white font-semibold shadow-accent-glow hover:shadow-accent-glow"
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
}
