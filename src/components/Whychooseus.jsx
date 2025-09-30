import { motion } from "framer-motion";
import { CheckCircle, Clock, Home, Smile } from "lucide-react";

const features = [
  {
    icon: <Home className="w-6 h-6 text-white" />,
    title: "Quality Construction",
    desc: "We build homes with top-grade materials and modern methods for lasting strength.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "On-Time Delivery",
    desc: "Projects delivered within deadlines, ensuring efficiency and trust.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Modern Designs",
    desc: "Elegant, functional, and innovative designs tailored to your needs.",
  },
  {
    icon: <Smile className="w-6 h-6 text-white" />,
    title: "Customer Satisfaction",
    desc: "Trusted by families for our transparency, reliability, and care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute left-0 top-0 w-72 h-72 bg-gradient-to-br from-sky-100 to-indigo-50 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-slate-800"
        >
          Why Choose Us
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="max-w-3xl mx-auto text-slate-600 mt-4 mb-10">
          We combine craftsmanship, on-time delivery and modern design sensibilities to deliver homes that families love. Our transparent process keeps clients informed at every step.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              role="region"
              aria-label={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.a whileHover={{ scale: 1.03 }} className="inline-block  px-10 py-4 bg-amber-300 text-slate-900 text-lg font-medium rounded-full shadow-lg hover:bg-amber-400 transition" href="#contact">Talk to an expert</motion.a>
        </div>
      </div>
    </section>
  );
}
