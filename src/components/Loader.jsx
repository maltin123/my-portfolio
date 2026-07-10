import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

export default function Loader() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
      onAnimationComplete={() => setShow(false)}
      className="fixed inset-0 z-[999] bg-neutral-950 flex flex-col items-center justify-center gap-8"
    >
      {/* ambient glow */}
      <div className="absolute w-[400px] h-[400px] bg-accent-muted blur-[160px] rounded-full pointer-events-none" />

      {/* bouncing M */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Logo className="h-14 w-auto relative text-white" />
      </motion.div>

      {/* Google-style bouncing dots */}
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
    </motion.div>
  );
}