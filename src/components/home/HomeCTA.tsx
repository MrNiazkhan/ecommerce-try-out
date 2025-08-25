"use client";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const floatingImages = [
  "https://pngimg.com/d/women_bag_PNG6423.png",
  "https://static.vecteezy.com/system/resources/thumbnails/047/249/331/small_2x/sweater-shirt-hoodie-isolated-png.png",
];

const HomeCTA: React.FC = () => {
  return (
    <section className="relative py-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden mb-[-50px]">
      {floatingImages.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="product"
          className="absolute w-36 sm:w-44 md:w-52 rounded-lg shadow-2xl"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 20, 0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0, 1, 1, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            top: `${10 + i * 25}%`,
            left: `${5 + i * 50}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Elevate Your Shopping Experience
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover premium products, unbeatable deals, and a seamless experience built for you.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-white text-blue-600 px-12 py-4 rounded-full font-bold shadow-2xl hover:bg-gray-100 transition"
        >
          Shop Now <FaShoppingCart className="ml-3" />
        </motion.button>
      </div>

     
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default HomeCTA;
