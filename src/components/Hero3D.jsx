import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, TorusKnot } from '@react-three/drei';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Sparkles } from 'lucide-react';

function RotatingObject() {
  const meshRef = useRef();
  const { theme } = useTheme();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  const wireframeColor = theme === 'dark' ? '#8a2be2' : '#7c3aed';
  const emissiveColor = theme === 'dark' ? '#00f2fe' : '#0891b2';

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <TorusKnot ref={meshRef} args={[1.5, 0.45, 200, 32]}>
        <meshStandardMaterial
          color={wireframeColor}
          wireframe={true}
          emissive={emissiveColor}
          emissiveIntensity={theme === 'dark' ? 1.5 : 0.8}
        />
      </TorusKnot>
    </Float>
  );
}

export default function Hero3D() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', padding: 0 }}>
      {/* Background Glows */}
      <div className="galaxy-top"></div>
      <div className="top-ring"></div>

      <div className="hero-container" style={{ width: '100%' }}>

        {/* Left Side Content */}
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
            Full Stack Developer | React · Spring Boot · SQL
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Providing <span>the best</span><br />
            project experience.
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a Full Stack Developer skilled in React.js, Spring Boot, REST APIs, and SQL — building scalable, high-performance web and mobile solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" onClick={handleScrollToProjects} className="hero-cta">
              Explore Projects <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Side 3D Three.js Object */}
        <div className="hero-3d-wrapper">
          <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2fe" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8a2be2" />
            <RotatingObject />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

      </div>
    </section>
  );
}
