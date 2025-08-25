"use client";

import React from "react";
import { FaTruck, FaShieldAlt, FaTags } from "react-icons/fa";
import { motion } from "framer-motion";

const HomeFeatures: React.FC = () => {
  const features = [
    { icon: <FaTruck />, title: "Fast Delivery", desc: "Get your products delivered in record time." },
    { icon: <FaShieldAlt />, title: "Secure Payments", desc: "100% secure payment methods and refunds." },
    { icon: <FaTags />, title: "Best Offers", desc: "Amazing discounts and promotions every day." },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
     
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Shop With Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-blue-600 text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
