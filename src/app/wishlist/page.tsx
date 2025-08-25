"use client";

import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import { FaTrash } from "react-icons/fa";

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-6">
          {wishlist.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">Price: {item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromWishlist(item.id)} className="text-red-600 hover:text-red-800">
                <FaTrash />
              </button>
            </div>
          ))}

          <div className="text-right">
            <button
              onClick={clearWishlist}
              className="mt-4 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
            >
              Clear Wishlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
