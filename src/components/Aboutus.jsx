import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeImage from "../assets/homeimage.jpg";

import s1 from "../assets/s1.png";
import s2 from "../assets/d4.jpeg";
import s3 from "../assets/s5.png";
import s4 from "../assets/s4.jpeg";

// Example image list (replace with real project images)
const images = [
  s1,
  s2,
  s3,
  s4
];

const stats = [
  { id: 1, value: 20, label: "Years Experience" },
  { id: 3, value: 100, label: "Client Satisfaction (%)" },
];

export default function Aboutus() {
  // Counter animation for stats
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((val, i) =>
          val < stats[i].value ? val + Math.ceil(stats[i].value / 50) : stats[i].value
        )
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-5 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-extrabold tracking-tight relative inline-block">
            About Us
            {/* <span className="absolute left-0 bottom-0 w-24 h-1 bg-indigo-500 rounded-full"></span> */}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            We are a Sydney-based design & build partner. We work closely with clients,
            architects and local trades to deliver practical, energy-efficient homes that
            suit Australian lifestyles. From Castle Hill to Box Hill and beyond, we focus on
            considered layouts, responsible materials and clear communication through each project.
          </p>

          {/* Stats */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {stats.map((stat, i) => (
    <motion.div
      key={stat.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform break-words"
    >
      <p className="text-3xl font-extrabold text-indigo-600">
        {counters[i]}
        {stat.id === 3 ? "%" : "+"}
      </p>
      <p className="text-gray-500 text-sm">{stat.label}</p>
    </motion.div>
  ))}
</div>

        </motion.div>

        {/* Auto Scrolling Image Carousel */}
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl"
>
  <motion.div
    className="flex h-full"
    animate={{ x: [0, -images.length * 400] }} // move by exact pixels
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 20, // adjust speed
      ease: "linear",
    }}
>

            {[...images, ...images].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="showcase"
                loading="lazy"
                className="w-[400px] h-full object-cover rounded-lg mx-2 will-change-transform"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
