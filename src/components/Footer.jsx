import React from 'react'
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <div>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-gray-300 py-8 mt-16"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Builder Company. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Projects</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
