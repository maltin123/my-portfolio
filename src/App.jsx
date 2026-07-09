import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";

export default function App() {
  return (
    <>
      <Loader />
      <CursorGlow />

      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

        <Footer />
      </div>
    </>
  );
}
