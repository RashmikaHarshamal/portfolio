import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/10 to-slate-950 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div variants={itemVariants}>
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium">Welcome to my portfolio</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rashmika Harshamal</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">
            Software Engineer & DevOps Enthusiast
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Specialized in full-stack development and cloud infrastructure. Building scalable systems and automating infrastructure for reliable, efficient software delivery.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          <a
            href="tel:+94714191696"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-medium"
          >
            <FaPhone size={18} />
            <span>+94 714191696</span>
          </a>
          <a
            href="mailto:rashmikaharshamal169@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-medium"
          >
            <FaEnvelope size={18} />
            <span>Email Me</span>
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 text-4xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-800/50 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-800/50 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:rashmikaharshamal169@gmail.com"
            className="p-3 rounded-lg bg-gray-800/50 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-lg border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 font-medium"
          >
            Explore More ↓
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
