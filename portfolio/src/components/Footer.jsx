import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-blue-500/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Rashmika Harshamal</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Engineer & DevOps enthusiast building scalable systems and automating infrastructure
              for reliable software delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-smooth">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-smooth">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/RashmikaHarshamal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-smooth"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/rashmika-harshamal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-smooth"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:rashmikaharshamal169@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-smooth"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Rashmika Harshamal. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Crafted with{' '}
              <span className="text-red-500">♥</span> using React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
