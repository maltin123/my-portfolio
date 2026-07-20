import { motion } from "framer-motion";
import { FaComment } from "react-icons/fa";

export default function FAB() {
  return (
    <motion.a
      href="mailto:mansitt1997@gmail.com"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-28 right-6 z-[60] w-14 h-14 md:hidden rounded-full bg-accent text-white shadow-lg shadow-accent-glow flex items-center justify-center hover:shadow-accent-glow transition-shadow"
      aria-label="Let's Talk"
    >
      <FaComment className="text-xl" />
    </motion.a>
  );
}
