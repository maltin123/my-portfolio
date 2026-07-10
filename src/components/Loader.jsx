import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

const TEXT = "MAN SITT EAIN";

export default function Loader() {
  const { theme, setLoading } = useTheme();
  const [show, setShow] = useState(true);
  const isDark = theme === "dark";

  const letters = useMemo(
    () =>
      TEXT.split("").map((ch) => {
        const dir = Math.floor(Math.random() * 4);
        const dist = 500 + Math.random() * 300;
        let x = 0, y = 0, rotX = 0, rotY = 0;
        if (dir === 0) { x = -dist; rotY = 60; }
        else if (dir === 1) { x = dist; rotY = -60; }
        else if (dir === 2) { y = -dist; rotX = -60; }
        else { y = dist; rotX = 60; }
        return { ch, x, y, rotX, rotY };
      }),
    []
  );

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 3.2 }}
      onAnimationComplete={() => { setShow(false); setLoading(false); }}
      className={`fixed inset-0 z-[999] flex items-center justify-center ${isDark ? "bg-neutral-950" : "bg-[#f4f5f7]"}`}
      style={{ perspective: 800 }}
    >
      <div className="flex items-center gap-1.5">
        {letters.map(({ ch, x, y, rotX, rotY }, i) => (
          <div key={i} className="relative" style={{ perspective: 800 }}>
            {/* trail */}
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-bold tracking-tight text-accent pointer-events-none"
              initial={{ opacity: 0.7, x: x * 0.8, y: y * 0.8, scale: 0.6, filter: "blur(8px)" }}
              animate={{ opacity: 0, x: 0, y: 0, scale: 0.4, filter: "blur(20px)" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>

            {/* letter */}
            <motion.span
              initial={{
                opacity: 0,
                x, y,
                rotateX: rotX,
                rotateY: rotY,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                x: 0, y: 0,
                rotateX: 0,
                rotateY: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.15, 0.85, 0.35, 1],
              }}
              className={`text-5xl md:text-6xl font-bold tracking-tight inline-block ${
                ch === " " ? "w-[0.3em]" : ""
              } ${isDark ? "text-white" : "text-[#222222]"}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}