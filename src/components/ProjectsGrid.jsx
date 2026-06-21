import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectsGrid() {
  const projects = [
    {
      id: "pet-adoption",
      title: "Pet Adoption Management System",
      desc: "A full-stack application designed to seamlessly connect pets in need with loving families. Features secure user accounts, advanced pet catalog filtering, adoption request management, and an admin dashboard.",
      tech: ["React.js", "Spring Boot", "MySQL", "REST APIs", "Git"],
      demoLink: "https://petadoption1-orpin.vercel.app/",
      githubLink: "https://github.com/gratnabhushanam",
      image: "/petadoption.png"
    },
    {
      id: "omstream",
      title: "Omstream Streaming Platform",
      desc: "A rich digital streaming platform delivering spiritual teachings. The application uses React for a smooth client interface and Express.js on Render for api delivery, storing media and text references in MongoDB.",
      tech: ["Vite", "React.js", "Express.js", "MongoDB", "Render", "Vercel"],
      demoLink: "https://omstream.vercel.app",
      githubLink: "https://github.com/gratnabhushanam",
      image: "/gitawisdom.png"
    },
    {
      id: "movie-ticket",
      title: "Movie Ticket Booking System",
      desc: "A sleek and responsive ticketing system where users can browse movies, select seats interactively, and process payments securely. Backed by Spring Boot REST APIs.",
      tech: ["React.js", "Spring Boot", "SQL", "Material UI", "Git"],
      demoLink: "https://movie-booking-demo.vercel.app",
      githubLink: "https://github.com/gratnabhushanam",
      image: "/moviebooking.png"
    }
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="var(--accent-cyan)"
            glarePosition="all"
            scale={1.03}
            transitionSpeed={1500}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            style={{ height: '100%' }}
          >
            <div className="glass-card project-card-3d">
              <div className="project-img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Info size={16} /> Hover to interact
                  </span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <Link to={`/project/${project.id}`} className="btn-outline">
                  <Info size={16} /> Details
                </Link>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: '10px' }}
                  aria-label="GitHub Repository"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid"
                  style={{ marginLeft: 'auto' }}
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  );
}
