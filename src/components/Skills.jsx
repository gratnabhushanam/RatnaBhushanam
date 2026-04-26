import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "JavaScript", "Java", "C", "React.js", 
    "Spring Boot", "Node.js", "MongoDB", 
    "PostgreSQL", "MySQL", "Material UI"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants} className="skill-tag">
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
