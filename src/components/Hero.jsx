import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const NAME = "MAN SITT EAIN";
const TAGLINE = "Designing Your Digital Experiences";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Hero() {
  const { loading } = useTheme();
  const [show, setShow] = useState(false);
  const [nameRevealed, setNameRevealed] = useState(new Set());
  const [typedChars, setTypedChars] = useState(0);

  const nameIndices = useMemo(() => {
    const idx = shuffle(NAME.split("").map((_, i) => i));
    return idx;
  }, []);

  useEffect(() => {
    if (!loading) setShow(true);
  }, [loading]);

  useEffect(() => {
    if (!show) return;
    nameIndices.forEach((i, order) => {
      setTimeout(() => {
        setNameRevealed((prev) => new Set(prev).add(i));
      }, order * 60);
    });
  }, [show, nameIndices]);

  useEffect(() => {
    if (!show) return;
    const timer = setInterval(() => {
      setTypedChars((prev) => {
        if (prev >= TAGLINE.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 45);
    return () => clearInterval(timer);
  }, [show]);

  const taglineParts = useMemo(() => {
    const parts = [];
    let remaining = TAGLINE;
    while (remaining.length > 0) {
      if (remaining.startsWith("Your")) {
        parts.push({ text: "Your", accent: true });
        remaining = remaining.slice(4);
      } else {
        parts.push({ text: remaining[0], accent: false });
        remaining = remaining.slice(1);
      }
    }
    return parts;
  }, []);

  let charCount = 0;
  const taglineNodes = taglineParts.map((part, i) => {
    const start = charCount;
    charCount += part.text.length;
    const end = charCount;
    const visibleCount = Math.max(0, Math.min(typedChars - start, part.text.length));

    if (part.accent) {
      const visible = part.text.slice(0, visibleCount);
      const hidden = part.text.slice(visibleCount);
      return (
        <span key={i}>
          <span className="text-accent">{visible}</span>
          <span className="invisible">{hidden}</span>
        </span>
      );
    }
    const visible = part.text.slice(0, visibleCount);
    const hidden = part.text.slice(visibleCount);
    return (
      <span key={i}>
        <span>{visible}</span>
        <span className="invisible">{hidden}</span>
      </span>
    );
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-body px-8 overflow-hidden"
    >
      {/* Ripple Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-24 h-24 rounded-full bg-accent-muted blur-2xl" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--accent)]/20 via-[var(--accent)]/10 to-transparent blur-[120px] animate-ambient" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-accent shadow-accent-glow animate-wave" />
        <div
          style={{ animationDelay: "1.5s" }}
          className="absolute w-[550px] h-[550px] rounded-full border border-accent/10 shadow-[0_0_100px_var(--accent-glow)] animate-wave"
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
            <span className="text-accent">
              {NAME.split("").map((ch, i) => (
                <span
                  key={i}
                  className={`transition-opacity duration-300 ${
                    nameRevealed.has(i) ? "opacity-100" : "opacity-0"
                  }`}
                  style={ch === " " ? { display: "inline-block", width: "0.35em" } : undefined}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-body/80 font-medium min-h-[1.5em]">
            {taglineNodes}
            <span className="animate-pulse">|</span>
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
