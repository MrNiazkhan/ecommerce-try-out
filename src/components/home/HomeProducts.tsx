"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  { id: "1", name: "Smart Watch", price: "$199", image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_10bc64b044f7b628ae9c772d27355c0e.webp" },
  { id: "2", name: "Wireless Headphones", price: "$149", image: "https://static.vecteezy.com/system/resources/thumbnails/024/558/883/small_2x/black-wireless-headphones-isolated-on-transparent-background-ai-generated-png.png" },
  { id: "3", name: "Leather Bag", price: "$89", image: "https://www.pngplay.com/wp-content/uploads/12/Handbag-Transparent-Images.png" },
  { id: "4", name: "Sunglasses", price: "$49", image: "https://png.pngtree.com/png-clipart/20240327/original/pngtree-black-sunglasses-eyewear-png-image_14686321.png" },
];

const HomeProducts: React.FC = () => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = (id: string) => wishlist.some(p => p.id === id);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Products
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

             
              <button
                className={`absolute top-3 left-3 p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition z-10 ${
                  isInWishlist(product.id) ? "bg-red-600 text-white" : "bg-white"
                }`}
                onClick={() =>
                  isInWishlist(product.id)
                    ? removeFromWishlist(product.id)
                    : addToWishlist({ id: product.id, name: product.name, price: product.price, image: product.image })
                }
              >
                <FaHeart />
              </button>

             
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/0 hover:bg-black/20 opacity-0 hover:opacity-100 transition duration-300">
                <button
                  className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                >
                  <FaShoppingCart />
                </button>

                <Link
                  href={`/products/${product.id}`}
                  className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                >
                  <FaEye />
                </Link>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                <p className="text-blue-600 font-bold text-lg mt-2">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
