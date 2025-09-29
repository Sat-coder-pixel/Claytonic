import { motion } from "framer-motion";
import project1 from "../assets/react.svg";
import project2 from "../assets/react.svg";
import project3 from "../assets/react.svg";

const projects = [
  {
    id: 1,
    img: project1,
    title: "Luxury Villa",
    location: "Bangalore",
    desc: "Spacious modern villa with eco-friendly design.",
  },
  {
    id: 2,
    img: project2,
    title: "Urban Apartments",
    location: "Hyderabad",
    desc: "Premium apartments designed for city living.",
  },
  {
    id: 3,
    img: project3,
    title: "Coastal Retreat",
    location: "Goa",
    desc: "Beachfront homes with stunning sea views.",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 relative inline-block"
        >
          Our Projects
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-blue-500">{project.location}</p>
                <p className="mt-3 text-gray-600">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
            View More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
