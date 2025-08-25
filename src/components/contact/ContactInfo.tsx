"use client";

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex items-center gap-3">
            <FaPhone className="text-indigo-600 text-2xl" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-600 text-2xl" />
            <p>support@example.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
            <p>123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
