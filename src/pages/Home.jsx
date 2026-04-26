import Navbar from '../components/Navbar';
import Hero3D from '../components/Hero3D';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero3D />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
