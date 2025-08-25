"use client";

import React from "react";
import { FaUsers, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-indigo-700 to-indigo-500 text-white overflow-hidden flex items-center justify-center">
      
      
      <motion.div
        className="absolute bg-white opacity-5 rounded-full w-48 h-48 top-16 left-10"
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-white opacity-5 rounded-full w-64 h-64 bottom-20 right-16"
        animate={{ y: [0, -20, 0], x: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      
      <div className="relative max-w-4xl text-center px-6">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Journey
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          From humble beginnings to becoming a trusted name, our story is about passion, innovation, and people. Meet the minds shaping our vision every day.
        </motion.p>

       
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Meet the Team <FaUsers className="inline ml-2" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 border border-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-indigo-500 transition mt-4 sm:mt-0"
          >
            Our Vision <FaLightbulb className="inline ml-2" />
          </motion.button>
        </motion.div>

        
        <motion.div
          className="mt-12 w-24 h-1 bg-white rounded-full opacity-40 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
      </div>

      
      <motion.img
        src="https://www.pngall.com/wp-content/uploads/2016/07/Team-Free-Download-PNG.png"
        alt="Team Illustration"
        className="hidden md:block absolute bottom-0 left-10 w-1/3 max-w-sm object-contain"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  );
};

export default AboutHero;
