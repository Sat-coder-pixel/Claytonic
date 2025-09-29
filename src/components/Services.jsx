import { motion } from "framer-motion";
import { Home, Wrench, PenTool, Building2 } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Home className="w-10 h-10 text-blue-600" />,
    title: "Home Construction",
    desc: "Modern, sustainable homes built with premium materials.",
  },
  {
    id: 2,
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Renovations",
    desc: "Upgrade and redesign spaces to fit modern lifestyles.",
  },
  {
    id: 3,
    icon: <PenTool className="w-10 h-10 text-blue-600" />,
    title: "Custom Designs",
    desc: "Tailored architectural plans to match your vision.",
  },
  {
    id: 4,
    icon: <Building2 className="w-10 h-10 text-blue-600" />,
    title: "Real Estate Consultancy",
    desc: "Expert advice to guide your property investments.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 relative inline-block"
        >
          Our Services
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
