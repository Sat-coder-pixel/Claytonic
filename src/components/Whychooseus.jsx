import { motion } from "framer-motion";
import { CheckCircle, Clock, Home, Smile } from "lucide-react";

const features = [
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: "Quality Construction",
    desc: "We build homes with top-grade materials and modern methods for lasting strength.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "On-Time Delivery",
    desc: "Projects delivered within deadlines, ensuring efficiency and trust.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Modern Designs",
    desc: "Elegant, functional, and innovative designs tailored to your needs.",
  },
  {
    icon: <Smile className="w-8 h-8 text-blue-600" />,
    title: "Customer Satisfaction",
    desc: "Trusted by families for our transparency, reliability, and care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Us
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
