import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, TorusKnot } from '@react-three/drei';
import { useRef } from 'react';

function RotatingObject() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[1.5, 0.4, 200, 32]}>
        <meshStandardMaterial
          color="#8a2be2"
          wireframe={true}
          emissive="#4b0082"
          emissiveIntensity={1}
        />
      </TorusKnot>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <section id="hero" style={{ height: '100vh', position: 'relative', paddingTop: 0, paddingBottom: 0 }}>
      {/* Background Glows */}
      <div className="galaxy-top"></div>
      <div className="top-ring"></div>

      <div className="hero-container">

        {/* Left Side Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span style={{ fontSize: '1.2rem' }}>✨</span> Full Stack Developer | React · Spring Boot · SQL
          </div>

          <h1 className="hero-title">
            Providing <span>the best</span><br />
            project experience.
          </h1>

          <p className="hero-subtitle">
            I'm a Full Stack Developer skilled in React.js, Spring Boot, REST APIs, and SQL — building scalable web and mobile applications.
          </p>

          <a href="#projects" className="hero-cta">
            View My Work
          </a>
        </div>

        {/* Right Side 3D Three.js Object */}
        <div className="hero-3d-wrapper">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#e0aaff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8a2be2" />
            <RotatingObject />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>

      </div>
    </section>
  );
}
