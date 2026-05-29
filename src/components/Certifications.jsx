import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Licenses & Certifications
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
            glareColor="var(--accent-purple)" 
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
                    <Award size={16} style={{ color: 'var(--accent-purple)', marginRight: '6px' }} /> 4 Active Credentials
                  </div>
                  <h3 style={{ fontSize: '2.1rem', margin: 0, color: 'var(--text-main)', lineHeight: '1.2' }}>Professional Certifications</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
                    Validated expertise spanning enterprise Java architectures, AWS cloud systems, robotic process automation (RPA), and multi-cloud transit networks.
                  </p>
                  <Link to="/certifications" className="btn-solid" style={{ width: 'fit-content', padding: '14px 28px', marginTop: '1rem', textDecoration: 'none' }}>
                    Explore All Credentials <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                  </Link>
                </div>

                {/* Certifications Quick Preview Stack */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: 'var(--stat-box-bg)', border: '1px solid var(--badge-border)', padding: '1.1rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'var(--accent-purple)', margin: '0 0 0.2rem 0', fontSize: '1.05rem' }}>01. Oracle Certified Associate</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Java SE programming, OOP, SQL databases</p>
                  </div>
                  <div style={{ background: 'var(--stat-box-bg)', border: '1px solid var(--badge-border)', padding: '1.1rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'var(--accent-purple)', margin: '0 0 0.2rem 0', fontSize: '1.05rem' }}>02. AWS Certified Cloud Practitioner</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cloud concepts, Core AWS services, Security</p>
                  </div>
                  <div style={{ background: 'var(--stat-box-bg)', border: '1px solid var(--badge-border)', padding: '1.1rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'var(--accent-purple)', margin: '0 0 0.2rem 0', fontSize: '1.05rem' }}>03. Automation Anywhere Advanced RPA</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bot workflows, Automations, Control Room</p>
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
