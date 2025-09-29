import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    text: "Our dream home was built exactly as we imagined. Professional and trustworthy team!",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anita Verma",
    text: "Amazing designs and timely delivery. They truly care about customer satisfaction.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sandeep Yadav",
    text: "From planning to execution, everything was smooth. Highly recommend!",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full" />

        {/* Card Stack */}
        <div className="relative h-[420px] flex items-center justify-center">
          {testimonials.map((t, i) => {
            // figure out relative position
            let offset = (i - index + testimonials.length) % testimonials.length;
            if (offset > 1) offset = -1; // only show one behind

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: offset === 0 ? 1 : 0.6,
                  scale: offset === 0 ? 1 : 0.9,
                  // y: offset === 0 ? 0 : 20,
                  x: offset === 0 ? 0 : 30,
                  rotate: offset === 0 ? 0 : offset * 6,
                  zIndex: offset === 0 ? 10 : 5,
                }}
                transition={{ duration: 0.6 }}
                className="absolute bg-white shadow-xl rounded-xl p-8 max-w-md border"
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-500"
                />
                <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <div className="flex justify-center mt-2 text-yellow-400">
                  {"★★★★★"}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
