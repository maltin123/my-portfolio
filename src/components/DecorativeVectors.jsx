import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const spin = { duration: 30, repeat: Infinity, ease: "linear" };

export default function DecorativeVectors() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#ffffff" : "#222222";

  const Cross = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: "none", stroke: color, strokeWidth: 6, strokeLinecap: "round" }}>
      <line x1="20" y1="20" x2="80" y2="80" />
      <line x1="80" y1="20" x2="20" y2="80" />
    </svg>
  );

  const Circle = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: "none", stroke: color, strokeWidth: 6 }}>
      <circle cx="50" cy="50" r="42" />
    </svg>
  );

  const Square = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: "none", stroke: color, strokeWidth: 6, strokeLinejoin: "round" }}>
      <rect x="12" y="12" width="76" height="76" rx="10" />
    </svg>
  );

  const Triangle = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: "none", stroke: color, strokeWidth: 6, strokeLinejoin: "round" }}>
      <polygon points="50,10 92,88 8,88" />
    </svg>
  );

  const items = [
    { Icon: Triangle, size: 120, delay: 0, x: [0, 30, -20, 40, 0], y: [0, -40, 20, -30, 0] },
    { Icon: Square, size: 100, delay: 5, x: [0, -50, 30, -20, 0], y: [0, 30, -40, 50, 0] },
    { Icon: Circle, size: 140, delay: 10, x: [0, 40, -30, 20, 0], y: [0, -30, 40, -40, 0] },
    { Icon: Cross, size: 110, delay: 15, x: [0, -30, 50, -40, 0], y: [0, 50, -30, 20, 0] },
  ];

  const drift = { duration: 20, repeat: Infinity, ease: "easeInOut" };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {items.map(({ Icon, size, delay, x, y }) => (
        <motion.div
          key={delay}
          className="absolute"
          style={{ width: size, height: size, left: "45%", top: "45%" }}
          animate={{ x, y, rotate: 360 }}
          transition={{ x: { ...drift, delay }, y: { ...drift, delay }, rotate: spin }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
