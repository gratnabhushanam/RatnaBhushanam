import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <section id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: '100%' }}
        >
          <Tilt glareEnable={true} glareMaxOpacity={0.05} glareColor="#e0aaff" glarePosition="all" scale={1.01} transitionSpeed={2500} tiltMaxAngleX={3} tiltMaxAngleY={3}>
            <div className="glass-card about-text">
              <p>
                Hi, I'm <strong>Gali Ratna Bhushanam</strong>, a passionate and dedicated Full Stack Developer
                currently studying Computer Science Engineering at <strong>KL University</strong>. With a strong academic record
                and hands-on project experience, I strive to build scalable, high-performance applications.
              </p>

              <div className="about-stats">
                <div className="stat-box">
                  <h3 style={{ color: '#d8b4fe' }}>Education</h3>
                  <p style={{ fontWeight: 600, color: '#f8f8ff' }}>KL University</p>
                  <p>Bachelor of Computer Science and Engineering</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>July 2023 – Present</p>
                  <p style={{ marginTop: '0.5rem', color: 'var(--accent-cyan)' }}>◦ CGPA : 8.51/10.0</p>
                </div>
                <div className="stat-box">
                  <h3 style={{ color: '#d8b4fe' }}>Certifications</h3>
                  <ul style={{ listStyleType: 'none', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="https://www.credly.com/badges/bf444387-8c45-47d2-884c-f161e9dfa2b0/public_url" target="_blank" rel="noopener noreferrer" style={{ color: '#e0aaff', textDecoration: 'none' }}>
                        🔗 AWS Cloud Practitioner
                      </a>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>✅ Multicloud Network Associate</li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="https://certificates.automationanywhere.com/1b3cad55-aca0-4f65-b9b5-34c60803eb18#acc.1ryS5wkl" target="_blank" rel="noopener noreferrer" style={{ color: '#e0aaff', textDecoration: 'none' }}>
                        🔗 Automation Anywhere Certified Advanced RPA Professional
                      </a>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>✅ Oracle Certified Associate</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
