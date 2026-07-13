import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import { useTheme } from "../context/ThemeContext";

export default function Loader() {
  const { theme, setLoading } = useTheme();
  const [show, setShow] = useState(true);
  const isDark = theme === "dark";

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      onAnimationComplete={() => { setShow(false); setLoading(false); }}
      className={`fixed inset-0 z-[999] flex items-center justify-center ${isDark ? "bg-neutral-950" : "bg-[#f4f5f7]"}`}
    >
      {/* ambient glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-accent-muted blur-[160px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* desktop: progress bar with M head */}
      <div className="hidden lg:flex w-96 relative items-center">
        <div className={`relative w-full h-1.5 rounded-full overflow-hidden ${isDark ? "bg-white/5 backdrop-blur-md border border-white/10" : "bg-black/5 backdrop-blur-md border border-black/10"}`}>
          <motion.div
            className="h-full rounded-full relative"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
              boxShadow: "0 0 20px var(--accent-glow), 0 0 60px var(--accent-glow)",
            }}
          />
        </div>

        <motion.div
          className="absolute -translate-x-1/2 flex items-center justify-center"
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <div className="absolute w-12 h-12 bg-accent-muted blur-2xl rounded-full" />
          <Logo className={`h-9 w-auto relative ${isDark ? "text-white" : "text-[#222222]"}`} />
        </motion.div>
      </div>

      {/* mobile: bouncing M + dots */}
      <div className="flex lg:hidden flex-col items-center gap-8">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Logo className={`h-14 w-auto relative ${isDark ? "text-white" : "text-[#222222]"}`} />
        </motion.div>

        <div className="flex gap-3">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-accent"
              animate={{ y: [0, -10, 0], scale: [1, 1.3, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}