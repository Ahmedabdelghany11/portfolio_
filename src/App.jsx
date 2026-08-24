import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TechnologyStrip from "./components/TechnologyStrip/TechnologyStrip";

import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TechnologyStrip />

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
