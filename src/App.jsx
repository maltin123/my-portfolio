import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";
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

export default function App() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
        </Routes>
      </div>
    </>
  );
}
