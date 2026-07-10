import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PX = 2;

const CURSORS = {
  arrow: {
    w: 9,
    h: 12,
    pixels: [
      [1,0,0,0,0,0,0,0,0],
      [1,1,0,0,0,0,0,0,0],
      [1,0,1,0,0,0,0,0,0],
      [1,0,0,1,0,0,0,0,0],
      [1,0,0,0,1,0,0,0,0],
      [1,0,0,0,0,1,0,0,0],
      [1,0,0,0,0,0,1,0,0],
      [1,0,0,0,0,0,0,1,0],
      [1,1,1,1,1,1,1,1,1],
      [0,0,1,0,0,0,0,0,0],
      [0,0,0,1,0,0,0,0,0],
      [0,0,0,0,1,0,0,0,0],
    ],
  },
  hand: {
    w: 8,
    h: 10,
    pixels: [
      [0,0,0,0,1,0,0,0],
      [0,0,0,1,1,1,0,0],
      [0,0,0,1,0,1,0,0],
      [0,0,1,1,0,1,0,0],
      [0,0,1,1,0,1,0,0],
      [0,0,1,1,1,1,1,0],
      [0,1,1,1,0,1,0,1],
      [0,1,1,1,0,1,0,1],
      [0,1,1,1,0,1,1,0],
      [0,0,1,1,1,1,0,0],
    ],
  },
};

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 800, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 800, damping: 40 });
  const [type, setType] = useState("arrow");
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const t = e.target;
      const isInteractive =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        t.getAttribute("role") === "button";
      setType(isInteractive ? "hand" : "arrow");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  const cursor = CURSORS[type];
  const w = cursor.w * PX;
  const h = cursor.h * PX;

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 pointer-events-none z-50"
    >
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} shapeRendering="crispEdges">
        {cursor.pixels.map((row, ri) =>
          row.map((pixel, ci) =>
            pixel ? (
              <rect
                key={`${ri}-${ci}`}
                x={ci * PX}
                y={ri * PX}
                width={PX}
                height={PX}
                fill="var(--accent)"
              />
            ) : null
          )
        )}
      </svg>
    </motion.div>
  );
}
