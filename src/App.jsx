import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CaseStudy from "./pages/CaseStudy";

function Home() {
  useEffect(() => {
    const saved = sessionStorage.getItem("scrollY");
    if (saved) {
      sessionStorage.removeItem("scrollY");
      requestAnimationFrame(() => window.scrollTo(0, Number(saved)));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative z-10">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Loader />
      <CursorGlow />
      <BackToTop />
      <ScrollProgress />
      <SpeedInsights />

      <AnimatedRoutes />
    </ThemeProvider>
  );
}
