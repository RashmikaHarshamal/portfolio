import React from 'react'
import { motion } from 'framer-motion'
import { FaJava, FaPython, FaReact, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa'
import { SiSpringboot, SiKubernetes, SiTerraform, SiPostgresql } from 'react-icons/si'

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'C', 'C#', 'C++', 'Python', 'JavaScript', 'HTML', 'SQL'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'Axios'],
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      icon: FaReact,
    },
    {
      title: 'Backend & Frameworks',
      skills: ['Spring Boot', 'Spring Cloud', 'Microservices', 'Node.js', 'Express.js', 'JWT', 'MVC'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      icon: SiSpringboot,
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      icon: SiPostgresql,
    },
    {
      title: 'DevOps & CI/CD',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Terraform', 'CI/CD Pipelines'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      icon: FaDocker,
    },
    {
      title: 'Cloud Services',
      skills: ['AWS (EC2)', 'Google Cloud Platform', 'Cloud Deployment', 'Nginx'],
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
      icon: FaAws,
    },
    {
      title: 'Testing & API',
      skills: ['JUnit', 'Postman', 'API Testing', 'Unit Testing', 'Integration Testing'],
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-500/10 to-pink-500/10',
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'Version Management', 'Collaboration'],
      gradient: 'from-pink-500 to-purple-500',
      bgGradient: 'from-pink-500/10 to-purple-500/10',
      icon: FaGitAlt,
    },
    {
      title: 'AI/ML',
      skills: ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'CNN', 'KNN', 'Data Preprocessing'],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-500/10 to-blue-500/10',
    },
    {
      title: 'Software Engineering',
      skills: ['OOP', 'Data Structures & Algorithms', 'Design Patterns', 'SOLID Principles', 'SDLC', 'Agile', 'Scrum'],
      gradient: 'from-slate-500 to-gray-500',
      bgGradient: 'from-slate-500/10 to-gray-500/10',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      id="skills"
      className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise across full-stack development, cloud infrastructure, and DevOps technologies
          </motion.p>
        </div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group relative bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 overflow-hidden`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  {category.icon && (
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      <category.icon size={28} className="text-white" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-20 border border-white/20 text-white text-sm font-medium hover:bg-opacity-30 hover:border-white/40 transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills

