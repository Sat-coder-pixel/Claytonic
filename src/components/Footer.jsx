import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';  // 🔹 import EmailJS
export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_8i3kwc5",   // 🔹 replace with Service ID
        "template_qt6yecp",  // 🔹 replace with Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "hlEHntgBDb22A2JyW"    // 🔹 replace with Public Key
      )
      .then(
        () => {
          setShowPopup(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setTimeout(() => setShowPopup(false), 3000);
        },
        (error) => {
          console.error("Email send failed:", error);
          alert("Failed to send message. Try again later.");
        }
      );
  };
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-lg px-4 py-2.5"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-lg px-4 py-2.5"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-lg px-4 py-2.5"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded-lg px-4 py-2.5"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
        </motion.div>

        {/* Office Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-white">Our Office</h2>
          <p className="text-gray-400">49 Mountain Street, The Ponds, New South Wales 2769, Australia </p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> info.claytonic@gmail.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-indigo-500 transition">🌐</a>
            <a href="#" className="hover:text-indigo-500 transition">🔗</a>
            <a href="#" className="hover:text-indigo-500 transition">📸</a>
          </div>

          {/* Map */}
          <div className="h-48 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.0206641823424!2d150.8962675!3d-33.7084142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129edd365b5a17%3A0x5b7edd0fcf9ebb69!2s49%20Mountain%20St%2C%20The%20Ponds%20NSW%202769%2C%20Australia!5e0!3m2!1sen!2sin!4v1759315240171!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-indigo-500">About Us</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-500">Projects</a></li>
            <li><a href="#services" className="hover:text-indigo-500">Services</a></li>
            <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Builder Company. All rights reserved.
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          ✅ Message sent! We’ll get back to you soon.
        </motion.div>
      )}
    </footer>
  );
}
