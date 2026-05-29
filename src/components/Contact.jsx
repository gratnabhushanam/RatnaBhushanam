import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, Send } from 'lucide-react';

const GithubIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const contactLinks = [
    {
      title: "Email",
      value: "2300030195cse2@gmail.com",
      href: "mailto:2300030195cse2@gmail.com",
      icon: <Mail size={22} />,
      label: "Send a message"
    },
    {
      title: "Phone",
      value: "+91 8688473906",
      href: "tel:+918688473906",
      icon: <Phone size={22} />,
      label: "Call directly"
    },
    {
      title: "GitHub",
      value: "github.com/gratnabhushanam",
      href: "https://github.com/gratnabhushanam",
      icon: <GithubIcon size={22} />,
      label: "Explore repositories"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/gali-ratna-bhushanam-...",
      href: "https://www.linkedin.com/in/gali-ratna-bhushanam-9a689b34a",
      icon: <LinkedinIcon size={22} />,
      label: "Connect professionally"
    }
  ];

  return (
    <section id="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-wrapper">
        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I am currently open to internship, full-time roles, and collaboration opportunities. 
          Feel free to reach out via email, phone, or connect with me on social media!
        </motion.p>

        <div className="contact-links-grid">
          {contactLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt 
                glareEnable={true} 
                glareMaxOpacity={0.06} 
                glareColor="var(--accent-cyan)" 
                glarePosition="all" 
                scale={1.03} 
                transitionSpeed={1200}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                style={{ height: '100%' }}
              >
                <a 
                  href={link.href} 
                  target={link.title === "GitHub" || link.title === "LinkedIn" ? "_blank" : undefined}
                  rel={link.title === "GitHub" || link.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="glass-card contact-card"
                  style={{ height: '100%' }}
                >
                  <div className="contact-icon">
                    {link.icon}
                  </div>
                  <h4>{link.title}</h4>
                  <p style={{ fontWeight: 500, color: 'var(--text-main)', fontSize: '0.95rem', margin: '0.4rem 0', wordBreak: 'break-all' }}>
                    {link.value}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {link.label}
                  </p>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '2rem' }}
        >
          <a href="mailto:2300030195cse2@gmail.com" className="btn-solid" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>
            Shoot An Email <Send size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
