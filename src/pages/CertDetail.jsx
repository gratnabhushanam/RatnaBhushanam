import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { ArrowLeft, Calendar, Award, ShieldCheck, CheckCircle, ExternalLink, Cpu } from 'lucide-react';
import { useEffect } from 'react';

export default function CertDetail() {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certDetails = {
    "oca": {
      title: "Oracle Certified Associate (OCA)",
      issuer: "Oracle Corporation",
      date: "September 2024",
      desc: "The Oracle Certified Associate (OCA) Java SE Programmer credential is a premier software industry certification. It validates a strong, fundamental understanding of the Java programming language, its core syntax, object-oriented concepts, and basic database operations. Earning this certification demonstrates readiness to build reliable, high-performance applications and handle complex programming assignments.",
      skills: [
        "Java SE syntax and data structures (Primitives, Strings, Wrapper Classes).",
        "Object-Oriented Programming (OOP) paradigms including Inheritance, Polymorphism, and Encapsulation.",
        "Error handling, code debugging, and Java Exception hierarchy structures.",
        "Core Java APIs (Arrays, Lists, ArrayList, StringBuilder, and Date-Time APIs).",
        "Foundational JDBC operations for connecting applications to relational database servers."
      ],
      examInfo: "Passed the Java SE Programmer I Exam (1Z0-808). Validates understanding of professional coding standards, memory allocation, and Java runtime processes.",
      verifyLink: null
    },
    "aws": {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "November 2024",
      desc: "The AWS Certified Cloud Practitioner credential validates an overall understanding of the Amazon Web Services Cloud platform. It covers basic cloud concepts, security practices, billing mechanisms, core services (compute, database, storage), and compliance guidelines. It confirms a solid foundation in modern cloud infrastructure design and deployment principles.",
      skills: [
        "AWS Cloud Architecture Principles (Scalability, Elasticity, Fault Tolerance, High Availability).",
        "Core AWS Services (EC2 Virtual Servers, S3 Object Storage, RDS Database Clusters, Lambda Serverless, VPC Networking, and IAM Access Management).",
        "Cloud Security Operations, AWS Shared Responsibility Model, and Encrypted connections.",
        "Billing structures, pricing calculators, support tier differences, and cost allocation tags.",
        "Cloud deployment, monitoring with CloudWatch, and automation fundamentals."
      ],
      examInfo: "Passed the AWS Certified Cloud Practitioner Exam (CLF-C02). Confirms competency to describe cloud value propositions and define security practices.",
      verifyLink: "https://www.credly.com/badges/bf444387-8c45-47d2-884c-f161e9dfa2b0/public_url"
    },
    "rpa": {
      title: "Automation Anywhere Advanced RPA Professional",
      issuer: "Automation Anywhere",
      date: "January 2025",
      desc: "This certification validates knowledge and proficiency in Robotic Process Automation (RPA) design and bot development workflows using the Automation Anywhere platform. It certifies capability to build, test, and deploy cognitive software bots that automate complex business processes and interact with diverse web, desktop, and database interfaces.",
      skills: [
        "Robotic Process Automation bot building, task configurations, and local deployment.",
        "RPA Architecture concepts including Control Room operations, user management, and locker configurations.",
        "Use of variables, loops, conditionals, and database connectors inside automated scripts.",
        "UI automation, web scraping, Excel data processes, and email automation triggers.",
        "Advanced error handling, debugging logs, and bot performance optimization patterns."
      ],
      examInfo: "Certified Advanced RPA Professional Certification. Confirms mastery in automating enterprise workflows and scheduling bots for autonomous operations.",
      verifyLink: "https://certificates.automationanywhere.com/1b3cad55-aca0-4f65-b9b5-34c60803eb18#acc.1ryS5wkl"
    },
    "networking": {
      title: "Multicloud Network Associate",
      issuer: "Aviatrix",
      date: "December 2024",
      desc: "The Aviatrix Certified Engineer (ACE) Multicloud Network Associate credential validates a solid foundation in multi-cloud networking, cloud transit architectures, connectivity schemas, and network security policies across major cloud providers (Amazon Web Services, Microsoft Azure, Google Cloud Platform). It certifies understanding of native cloud network limits and multi-cloud routing.",
      skills: [
        "Multi-Cloud Network Architecture (MCNA) concepts, transit routing, and access control.",
        "Native networking configurations for AWS (VPCs), Azure (VNets), and GCP (VPCs).",
        "Design patterns for high-availability networking, hybrid cloud connections, and transit setups.",
        "Network visibility, real-time logging, traffic monitoring, and cloud security firewalls.",
        "Configuring IP security policies, transit tunnels, and end-to-end cloud encryption."
      ],
      examInfo: "Aviatrix Certified Engineer - Multicloud Network Associate. Focuses on bridging networking gaps and multi-cloud operations.",
      verifyLink: null
    }
  };

  const cert = certDetails[id];

  if (!cert) {
    return (
      <>
        <Navbar />
        <section style={{ textAlign: 'center', paddingTop: '150px', minHeight: '100vh' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Certification Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>The credential you are looking for is not in our system.</p>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  background: 'var(--badge-bg)', 
                  border: '1px solid var(--badge-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifycontent: 'center',
                  color: 'var(--accent-cyan)',
                  padding: '15px'
                }}
              >
                <Award size={30} />
              </div>
              <div>
                <motion.h1 
                  className="detail-title"
                  style={{ margin: 0, fontSize: '2.2rem' }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.title}
                </motion.h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '2px' }}>{cert.issuer}</p>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="detail-meta-grid" style={{ gridTemplateColumns: '1.8fr 1.1fr', marginTop: '2rem' }}>
            {/* Left Column: Descriptions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Credential Overview</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2.5rem' }}>
                {cert.desc}
              </p>

              <div className="detail-features">
                <h3 style={{ fontSize: '1.4rem' }}>Skills & Knowledge Validated</h3>
                <ul className="feature-list">
                  {cert.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Information card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="glass-card sidebar-card">
                <h3 className="sidebar-title">Verification Info</h3>

                <div className="info-item">
                  <div className="info-label">Issuer</div>
                  <div className="info-val">{cert.issuer}</div>
                </div>

                <div className="info-item">
                  <div className="info-label">Issue Date</div>
                  <div className="info-val">{cert.date}</div>
                </div>

                <div className="info-item">
                  <div className="info-label">Certification Scope</div>
                  <div className="info-val" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--accent-cyan)' }} /> Full Associate Badge
                  </div>
                </div>

                <div className="info-item" style={{ marginTop: '1.5rem' }}>
                  <div className="info-label" style={{ marginBottom: '5px' }}>Exam Details</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{cert.examInfo}</p>
                </div>

                {cert.verifyLink && (
                  <div style={{ marginTop: '2.5rem' }}>
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-solid"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Verify Credential <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
