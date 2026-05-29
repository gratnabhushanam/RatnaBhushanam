import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero3D from '../components/Hero3D';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Premium loading effect delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-spinner"></div>
        <div className="loader-text">RATNA BHUSHANAM</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>
        <Hero3D />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
