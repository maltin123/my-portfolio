import { motion } from "framer-motion";
import { useState } from "react";
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
      transition={{ duration: 0.6, delay: 1.5 }}
      onAnimationComplete={() => { setShow(false); setLoading(false); }}
      className={`fixed inset-0 z-[999] flex items-center justify-center ${isDark ? "bg-neutral-950" : "bg-[#f4f5f7]"}`}
    >
      <div
        className="loader"
        style={{
          width: 60,
          aspectRatio: 1,
          background: `
            conic-gradient(from -90deg at 10px 10px, var(--accent) 90deg, transparent 0),
            conic-gradient(from -90deg at 10px 10px, var(--accent) 90deg, transparent 0) 10px 10px,
            conic-gradient(from -90deg at 10px 10px, var(--accent) 90deg, transparent 0) 20px 20px
          `,
          backgroundSize: "50% 50%",
          animation: "l15 1s infinite",
        }}
      />

      <style>{`
        @keyframes l15 {
          90%, 100% { background-position: -30px 30px, -20px 40px, -10px 50px; }
        }
      `}</style>
    </motion.div>
  );
}