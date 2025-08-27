"use client";

import React from "react";
import { FaHeart, FaEye, FaShoppingCart, FaStar } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
  rating: number;
}

const ShopProductsGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = (id: number) => wishlist.some((p) => p.id === String(id));

  const handleAddToCart = (product: Product) =>
    addToCart({
      id: String(product.id),
      name: product.name,
      price: `$${product.price}`,
      image: product.img,
    });

  const handleWishlistToggle = (product: Product) =>
    isInWishlist(product.id)
      ? removeFromWishlist(String(product.id))
      : addToWishlist({
          id: String(product.id),
          name: product.name,
          price: `$${product.price}`,
          image: product.img,
        });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.length ? (
        products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg overflow-hidden group hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-52 object-cover"
            />

         
            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition">
              <button
                className={`p-2 rounded-full shadow transition ${
                  isInWishlist(product.id)
                    ? "bg-red-600 text-white"
                    : "bg-white text-red-500 hover:bg-red-600 hover:text-white"
                }`}
                onClick={() => handleWishlistToggle(product)}
              >
                <FaHeart />
              </button>

              <Link
                href={`/products/${product.id}`}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100 flex items-center justify-center"
              >
                <FaEye className="text-gray-700" />
              </Link>

              <button
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                onClick={() => handleAddToCart(product)}
              >
                <FaShoppingCart className="text-gray-700" />
              </button>
            </div>

           
            <div className="p-4 bg-white relative z-10">
              <h3 className="font-semibold">{product.name}</h3>

              <div className="flex items-center mt-1 mb-2">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={
                      idx < product.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-600">${product.price}</p>

              <button
                className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found
        </p>
      )}
    </div>
  );
};

export default ShopProductsGrid;
