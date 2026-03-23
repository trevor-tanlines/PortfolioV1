import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CursorTrail from "./components/CursorTrail";
import Navbar from "./components/Navbar";
import ParticleNetwork from "./components/ParticleNetwork";

function App() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <ParticleNetwork />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <CursorTrail />
      <Navbar />
      </div>
    </main>
  );
}

export default App;

// This be da main root of my app, cause components make things less annoying to deal with, plus its how the pros do it