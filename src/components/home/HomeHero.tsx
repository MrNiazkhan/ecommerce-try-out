"use client";

import React from "react";
import { FaShoppingCart, FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";

const HomeHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute bg-white opacity-10 rounded-full w-40 h-40 top-10 left-20"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bg-white opacity-10 rounded-full w-60 h-60 bottom-20 right-10"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center flex flex-col items-center justify-center">
      
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our Store
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover the best products with amazing deals and exceptional quality service.
        </motion.p>

       
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Shop Now <FaShoppingCart className="inline ml-2" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 border border-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-400 transition mt-4 sm:mt-0"
          >
            Learn More <FaHeartbeat className="inline ml-2" />
          </motion.button>
        </motion.div>

      
        <motion.div
          className="mt-12 w-24 h-1 bg-white rounded-full opacity-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
      </div>

     
      <motion.img
        src="https://static.vecteezy.com/system/resources/thumbnails/047/249/331/small_2x/sweater-shirt-hoodie-isolated-png.png"
        alt="Hero Product"
        className="hidden md:block absolute bottom-0 right-0 w-1/4 max-w-sm object-contain"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  );
};

export default HomeHero;
