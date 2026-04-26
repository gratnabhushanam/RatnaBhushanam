import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Contact() {
  return (
    <section id="contact" style={{ marginBottom: '4rem' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.05} glareColor="#e0aaff" glarePosition="all" scale={1.01} transitionSpeed={2500} tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <div className="contact-container glass-card">
            <p style={{ fontSize: '1.1rem', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <motion.a 
              href="mailto:2300030195cse2@gmail.com" 
              className="contact-link"
              whileHover={{ scale: 1.05, color: '#fff' }}
            >
              <span style={{ fontSize: '1.5rem' }}>📧</span> 2300030195cse2@gmail.com
            </motion.a>

            <motion.a 
              href="tel:+918688473906" 
              className="contact-link"
              whileHover={{ scale: 1.05, color: '#fff' }}
            >
              <span style={{ fontSize: '1.5rem' }}>📞</span> +91 8688473906
            </motion.a>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
              <motion.a 
                href="https://github.com/gratnabhushanam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
                style={{ marginBottom: 0 }}
                whileHover={{ scale: 1.1, color: '#00f2fe' }}
              >
                <span style={{ fontSize: '1.8rem' }}>💻</span> GitHub
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/gali-ratna-bhushanam-9a689b34a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
                style={{ marginBottom: 0 }}
                whileHover={{ scale: 1.1, color: '#00f2fe' }}
              >
                <span style={{ fontSize: '1.8rem' }}>💼</span> LinkedIn
              </motion.a>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </section>
  );
}
