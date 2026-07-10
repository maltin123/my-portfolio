import { useMemo } from "react";

const squares = [
  { side: "left", top: 8, size: 80 },
  { side: "left", top: 30, size: 50 },
  { side: "left", top: 55, size: 100 },
  { side: "left", top: 78, size: 40 },
  { side: "right", top: 15, size: 65 },
  { side: "right", top: 40, size: 90 },
  { side: "right", top: 65, size: 45 },
  { side: "right", top: 88, size: 70 },
];

export default function DecoGrid() {
  const items = useMemo(
    () =>
      squares.map((s) => ({
        ...s,
        left: s.side === "left" ? 2 + Math.random() * 3 : undefined,
        right: s.side === "right" ? 2 + Math.random() * 3 : undefined,
        rotate: Math.random() * 45,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {items.map((s, i) => (
        <div
          key={i}
          className="absolute border-2 border-accent"
          style={{
            top: `${s.top}%`,
            left: s.left !== undefined ? `${s.left}%` : undefined,
            right: s.right !== undefined ? `${s.right}%` : undefined,
            width: s.size,
            height: s.size,
            opacity: 0.3,
            borderRadius: 8,
            transform: `rotate(${s.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}