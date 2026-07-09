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
      className="relative min-h-screen flex items-center pt-20 bg-neutral-950 px-8 overflow-hidden"
    >
      {/* Ripple Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-24 h-24 rounded-full bg-lime-300/30 blur-2xl" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-lime-300/20 via-cyan-400/20 to-transparent blur-[120px] animate-ambient" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-lime-300/20 shadow-[0_0_80px_rgba(163,230,53,0.15)] animate-wave" />
        <div
          style={{ animationDelay: "1.5s" }}
          className="absolute w-[550px] h-[550px] rounded-full border border-cyan-300/10 shadow-[0_0_100px_rgba(34,211,238,0.15)] animate-wave"
        />
        <div
          style={{ animationDelay: "3s" }}
          className="absolute w-[800px] h-[800px] rounded-full border border-lime-300/10 animate-wave"
        />
      </div>

      {/* Photo - bottom right */}
      <div className="absolute bottom-0 right-0 w-80 md:w-[450px] lg:w-[600px] pointer-events-none select-none">
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
          <p className="text-lime-300 uppercase tracking-[8px] mb-6">
            UI / UX Designer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none text-white mb-8">
            It's me <br />
            <span className="text-lime-300">MAN SITT EAIN</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            Designing
            <span className="text-lime-300"> Your</span> Digital Experiences
          </p>
          <p className="mt-8 max-w-xl text-lg text-white/60 leading-relaxed">
            I create meaningful digital products through user research,
            interaction design and modern interfaces.
          </p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block mt-10 px-8 py-4 rounded-full bg-lime-300 text-black font-semibold shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_50px_rgba(163,230,53,0.5)]"
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
}
