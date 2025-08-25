"use client";

import React from "react";
import { FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const floatingProducts = [
  "https://pngimg.com/d/women_bag_PNG6423.png",
  "https://static.vecteezy.com/system/resources/thumbnails/019/641/478/small_2x/sale-3d-label-promotion-banner-png.png",
  "https://static.vecteezy.com/system/resources/thumbnails/047/249/331/small_2x/sweater-shirt-hoodie-isolated-png.png",
];

const ShopCTA: React.FC = () => {
  return (
    <section className="relative py-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Floating Product Images */}
      {floatingProducts.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="shop product"
          className="absolute w-36 sm:w-44 md:w-52 rounded-xl shadow-2xl"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            y: [0, -25, 0, 25, 0],
            x: [0, 15, 0, -15, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0, 1, 1, 1],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            top: `${10 + i * 20}%`,
            left: `${5 + i * 40}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Don’t Miss Our Exclusive Deals!
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Subscribe now and get the latest products, discounts, and updates delivered straight to your inbox.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full text-white w-72 sm:w-96 shadow-lg focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-2xl hover:bg-blue-400 transition"
          >
            Subscribe <FaEnvelope className="ml-3" />
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default ShopCTA;
