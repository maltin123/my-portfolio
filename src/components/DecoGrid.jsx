import { useMemo } from "react";

const squares = [
  { side: "left", top: 10, size: 60 },
  { side: "left", top: 35, size: 40 },
  { side: "left", top: 60, size: 80 },
  { side: "left", top: 85, size: 30 },
  { side: "right", top: 20, size: 50 },
  { side: "right", top: 45, size: 70 },
  { side: "right", top: 70, size: 35 },
  { side: "right", top: 90, size: 55 },
];

export default function DecoGrid() {
  const shuffled = useMemo(
    () =>
      squares.map((s) => ({
        ...s,
        left: s.side === "left" ? 2 + Math.random() * 4 : undefined,
        right: s.side === "right" ? 2 + Math.random() * 4 : undefined,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shuffled.map((s, i) => (
        <div
          key={i}
          className="absolute border border-accent"
          style={{
            top: `${s.top}%`,
            left: s.left !== undefined ? `${s.left}%` : undefined,
            right: s.right !== undefined ? `${s.right}%` : undefined,
            width: s.size,
            height: s.size,
            opacity: 0.15,
            borderRadius: s.size * 0.1,
            transform: `rotate(${Math.random() * 45}deg)`,
          }}
        />
      ))}
    </div>
  );
}