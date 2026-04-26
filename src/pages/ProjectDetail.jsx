import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ProjectDetail() {
  const { id } = useParams();

  // Mock data for the detailed view
  const projectDetails = {
    "pet-adoption": {
      title: "Pet Adoption Management System",
      fullDesc: "This is a Full Stack application designed to seamlessly connect pets in need with loving families. It handles user authentication, pet listings, adoption requests, and background admin tools.",
      tech: ["React", "Spring Boot", "SQL", "REST APIs"],
      demoLink: "https://pet-adoption-demo.vercel.app", // User can update this
      features: [
        "User Registration & Login",
        "Browse Available Pets",
        "Submit Adoption Applications",
        "Admin Dashboard for Managing Pets"
      ]
    },
    "movie-ticket": {
      title: "Movie Ticket Booking System",
      fullDesc: "A sleek and responsive ticketing system where users can browse movies, select seats interactively, and process payments securely.",
      tech: ["React.js", "Spring Boot", "SQL", "Material UI"],
      demoLink: "https://movie-booking-demo.vercel.app", // User can update this
      features: [
        "Real-time seat mapping",
        "Instant booking confirmation",
        "Filter movies by genre and date",
        "Admin panel for managing shows"
      ]
    },
    "gitwisdom": {
      title: "GitWisdom (Featured Project)",
      fullDesc: "GitWisdom is a full-stack application with an Express.js backend deployed on Render and a Vite + React frontend on Vercel. The backend handles REST API requests, processes GitHub data, and serves responses securely with free TLS certificates and auto-deploys from GitHub. By combining Web and Mobile architectures using Progressive Web App standard, it achieves wide feature parity across platforms.",
      tech: ["Vite", "React", "Express.js", "Render", "Vercel"],
      demoLink: "https://gitawisdom.vercel.app",
      features: [
        "Available on Web & Mobile",
        "Backend Express.js deployed on Render (free tier)",
        "Frontend Vite + React deployed on Vercel",
        "Automated CD/CI connected to GitHub",
        "Secure APIs with free TLS certificates included"
      ]
    }
  };

  const project = projectDetails[id];

  if (!project) {
    return (
      <>
        <Navbar />
        <section style={{ textAlign: 'center', paddingTop: '150px' }}>
          <h2>Project Not Found</h2>
          <Link to="/" className="btn-outline" style={{ marginTop: '20px' }}>Return Home</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section style={{ paddingTop: '150px', minHeight: '100vh' }}>
        <div className="contact-container glass-card" style={{ maxWidth: '800px', textAlign: 'left' }}>
          <h1 className="project-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            {project.title}
          </h1>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {project.tech.map((t, i) => (
              <span key={i} style={{ fontSize: '0.9rem', color: '#fff', background: '#8a2be2', padding: '4px 12px', borderRadius: '4px' }}>
                {t}
              </span>
            ))}
          </div>
          
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
            {project.fullDesc}
          </p>
          
          <h3 style={{ color: '#e0aaff', marginBottom: '1rem' }}>Key Features:</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>
            {project.features.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
            ))}
          </ul>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/" className="btn-outline">
              ← Back to Portfolio
            </Link>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Visit Live Site 🚀
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
