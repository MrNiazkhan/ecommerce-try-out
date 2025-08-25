"use client";

import React from "react";
import { motion } from "framer-motion";


type Testimonial = {
  name: string;
  text: string;
  avatar?: string; 
};


const testimonials: Testimonial[] = [
  { name: "Alice Johnson", text: "Great products and amazing service!", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMC71Q20cv9igng3HI71TTPkupgwXp_E6BdA&s" },
  { name: "Mark Smith", text: "Fast delivery and reliable support.", avatar: "https://chro.co.za/wp-content/uploads/2023/02/Mark-Smith.png" },
  { name: "Sophia Lee", text: "Highly recommend this store to everyone.", avatar: "https://contacts.muraena.ai/sitemap_avatars/sophia-lee-514b3b5.png" },
];

const HomeTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-xl p-8 text-center flex flex-col items-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
             
              <img
                src={t.avatar || "https://source.unsplash.com/80x80/?face"}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />

              
              <p className="text-gray-700 mb-4 text-base sm:text-lg">&quot;{t.text}&quot;</p>

              
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
