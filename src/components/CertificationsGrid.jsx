import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, ShieldCheck, Cloud, Cpu, Network, ExternalLink, Calendar, Info } from 'lucide-react';

export default function CertificationsGrid() {
  const certifications = [
    {
      id: "oca",
      title: "Oracle Certified Associate (OCA)",
      issuer: "Oracle Corporation",
      date: "September 2024",
      desc: "Validated proficiency in Java SE programming, object-oriented concepts, and basic SQL query designs. Confirms core skills for developing scalable backend platforms.",
      badgeColor: "rgba(224, 107, 47, 0.15)", // Orange-red theme for Oracle
      borderColor: "rgba(224, 107, 47, 0.4)",
      icon: <ShieldCheck size={26} style={{ color: '#e06b2f' }} />,
      verifyLink: null
    },
    {
      id: "aws",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "November 2024",
      desc: "Validates a comprehensive understanding of AWS Cloud infrastructure, security models, compliance, core services, and deployment architecture.",
      badgeColor: "rgba(255, 153, 0, 0.15)", // AWS Orange
      borderColor: "rgba(255, 153, 0, 0.4)",
      icon: <Cloud size={26} style={{ color: '#ff9900' }} />,
      verifyLink: "https://www.credly.com/badges/bf444387-8c45-47d2-884c-f161e9dfa2b0/public_url"
    },
    {
      id: "rpa",
      title: "Automation Anywhere Advanced RPA Professional",
      issuer: "Automation Anywhere",
      date: "January 2025",
      desc: "Validated advanced robotics automation workflows, robotic process automation (RPA) bot development, control room operations, and automated scaling solutions.",
      badgeColor: "rgba(0, 168, 230, 0.15)", // AA Blue
      borderColor: "rgba(0, 168, 230, 0.4)",
      icon: <Cpu size={26} style={{ color: '#00a8e6' }} />,
      verifyLink: "https://certificates.automationanywhere.com/1b3cad55-aca0-4f65-b9b5-34c60803eb18#acc.1ryS5wkl"
    },
    {
      id: "networking",
      title: "Multicloud Network Associate",
      issuer: "Aviatrix",
      date: "December 2024",
      desc: "Covers multi-cloud networking architectures, transit routing setups, hybrid cloud architectures, and cloud networking operations across AWS, Azure, and GCP platforms.",
      badgeColor: "rgba(138, 43, 226, 0.15)", // Aviatrix Purple
      borderColor: "rgba(138, 43, 226, 0.4)",
      icon: <Network size={26} style={{ color: '#8a2be2' }} />,
      verifyLink: null
    }
  ];

  return (
    <div className="certs-grid">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Tilt 
            glareEnable={true} 
            glareMaxOpacity={0.08} 
            glareColor="var(--accent-cyan)" 
            glarePosition="all" 
            scale={1.03} 
            transitionSpeed={1200}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            style={{ height: '100%' }}
          >
            <div 
              className="glass-card cert-card-3d" 
              style={{ 
                height: '100%',
                borderLeft: `5px solid ${cert.borderColor || 'var(--card-border)'}`,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="cert-header">
                <div 
                  className="cert-icon" 
                  style={{ 
                    backgroundColor: cert.badgeColor,
                    borderColor: cert.borderColor 
                  }}
                >
                  {cert.icon}
                </div>
                <div className="cert-meta">
                  <h4>{cert.title}</h4>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '3px' }}>
                    <Award size={14} style={{ color: 'var(--accent-purple)' }} /> {cert.issuer}
                  </p>
                </div>
              </div>

              <p className="cert-desc">{cert.desc}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Calendar size={14} /> {cert.date}
                </span>
                
                <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
                  <Link 
                    to={`/certification/${cert.id}`} 
                    className="btn-outline"
                    style={{ padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Info size={12} /> Details
                  </Link>
                  
                  {cert.verifyLink && (
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-solid"
                      style={{ padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      Verify <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  );
}
