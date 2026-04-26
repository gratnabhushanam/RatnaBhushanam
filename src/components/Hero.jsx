import * as React from 'react';

const icons = [
  { name: 'React', rotate: 0, radius: 125, size: 40, img: '⚛️' },
  { name: 'JS', rotate: 60, radius: 125, size: 40, img: 'JS' },
  { name: 'TS', rotate: 120, radius: 190, size: 45, img: 'TS' },
  { name: 'Spring', rotate: 180, radius: 190, size: 45, img: '🍃' },
  { name: 'Mongo', rotate: 240, radius: 240, size: 50, img: '🌿' },
  { name: 'AWS', rotate: 300, radius: 240, size: 50, img: '☁️' },
  { name: 'GitHub', rotate: 360, radius: 125, size: 40, img: '🐙' }
];

export default function Hero() {
  React.useEffect(() => {
    let styleSheet = document.createElement("style")

    let keyframes = "";
    icons.forEach((_, index) => {
      keyframes += `
        @keyframes orbit-${index} {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(${icons[index].radius}px) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(${icons[index].radius}px) rotate(-360deg); }
        }
      `;
    });

    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    }
  }, []);

  return (
    <>
      <div className="galaxy-top"></div>
      <div className="top-ring"></div>

      <div className="hero-container">

        {/* Left Side Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span style={{ fontSize: '1.2rem' }}>✨</span> Fullstack Developer
          </div>

          <h1 className="hero-title">
            Providing <span>the best</span><br />
            project experience.
          </h1>

          <p className="hero-subtitle">
            I'm a Full Stack Software Engineer with experience in Website, Mobile,
            and Software development. Check out my projects and skills.
          </p>

          <button className="hero-cta">
            Learn more
          </button>
        </div>

        {/* Right Side 3D/Orbit Graphics */}
        <div className="hero-3d-wrapper">
          <div className="orbit-container">
            {/* Background Rings */}
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>

            {/* Center Logo */}
            <div className="center-logo" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              Ʌ
            </div>

            {/* Orbiting Icons */}
            {icons.map((icon, index) => {
              const startDelay = - (10 * (index / icons.length));
              const duration = 20 + (icon.radius / 10);

              return (
                <div
                  key={index}
                  className="tech-icon"
                  style={{
                    top: '50%',
                    left: '50%',
                    width: `${icon.size}px`,
                    height: `${icon.size}px`,
                    animation: `orbit-${index} ${duration}s linear infinite`,
                    animationDelay: `${startDelay}s`
                  }}
                  title={icon.name}
                >
                  {icon.img}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}
