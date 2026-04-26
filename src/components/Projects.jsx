import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: "pet-adoption",
      title: "Pet Adoption Management System",
      desc: "A comprehensive platform to manage pet adoptions, built with React, Spring Boot, SQL, and robust REST APIs.",
      tech: ["React", "Spring Boot", "SQL", "REST APIs"],
      demoLink: "https://pet-adoption-demo.vercel.app", // User can update this
      image: "/petadoption.png"
    },
    {
      id: "gitwisdom",
      title: "GitWisdom (Featured Project)",
      desc: "GitWisdom is available as both a responsive web app and a mobile app (Android & iOS), sharing a single Express.js REST API backend on Render.",
      tech: ["Vite", "React", "Express.js", "Node.js", "MongoDB", "Render", "Vercel"],
      demoLink: "https://gitawisdom.vercel.app",
      image: "/gitawisdom.png"
    }
  ];

  return (
    <section id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="#e0aaff" glarePosition="all" scale={1.02} transitionSpeed={2500}>
              <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid rgba(138, 43, 226, 0.2)' }} 
                />
                <h3 className="project-title" style={{ marginTop: 0 }}>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', color: '#d8b4fe', background: 'rgba(138, 43, 226, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to={`/project/${project.id}`} className="btn-outline">
                    View Details
                  </Link>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-solid">
                    Live Demo
                  </a>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
