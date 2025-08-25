"use client";

import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMission: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-purple-50 to-purple-100 overflow-hidden">
      
      {/* Decorative Animated Shapes */}
      <motion.div
        className="absolute bg-purple-200 opacity-20 rounded-full w-40 h-40 top-10 left-10"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-purple-300 opacity-20 rounded-full w-60 h-60 bottom-10 right-20"
        animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaBullseye className="text-purple-600 mx-auto mb-4 w-12 h-12" />
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Mission</h2>
        </motion.div>

        <motion.p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We aim to provide the best products and services for our customers,
          ensuring quality, innovation, and trust in every step we take.
        </motion.p>

        {/* Optional CTA */}
        <motion.button
          className="mt-12 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-purple-500 transition"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More <FaLightbulb className="inline ml-2" />
        </motion.button>
      </div>
    </section>
  );
};

export default AboutMission;
