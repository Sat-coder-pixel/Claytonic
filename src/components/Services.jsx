import { motion } from "framer-motion";
import { Home, Wrench, PenTool, Building2 } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Home Construction",
    desc: "Modern, sustainable homes built with premium materials.",
  },
  {
    id: 2,
    icon: <Wrench className="w-8 h-8 text-white" />,
    title: "Renovations",
    desc: "Upgrade and redesign spaces to fit modern lifestyles.",
  },
  {
    id: 3,
    icon: <PenTool className="w-8 h-8 text-white" />,
    title: "Custom Designs",
    desc: "Tailored architectural plans to match your vision.",
  },
  {
    id: 4,
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "Real Estate Consultancy",
    desc: "Expert advice to guide your property investments.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -left-40 -top-20 w-96 h-96 bg-gradient-to-tr from-amber-100 to-amber-50 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-40 w-80 h-80 bg-gradient-to-br from-sky-100 to-indigo-50 rounded-full opacity-30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4 text-slate-800"
        >
          Our Services
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-slate-600 max-w-3xl mx-auto mb-10">
          We deliver exceptional homes and renovation services — blending modern design, quality materials and transparent project management. Explore our core offerings below.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              role="article"
              aria-labelledby={`service-${service.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
              </div>
              <h3 id={`service-${service.id}`} className="text-lg font-semibold mb-2 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <motion.a whileHover={{ scale: 1.03 }} className="px-10 py-4 bg-amber-300 text-slate-900 text-lg font-medium rounded-full shadow-lg hover:bg-amber-400 transition" href="#contact">Enquire</motion.a>
        </div>
      </div>
    </section>
  );
}
