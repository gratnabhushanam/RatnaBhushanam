import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Layout, 
  Server, 
  Code, 
  Terminal, 
  Cpu, 
  Settings, 
  Database, 
  GitBranch, 
  Workflow, 
  Globe, 
  Brain,
  CheckCircle
} from 'lucide-react';

export default function Skills() {
  const skillsList = [
    { name: "Frontend", icon: <Layout size={24} /> },
    { name: "Backend", icon: <Server size={24} /> },
    { name: "Java", icon: <Code size={24} /> },
    { name: "Python", icon: <Terminal size={24} /> },
    { name: "React.js", icon: <Cpu size={24} /> },
    { name: "Spring Boot", icon: <Settings size={24} /> },
    { name: "MySQL", icon: <Database size={24} /> },
    { name: "Git", icon: <GitBranch size={24} /> }
  ];

  const expertiseList = [
    {
      title: "REST APIs",
      desc: "Designing and developing secure, scalable backend APIs with RESTful patterns, JSON schemas, and structured routing.",
      icon: <Workflow size={24} />
    },
    {
      title: "Web Development",
      desc: "Creating highly responsive single-page web applications with modern layouts, smooth transitions, and cross-device optimization.",
      icon: <Globe size={24} />
    },
    {
      title: "Database Management",
      desc: "Designing relational database schemas, normalizing tables, writing optimized SQL queries, and handling migrations.",
      icon: <Database size={24} />
    },
    {
      title: "Problem Solving",
      desc: "Strong algorithmic foundations, solving complex programming challenges, optimizing time/space complexity, and logical thinking.",
      icon: <Brain size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="skills-container">
        {/* Left Column: Skills Grid */}
        <div className="skills-wrapper">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle size={22} style={{ color: 'var(--accent-cyan)' }} /> Technical Skills
          </motion.h3>

          <motion.div 
            className="skills-grid-modern"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillsList.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt 
                  glareEnable={true} 
                  glareMaxOpacity={0.1} 
                  glareColor="var(--accent-purple)" 
                  glarePosition="all" 
                  scale={1.05} 
                  transitionSpeed={1000}
                  tiltMaxAngleX={10} 
                  tiltMaxAngleY={10}
                  style={{ height: '100%' }}
                >
                  <div className="glass-card skill-card-3d">
                    <div className="skill-icon-box">
                      {skill.icon}
                    </div>
                    <h4>{skill.name}</h4>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Technical Expertise */}
        <div className="expertise-wrapper">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Brain size={22} style={{ color: 'var(--accent-purple)' }} /> Technical Expertise
          </motion.h3>

          <motion.div 
            className="expertise-grid-modern"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {expertiseList.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tilt 
                  glareEnable={true} 
                  glareMaxOpacity={0.06} 
                  glareColor="var(--accent-cyan)" 
                  glarePosition="all" 
                  scale={1.02} 
                  transitionSpeed={1200}
                  tiltMaxAngleX={4} 
                  tiltMaxAngleY={4}
                >
                  <div className="glass-card expertise-card-3d">
                    <div className="expertise-icon-box">
                      {exp.icon}
                    </div>
                    <div className="expertise-content">
                      <h4>{exp.title}</h4>
                      <p>{exp.desc}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
