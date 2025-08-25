"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaTag } from "react-icons/fa";

const ShopBanner: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.pikbest.com/origin/10/01/82/867pIkbEsTAIq.png!w700wp')",
        }}
      />

      
      <div className="absolute inset-0 bg-black/70" />

     
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute bg-white opacity-10 rounded-full w-40 h-40 top-16 left-24"
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bg-white opacity-10 rounded-full w-72 h-72 bottom-10 right-20"
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

     
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-28 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div className="z-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Shop Our Latest <span className="text-blue-400">Collection</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover premium products, unbeatable deals, and stylish trends —
            designed just for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-400 transition"
            >
              Start Shopping <FaShoppingCart className="inline ml-2" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-white hover:text-gray-900 transition"
            >
              View Deals <FaTag className="inline ml-2" />
            </motion.button>
          </motion.div>
        </div>

        
        <motion.img
          src="https://static.vecteezy.com/system/resources/thumbnails/019/641/478/small_2x/sale-3d-label-promotion-banner-png.png"
          alt="Extra Product"
          className="absolute bottom-0 right-10 w-64 sm:w-80 md:w-[420px] object-contain z-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>

      
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full opacity-70"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      />
    </section>
  );
};

export default ShopBanner;
