"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutTeam: React.FC = () => {
  const team = [
    { name: "Mr. Niaz Ali", role: "Founder & CEO", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Jane Doe", role: "Lead Designer", img: "https://i.pravatar.cc/150?img=32" },
    { name: "John Smith", role: "Marketing Head", img: "https://i.pravatar.cc/150?img=52" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      
      {/* Background Floating Shapes */}
      <motion.div
        className="absolute bg-indigo-200 opacity-10 rounded-full w-48 h-48 top-10 left-10"
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-indigo-300 opacity-10 rounded-full w-64 h-64 bottom-20 right-20"
        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Team
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-40 w-40 mx-auto rounded-full overflow-hidden mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
