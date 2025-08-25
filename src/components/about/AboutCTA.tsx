"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const AboutCTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white overflow-hidden text-center">
      
      {/* Background Floating Shapes */}
      <motion.div
        className="absolute bg-white opacity-10 rounded-full w-48 h-48 top-10 left-10"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-white opacity-10 rounded-full w-64 h-64 bottom-20 right-10"
        animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Join Our Journey
        </motion.h2>

        <motion.p
          className="mb-8 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Become a part of our growing community and explore new opportunities.
        </motion.p>

        <motion.button
          className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition flex items-center justify-center mx-auto"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us <FaEnvelope className="ml-2" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
