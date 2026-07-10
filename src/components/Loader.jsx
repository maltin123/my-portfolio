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
      transition={{ duration: 0.8, delay: 2.5 }}
      onAnimationComplete={() => setShow(false)}
      className="
      fixed inset-0 z-[999] bg-neutral-950
      flex items-center justify-center
      "
    >
      {/* ambient glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-accent-muted blur-[160px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-96 relative flex items-center"
      >
        {/* glass track */}
        <div className="relative w-full h-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 overflow-hidden">
          {/* progress fill */}
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-lime-400 via-lime-300 to-cyan-300 relative"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{
              boxShadow: "0 0 20px rgba(163,230,53,0.4), 0 0 60px rgba(163,230,53,0.15)",
            }}
          />
        </div>

        {/* M head */}
        <motion.div
          className="absolute -translate-x-1/2 flex items-center justify-center"
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <div className="absolute w-12 h-12 bg-accent-muted blur-2xl rounded-full" />
          <Logo className="h-9 w-auto relative text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
