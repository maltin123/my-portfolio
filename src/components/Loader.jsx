import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const TEXT = "MAN SITT EAIN";

export default function Loader() {
  const { theme, setLoading } = useTheme();
  const [show, setShow] = useState(true);
  const isDark = theme === "dark";

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 3.2 }}
      onAnimationComplete={() => { setShow(false); setLoading(false); }}
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center ${isDark ? "bg-neutral-950" : "bg-[#f4f5f7]"}`}
    >
      {/* ripple rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-accent"
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 280, height: 280, opacity: 0 }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
          style={{ borderRadius: "50%" }}
        />
      ))}

      {/* letters */}
      <div className="flex items-center gap-1.5">
        {TEXT.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + i * 0.08,
              ease: "backOut",
            }}
            className={`text-5xl md:text-6xl font-bold tracking-tight ${
              ch === " " ? "w-[0.3em]" : ""
            } ${isDark ? "text-white" : "text-[#222222]"}`}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}