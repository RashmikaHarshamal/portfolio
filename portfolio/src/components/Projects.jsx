import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects() {
  const projects = [
    {
      title: 'KSPA Data Analysis System (EDAS)',
      description: 'Industry-level digital platform for KSPA paper factories with real-time machine data collection and condition monitoring.',
      tech: ['Spring Boot', 'React', 'MongoDB', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      highlights: [
        'Real-time machine sensor data dashboards',
        'AI models for predictive machine failure detection',
        'Docker containerization and K8s orchestration',
        'CI/CD automation with Jenkins',
      ],
      featured: true,
    },
    {
      title: 'Human Resource Management System',
      description: 'Cross-platform HRM system for attendance, leave, payroll, and reporting.',
      tech: ['Spring Boot', 'React', 'Flutter', 'PostgreSQL', 'JWT', 'REST APIs'],
      highlights: [
        'Microservices architecture',
        'JWT authentication & role-based access control',
        'Web and mobile applications',
        'Advanced reporting features',
      ],
    },
    {
      title: 'Travel Bucket - DevOps Project',
      description: 'Comprehensive CI/CD and infrastructure project demonstrating modern DevOps practices.',
      tech: ['Jenkins', 'Docker', 'Terraform', 'AWS', 'Ansible'],
      highlights: [
        'Full CI/CD pipeline implementation',
        'Infrastructure as Code with Terraform',
        'Containerized services',
        'Production-ready deployment automation',
      ],
    },
    {
      title: 'Career Map System',
      description: 'Full-stack career guidance platform for engineering students.',
      tech: ['Spring Boot', 'React', 'MySQL', 'REST APIs', 'Responsive UI/UX'],
      highlights: [
        'Interactive dashboards',
        'Career path recommendations',
        'Student progress tracking',
        'Responsive design implementation',
      ],
    },
    {
      title: 'Hotel Booking System (MERN)',
      description: 'Full-stack application for hotel booking and management.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Admin Dashboard'],
      highlights: [
        'Room availability tracking',
        'Booking functionality',
        'Admin dashboard',
        'Real-time updates',
      ],
    },
    {
      title: 'Health Sphere Mobile App',
      description: 'Mobile health tracking and consultation application.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Mobile Development'],
      highlights: [
        'Health tracking features',
        'Consultation booking',
        'Firebase authentication',
        'Real-time data sync',
      ],
    },
    {
      title: 'Hotel Booking System (Desktop)',
      description: 'Desktop application for hotel management and bookings.',
      tech: ['C#', '.NET', 'SQL Database', 'Desktop Development'],
      highlights: [
        'Booking module',
        'Billing system',
        'Reporting module',
        'Database integration',
      ],
    },
    {
      title: 'DSA Project',
      description: 'Implementation of fundamental data structures and algorithms.',
      tech: ['Data Structures', 'Algorithms', 'Optimization', 'Problem Solving'],
      highlights: [
        'Stacks, Queues, Trees, Graphs',
        'Optimized complexity',
        'Algorithm implementations',
        'LeetCode-style problems',
      ],
    },
  ]

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 bg-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Featured Projects</h2>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`glass rounded-lg border overflow-hidden transition-smooth hover:border-blue-400 ${
                project.featured
                  ? 'md:grid md:grid-cols-2 border-blue-400/50 bg-blue-900/10'
                  : 'border-blue-500/20'
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold text-white">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/RashmikaHarshamal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded transition-smooth"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="p-6 border-t md:border-t-0 md:border-l border-blue-500/20">
                <h4 className="text-sm font-semibold text-gray-400 mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-blue-900/30 border border-blue-500/50 rounded text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
