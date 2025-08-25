"use client";

import React from "react";
import { FaHeart, FaEye, FaShoppingCart, FaStar } from "react-icons/fa";

const products = [
  { id: 1, name: "Smart Watch", price: "$199", img: "https://file.aiquickdraw.com/imgcompressed/img/compressed_10bc64b044f7b628ae9c772d27355c0e.webp", rating: 4 },
  { id: 2, name: "Wireless Headphones", price: "$149", img: "https://pngimg.com/d/headphones_PNG101980.png", rating: 5 },
  { id: 3, name: "Gaming Laptop", price: "$999", img: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-powerful-gaming-laptop-on-a-white-background-png-image_15836491.png", rating: 4 },
  { id: 4, name: "Sneakers", price: "$89", img: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png", rating: 3 },
];

const ShopProductsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="relative border rounded-lg overflow-hidden group hover:shadow-lg transition">
          {/* Product Image */}
          <img src={product.img} alt={product.name} className="w-full h-52 object-cover" />

          {/* Overlay Icons on Hover */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <FaHeart className="text-red-500" />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <FaEye className="text-gray-700" />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <FaShoppingCart className="text-gray-700" />
            </button>
          </div>

          {/* Product Info */}
          <div className="p-4 bg-white relative z-10">
            <h3 className="font-semibold">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center mt-1 mb-2">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={idx < product.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>

            <p className="text-gray-600">{product.price}</p>

            <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProductsGrid;
