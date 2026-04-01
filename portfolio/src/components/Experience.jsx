import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaAward, FaUsers } from 'react-icons/fa'

function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 px-4 bg-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Experience & Achievements</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBriefcase size={24} className="text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">Professional</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-300">Trainee</h4>
                <p className="text-gray-400 text-sm">People's Bank, Ampara, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaAward size={24} className="text-yellow-400" />
              <h3 className="text-xl font-semibold text-yellow-400">Achievements</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-300">IEEEXtreme 18.0</h4>
                <p className="text-gray-400 text-sm">Global Rank: 720 | SL: 55</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">IEEEXtreme 19.0</h4>
                <p className="text-gray-400 text-sm">Global Rank: 1321 | SL: 131</p>
              </div>
            </div>
          </motion.div>

          {/* Volunteering */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUsers size={24} className="text-purple-400" />
              <h3 className="text-xl font-semibold text-purple-400">Community</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-300">Volunteer Teacher</h4>
                <p className="text-gray-400 text-sm">Mehewara Project</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">Team Leader</h4>
                <p className="text-gray-400 text-sm">ReXtro Exhibition</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">Football Player</h4>
                <p className="text-gray-400 text-sm">University Team</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-lg border border-blue-500/20"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-8">My Journey</h3>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-300">Full-Stack Development Mastery</h4>
                <p className="text-gray-400 text-sm">
                  Developed expertise in React, Spring Boot, and microservices architecture through multiple production projects.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-300">DevOps & Infrastructure</h4>
                <p className="text-gray-400 text-sm">
                  Gained hands-on experience with Docker, Kubernetes, Jenkins, Terraform, and AWS cloud infrastructure.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-300">Competitive Programming</h4>
                <p className="text-gray-400 text-sm">
                  Competed in IEEEXtreme global programming competition, ranking in top 1500 globally and top 100 in Sri Lanka.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-300">Industry-Scale Projects</h4>
                <p className="text-gray-400 text-sm">
                  Currently working on EDAS project for KSPA, implementing AI-based predictive maintenance and real-time monitoring.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
