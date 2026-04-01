import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-lg border border-blue-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a Computer Engineering undergraduate at the University of Ruhuna with a passion for
                building scalable, efficient systems. My expertise spans full-stack development and DevOps practices.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I thrive on solving complex technical challenges and implementing CI/CD pipelines that enable
                reliable software delivery. My interest in microservices, containerization, and cloud infrastructure
                drives me to continuously learn and innovate.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or playing football with my university team.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Education</h3>
              <p className="text-gray-300">
                <strong>Computer Engineering</strong><br />
                University of Ruhuna<br />
                <span className="text-gray-400">Current GPA: 3.28</span>
              </p>
            </div>

            <div className="glass p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Achievement Highlight</h3>
              <p className="text-gray-300">
                <strong>IEEEXtreme 18.0</strong><br />
                Global Ranking: 720 | Sri Lanka: 55
              </p>
            </div>

            <div className="glass p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Professional Experience</h3>
              <p className="text-gray-300">
                <strong>Trainee</strong><br />
                People's Bank, Ampara
              </p>
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 glass p-8 rounded-lg border border-blue-500/20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Project Management',
              'Leadership',
              'Public Relations',
              'Teamwork',
              'Time Management',
              'Effective Communication',
              'Critical Thinking',
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-purple-900/30 border border-purple-500/50 rounded-full text-sm text-purple-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
