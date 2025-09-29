import { motion } from "framer-motion";
import builderImg from "../assets/react.svg"; // replace with your image

const stats = [
  { id: 1, value: "20+", label: "Years Experience" },
  { id: 2, value: "50+", label: "Homes Delivered" },
  { id: 3, value: "100%", label: "Client Satisfaction" },
];

export default function Aboutus() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold tracking-tight relative inline-block">
            About Us
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are dedicated builders committed to creating modern homes
            that blend comfort, style, and durability. With decades of
            expertise, we bring your dream home to life with unmatched
            craftsmanship and attention to detail.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.id * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-md p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-blue-600">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={builderImg}
            alt="About our company"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
