import { motion } from "framer-motion";
import { useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
        delay: 1,
      }}
      onAnimationComplete={() => {
        setShow(false);
      }}
      className="
      fixed
      inset-0
      z-[999]
      bg-neutral-950
      flex
      items-center
      justify-center
      "
    >
      <motion.h1
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
        text-5xl
        font-bold
        text-white
        "
      >
        MAN<span className="text-lime-300">.</span>
      </motion.h1>
    </motion.div>
  );
}
