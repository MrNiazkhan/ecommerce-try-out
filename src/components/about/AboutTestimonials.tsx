"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const AboutTestimonials: React.FC = () => {
  const testimonials = [
    { name: "Alice", text: "Amazing company with great values!" },
    { name: "Bob", text: "I love working with their team." },
    { name: "Charlie", text: "Highly recommend their services." },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-r from-purple-50 to-purple-100 overflow-hidden">
      
      {/* Decorative Floating Shapes */}
      <motion.div
        className="absolute bg-purple-200 opacity-10 rounded-full w-48 h-48 top-10 left-10"
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-purple-300 opacity-10 rounded-full w-64 h-64 bottom-20 right-20"
        animate={{ y: [0, -20, 0], x: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-purple-400 w-6 h-6" />
              <p className="text-gray-700 mb-4 mt-6 text-lg leading-relaxed">“{t.text}”</p>
              <p className="font-semibold text-purple-700">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
