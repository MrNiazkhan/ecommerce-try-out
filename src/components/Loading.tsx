"use client";

import React from "react";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-50">
      
      <motion.div
        className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
     
      <p className="mt-6 text-gray-700 font-medium text-lg">Loading...</p>
      
      <div className="flex space-x-2 mt-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 bg-indigo-500 rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
