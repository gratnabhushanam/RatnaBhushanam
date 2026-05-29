import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, Download, GraduationCap, Award } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function About() {
  return (
    <section id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-grid">
        {/* Left Column: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="about-img-container"
        >
          <div className="about-img-glow"></div>
          <div className="about-img-wrapper">
            <img 
              src="/profile_picture.jpg" 
              alt="Gali Ratna Bhushanam" 
              className="about-img" 
            />
          </div>
        </motion.div>

        {/* Right Column: Narrative & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="about-text"
        >
          <h3>Hi there, I'm G. Ratna Bhushanam</h3>
          <p>
            I am a passionate and driven <strong>Full Stack Software Engineer</strong> currently pursuing my 
            Bachelor of Computer Science and Engineering at <strong>KL University</strong>. I specialize in building 
            modern web experiences and robust backends.
          </p>
          <p>
            My technical interest spans across frontend architecture, database systems, and full-stack integration. 
            With a strong focus on clean code and performance, I enjoy turning complex problems into elegant, scalable digital solutions.
          </p>

          <div className="about-actions">
            <a 
              href="/G_Ratna_Bhushanam_Resume.txt" 
              download="G_Ratna_Bhushanam_Resume.txt" 
              className="btn-solid"
            >
              <Download size={18} /> Download Resume
            </a>
            
            <div className="social-links">
              <a 
                href="https://github.com/gratnabhushanam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/gali-ratna-bhushanam-9a689b34a" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>

              <a 
                href="mailto:2300030195cse2@gmail.com" 
                className="social-btn"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+918688473906" 
                className="social-btn"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="about-stats">
            <Tilt 
              glareEnable={true} 
              glareMaxOpacity={0.05} 
              glareColor="#8a2be2" 
              glarePosition="all" 
              scale={1.02} 
              tiltMaxAngleX={5} 
              tiltMaxAngleY={5}
            >
              <div className="stat-box glass-card" style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <GraduationCap size={22} style={{ color: 'var(--accent-cyan)' }} />
                  <h3 style={{ margin: 0 }}>Education</h3>
                </div>
                <p style={{ fontWeight: 600, color: 'var(--text-main)', margin: '0.2rem 0' }}>KL University</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>B.Tech - Computer Science & Engineering</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>July 2023 – Present</p>
                <p style={{ marginTop: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 'bold' }}>◦ CGPA : 8.51 / 10.0</p>
              </div>
            </Tilt>

            <Tilt 
              glareEnable={true} 
              glareMaxOpacity={0.05} 
              glareColor="#8a2be2" 
              glarePosition="all" 
              scale={1.02} 
              tiltMaxAngleX={5} 
              tiltMaxAngleY={5}
            >
              <div className="stat-box glass-card" style={{ height: '100%', borderLeft: '4px solid var(--accent-cyan)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <Award size={22} style={{ color: 'var(--accent-purple)' }} />
                  <h3 style={{ margin: 0 }}>Professional</h3>
                </div>
                <p style={{ fontWeight: 600, color: 'var(--text-main)', margin: '0.2rem 0' }}>Core Competence</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Designing RESTful microservices, database schemas, and highly responsive user interfaces.</p>
              </div>
            </Tilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
