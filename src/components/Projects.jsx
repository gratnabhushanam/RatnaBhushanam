import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects Portfolio
      </motion.h2>

      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Tilt 
            glareEnable={true} 
            glareMaxOpacity={0.08} 
            glareColor="var(--accent-cyan)" 
            glarePosition="all" 
            scale={1.02} 
            transitionSpeed={1500}
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
          >
            <div className="glass-card" style={{ padding: '3rem' }}>
              <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                
                {/* Visual Stack Graphic */}
                <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div className="hero-badge" style={{ marginBottom: 0, width: 'fit-content' }}>
                    <FolderGit2 size={16} style={{ color: 'var(--accent-cyan)', marginRight: '6px' }} /> 3 Active Repositories
                  </div>
                  <h3 style={{ fontSize: '2.1rem', margin: 0, color: 'var(--text-main)', lineHeight: '1.2' }}>Engineering Full Stack Systems</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
                    Designs engineered using modern state management (React.js), reactive server nodes (Spring Boot, Express.js), secure transaction layers, and database queries.
                  </p>
                  <Link to="/projects" className="btn-solid" style={{ width: 'fit-content', padding: '14px 28px', marginTop: '1rem', textDecoration: 'none' }}>
                    Explore All Projects <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                  </Link>
                </div>

                {/* Projects Quick Preview Stack */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: 'var(--stat-box-bg)', border: '1px solid var(--badge-border)', padding: '1.2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 0.3rem 0', fontSize: '1.1rem' }}>01. Pet Adoption Management</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>React, Spring Boot, MySQL, REST APIs</p>
                  </div>
                  <div style={{ background: 'var(--stat-box-bg)', border: '1px solid var(--badge-border)', padding: '1.2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 0.3rem 0', fontSize: '1.1rem' }}>02. Gita Wisdom Streaming</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Vite, React, Express, MongoDB</p>
                  </div>
                  <div style={{ background: 'var(--stat-box-bg)', border: '1px solid var(--badge-border)', padding: '1.2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'var(--accent-cyan)', margin: '0 0 0.3rem 0', fontSize: '1.1rem' }}>03. Movie Ticket Booking</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>React, Spring Boot, SQL, Material UI</p>
                  </div>
                </div>

              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
