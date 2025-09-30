import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'
import projects from '../data/projects'

// const projectd = [
//   { id: 1, img: project1, title: "Luxury Villa", location: "Bangalore", desc: "Spacious modern villa with eco-friendly design." },
//   { id: 2, img: project2, title: "Urban Apartments", location: "Hyderabad", desc: "Premium apartments designed for city living." },
//   { id: 3, img: project3, title: "Coastal Retreat", location: "Goa", desc: "Beachfront homes with stunning sea views." },
//   { id: 4, img: project4, title: "Hilltop Cottage", location: "Shimla", desc: "Cozy cottages with breathtaking mountain views." },
// ];

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto text-center px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 relative inline-block"
        >
          Our Projects
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
        </motion.h2>

        {/* Projects Grid */}
        <motion.div 
          layout   // 👈 enables smooth layout animations
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {visibleProjects.map((project, idx) => (
              <Link to={`/projects/${project.id}`} key={project.id} aria-label={`Open ${project.title} details`}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.03, y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-blue-500">{project.location}</p>
                    <p className="mt-3 text-gray-600">{project.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
          layout   // 👈 button also smoothly moves up/down
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-4 bg-amber-300 text-slate-900 text-lg font-medium rounded-full shadow-lg hover:bg-amber-400 transition"
          >
            {showAll ? "View Less" : "View More Projects"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
