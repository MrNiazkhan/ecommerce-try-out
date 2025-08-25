"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div className="space-y-4">
          <h2 className="text-white font-bold text-xl sm:text-2xl">Brand</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Premium e-commerce platform providing top-quality products and a seamless shopping experience.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-blue-600 transition text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-blue-400 transition text-white">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-pink-500 transition text-white">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-blue-700 transition text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      
        <div className="space-y-4">
          <h2 className="text-white font-bold text-xl sm:text-2xl">Quick Links</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/" className="hover:text-white transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white transition duration-200">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

     
        <div className="space-y-4">
          <h2 className="text-white font-bold text-xl sm:text-2xl">Subscribe</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Sign up to get the latest news and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm sm:text-base"
            />
            <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold hover:bg-blue-700 transition text-sm sm:text-base">
              Subscribe
            </button>
          </form>
        </div>
      </div>

     
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm sm:text-base">
        © {new Date().getFullYear()} Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
