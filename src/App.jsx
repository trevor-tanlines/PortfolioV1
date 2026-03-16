import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CursorTrail from "./components/CursorTrail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <CursorTrail />
      <Navbar />
    </main>
  );
}

export default App;

// This be da main root of my app, cause components make things less annoying to deal with, plus its how the pros do it