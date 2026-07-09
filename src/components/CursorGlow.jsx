import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 800, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 800, damping: 40 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="fixed top-0 left-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
    >
      <div className="w-full h-full rounded-full border-2 border-lime-300" />
    </motion.div>
  );
}
