import { useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import MobileNav from "./components/MobileNav";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
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
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-body flex items-center justify-center text-body px-8">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-accent">404</h1>
        <p className="mt-4 text-xl text-muted">Page not found</p>
        <Link to="/" className="mt-8 inline-block px-8 py-4 rounded-full bg-accent text-white font-semibold hover:shadow-accent-glow transition-all">
          Back Home
        </Link>
      </div>
    </div>
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
            <Route path="*" element={<NotFound />} />
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
      <MobileNav />
      <ScrollProgress />
      <SpeedInsights />
      <Analytics />

      <AnimatedRoutes />
    </ThemeProvider>
  );
}
