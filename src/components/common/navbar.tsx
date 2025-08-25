"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const isLoggedIn = typeof window !== "undefined" && !!localStorage.getItem("currentUser");

  const handleDashboardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLoggedIn) {
      e.preventDefault();
      window.location.href = "/auth-gateway";
    }
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                src="https://www.seekpng.com/png/full/428-4289671_logo-e-commerce-good-e-commerce-logo.png"
                alt="E-Commerce Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/shop" className="hover:text-blue-600 transition">Shop</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link
              href="/dashboard"
              className="hover:text-blue-600 transition flex items-center gap-1"
              onClick={handleDashboardClick}
            >
              Dashboard
            </Link>
          </div>

          {/* Cart / Wishlist / Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="relative">
              <FaHeart className="text-xl hover:text-red-600 transition" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center font-semibold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-xl hover:text-blue-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 rounded hover:bg-gray-200 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <Link href="/" className="hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" className="hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/about" className="hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link
              href="/dashboard"
              className="hover:text-blue-600 transition flex items-center gap-1"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleDashboardClick(e);
              }}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
