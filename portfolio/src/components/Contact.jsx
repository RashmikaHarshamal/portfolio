import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post('/api/contact', formData)
      if (response.status === 200) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 bg-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-lg border border-blue-500/20 flex gap-4">
              <div className="flex-shrink-0">
                <FaPhone size={32} className="text-blue-400 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">Phone</h3>
                <a
                  href="tel:+94714191696"
                  className="text-gray-400 hover:text-blue-400 transition-smooth"
                >
                  +94 714191696
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-lg border border-blue-500/20 flex gap-4">
              <div className="flex-shrink-0">
                <FaEnvelope size={32} className="text-blue-400 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">Email</h3>
                <a
                  href="mailto:rashmikaharshamal169@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-smooth"
                >
                  rashmikaharshamal169@gmail.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-lg border border-blue-500/20 flex gap-4">
              <div className="flex-shrink-0">
                <FaMapMarkerAlt size={32} className="text-blue-400 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">Location</h3>
                <p className="text-gray-400">Ampara, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-lg border border-blue-500/20 space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-blue-500/30 rounded text-gray-300 focus:outline-none focus:border-blue-500 transition-smooth"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-blue-500/30 rounded text-gray-300 focus:outline-none focus:border-blue-500 transition-smooth"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-slate-800 border border-blue-500/30 rounded text-gray-300 focus:outline-none focus:border-blue-500 transition-smooth resize-none"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading || submitted}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded font-semibold transition-smooth"
            >
              {loading ? 'Sending...' : submitted ? 'Message Sent! ✓' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
