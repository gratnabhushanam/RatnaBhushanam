import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { ArrowLeft, Calendar, User, Folder, ExternalLink, CheckCircle, Cpu, Globe } from 'lucide-react';
import { useEffect } from 'react';

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function ProjectDetail() {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectDetails = {
    "pet-adoption": {
      title: "Pet Adoption Management System",
      category: "Full Stack Web Application",
      date: "Spring 2024",
      role: "Full Stack Developer",
      image: "/petadoption.png",
      demoLink: "https://pet-adoption-demo.vercel.app",
      githubLink: "https://github.com/gratnabhushanam",
      fullDesc: "This is a comprehensive, three-tier Full Stack application designed to connect homeless pets with loving families. By leveraging a high-performance React client and a robust Spring Boot microservice, the system automates and streamlines animal catalogs, adoption application reviews, background checks, and administrative operations.",
      tech: ["React.js", "Spring Boot", "MySQL", "REST APIs", "Git"],
      features: [
        "Role-based secure authentication & authorization for regular users and administration teams.",
        "Interactive pet listing catalog with complex multi-criteria filters (type, age, size, breed).",
        "Adopt request submission workflow with structured form validations and status checks.",
        "Administrative dashboard featuring pet profiles management, user logs, and application processing."
      ],
      architecture: "The application separates concerns cleanly. The client layer is built in React, routing API requests dynamically to a backend Spring Boot controller. Persistency is achieved using Hibernate/Spring Data JPA connected to a relational MySQL schema, optimizing fetch operations and keeping transactional integrity."
    },
    "gitawisdom": {
      title: "Gita Wisdom Streaming Platform",
      category: "Audio Streaming & Content Web App",
      date: "Winter 2024",
      role: "Lead Full Stack Developer",
      image: "/gitawisdom.png",
      demoLink: "https://gitawisdom.vercel.app",
      githubLink: "https://github.com/gratnabhushanam",
      fullDesc: "Gita Wisdom is a high-quality streaming application engineered to deliver translation, commentary, and audios of spiritual teachings. The architecture relies on an Express.js backend hosted on Render, servicing a fast React frontend hosted on Vercel. Media collections, notes, and user configurations are stored and queries in MongoDB.",
      tech: ["Vite", "React.js", "Express.js", "MongoDB", "Render", "Vercel"],
      features: [
        "Optimized audio streaming engine with playlist selectors, seek bars, and playback speed adjustments.",
        "Multilingual database index allowing complex search lookups for text translations and commentaries.",
        "Personalized user spaces containing favorite bookmarks, listening history, and personal note-taking.",
        "Continuous Deployment (CI/CD) pipelines from GitHub with automated builds, testing, and secure TLS certifications."
      ],
      architecture: "Engineered using the MERN stack model. The Express backend serves REST APIs and handles media stream requests securely. MongoDB is used to model unstructured transcripts and chapters, allowing rapid scaling and quick search queries. Security is established with JWT and https protocols."
    },
    "movie-ticket": {
      title: "Movie Ticket Booking System",
      category: "Full Stack Ticketing Application",
      date: "Summer 2024",
      role: "Backend Developer",
      image: "/moviebooking.png",
      demoLink: "https://movie-booking-demo.vercel.app",
      githubLink: "https://github.com/gratnabhushanam",
      fullDesc: "This is a modern Movie Ticket Booking platform designed to facilitate easy search and ticketing. It offers an interactive seat allocation interface, dynamic pricing rules, and instant checkout confirmations.",
      tech: ["React.js", "Spring Boot", "SQL", "Material UI", "Git"],
      features: [
        "Interactive graphical seat-selection maps dynamically displaying booked vs available states.",
        "Automatic booking confirmation emails with PDF tickets and barcode generation.",
        "Comprehensive search filters for sorting by cinema location, showtimes, and language.",
        "Admin control console for configuring cinema screens, adding showtimes, and monitoring sales graphs."
      ],
      architecture: "Engineered on a decoupled architecture. The frontend uses React and Material UI components, talking to a Spring Boot backend. The database layer is structured in SQL, using stored procedures and transactional boundaries to ensure double-booking prevention."
    }
  };

  const project = projectDetails[id];

  if (!project) {
    return (
      <>
        <Navbar />
        <section style={{ textAlign: 'center', paddingTop: '150px', minHeight: '100vh' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Project Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>The project you are trying to view does not exist in our records.</p>
          <Link to="/" className="btn-solid">
            <ArrowLeft size={16} /> Return Home
          </Link>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <section className="detail-container">
          {/* Back Navigation */}
          <div style={{ marginBottom: '2.5rem' }}>
            <Link to="/" className="btn-outline" style={{ display: 'inline-flex', padding: '8px 16px', fontSize: '0.9rem' }}>
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>

          {/* Header */}
          <div className="detail-header">
            <motion.h1 
              className="detail-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.title}
            </motion.h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>{project.category}</p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="detail-main-img" 
            />
          </motion.div>

          {/* Main Grid */}
          <div className="detail-meta-grid">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', color: 'var(--text-main)' }}>Overview</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2.5rem' }}>
                {project.fullDesc}
              </p>

              <div className="detail-features">
                <h3>Key Features</h3>
                <ul className="feature-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={22} style={{ color: 'var(--accent-purple)' }} /> Architecture & Tech Stack
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.75' }}>
                  {project.architecture}
                </p>
              </div>
            </motion.div>

            {/* Right Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="glass-card sidebar-card">
                <h3 className="sidebar-title">Project Details</h3>
                
                <div className="info-item">
                  <div className="info-label">
                    <User size={13} style={{ marginRight: '5px', verticalAlign: 'middle' }} /> Role
                  </div>
                  <div className="info-val">{project.role}</div>
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <Calendar size={13} style={{ marginRight: '5px', verticalAlign: 'middle' }} /> Date
                  </div>
                  <div className="info-val">{project.date}</div>
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <Folder size={13} style={{ marginRight: '5px', verticalAlign: 'middle' }} /> Tech Stack
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '0.4rem' }}>
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag" style={{ fontSize: '0.75rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '2.5rem' }}>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-solid"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Visit Site <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    View Code <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
