import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full" />

        <div className="relative h-72 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-md rounded-xl p-8 max-w-lg mx-auto"
            >
              <img
                src={testimonials[index].photo}
                alt={testimonials[index].name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">
                "{testimonials[index].text}"
              </p>
              <h3 className="font-semibold">{testimonials[index].name}</h3>
              <div className="flex justify-center mt-2 text-yellow-400">
                {"★★★★★"}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
