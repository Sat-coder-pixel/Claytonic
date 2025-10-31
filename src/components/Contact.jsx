import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 w-full">
      <div className=" w-full mx-auto max-h-screen px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-xl border"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
    <input
      type="text"
      placeholder="Your Name"
      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
    <input
      type="email"
      placeholder="Your Email"
      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
    <input
      type="tel"
      placeholder="Your Phone"
      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
    <textarea
      placeholder="Your Message"
      rows="3"
      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      required
    />
  </div>
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
  >
    Send Message
  </button>
</form>

        </motion.div>

        {/* Office Info + Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
         <h2 className="text-3xl font-bold text-gray-900">Our Office</h2>
<p className="text-gray-700">P.O. Box 666, Strathfield, NSW 2135, Australia</p>
<p className="text-gray-700">
  <strong>Phone:</strong> 0450-104-451
</p>

          <p className="text-gray-700">
            <strong>Email:</strong> info@builder.com
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">🌐</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">🔗</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">📸</a>
          </div>

          {/* Map */}
          <div className="h-72 rounded-xl overflow-hidden shadow-lg border">
           <iframe
    title="Sydney Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.62533660151!2d151.20711461520847!3d-33.86881998065302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae5d5f3f0c0b%3A0x5017d681632cc40!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
          </div>
        </motion.div>
      </div>

      {/* Full-Width Footer */}
      
    </section>
  );
}
