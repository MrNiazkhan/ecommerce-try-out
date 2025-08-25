"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";


const products = [
  {
    id: "1",
    name: "Smart Watch",
    price: "$199",
    image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_10bc64b044f7b628ae9c772d27355c0e.webp",
    description:
      "A sleek smart watch with fitness tracking, notifications, and customizable faces. Perfect for active lifestyles.",
    specs: {
      Brand: "TechGear",
      Battery: "24h",
      WaterResistant: "Yes",
      Connectivity: "Bluetooth 5.0",
    },
    rating: 4.5,
  },
  {
    id: "2",
    name: "Wireless Headphones",
    price: "$149",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/024/558/883/small_2x/black-wireless-headphones-isolated-on-transparent-background-ai-generated-png.png",
    description:
      "Noise-cancelling wireless headphones with deep bass and long-lasting battery life.",
    specs: {
      Brand: "AudioMax",
      Battery: "30h",
      NoiseCancel: "Active",
      Connectivity: "Bluetooth 5.1",
    },
    rating: 4.7,
  },
  {
    id: "3",
    name: "Leather Bag",
    price: "$89",
    image:
      "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-1.webp",
    description:
      "Premium handcrafted leather bag with multiple compartments for office & travel.",
    specs: {
      Brand: "UrbanStyle",
      Material: "Genuine Leather",
      Compartments: "3",
      Warranty: "1 Year",
    },
    rating: 4.2,
  },
  {
    id: "4",
    name: "Sunglasses",
    price: "$49",
    image:
      "https://bootstrapmade.com/content/demo/NiceShop/assets/img/product/product-3.webp",
    description:
      "Stylish UV-protection sunglasses for everyday use with lightweight frame.",
    specs: {
      Brand: "VisionPro",
      Frame: "Carbon Fiber",
      Lens: "Polarized",
      Warranty: "6 Months",
    },
    rating: 4.0,
  },
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [zoomStyle, setZoomStyle] = useState({ backgroundPosition: "center" });

  const product = products.find((p) => p.id === id);
  if (!product)
    return (
      <p className="text-center py-20 text-gray-600">Product not found.</p>
    );

  const isInWishlist = wishlist.some((p) => p.id === product.id);

  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({ backgroundPosition: `${x}% ${y}%` });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8"
      >
        
        <div
          className="relative w-full h-96 border rounded-lg overflow-hidden cursor-zoom-in"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200%",
            ...zoomStyle,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setZoomStyle({ backgroundPosition: "center" })}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain opacity-0"
          />
        </div>

        
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="text-blue-600 text-2xl font-bold mt-3">
              {product.price}
            </p>

          
            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">
                {product.rating.toFixed(1)} / 5
              </span>
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {product.description}
            </p>


            <table className="w-full mt-6 border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr
                    key={key}
                    className="odd:bg-gray-50 even:bg-white border-b"
                  >
                    <td className="px-4 py-2 font-medium text-gray-700">
                      {key}
                    </td>
                    <td className="px-4 py-2 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                })
              }
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow"
            >
              <FaShoppingCart /> Add to Cart
            </button>

            <button
              onClick={() =>
                isInWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition shadow ${
                isInWishlist
                  ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <FaHeart /> {isInWishlist ? "Remove" : "Wishlist"}
            </button>
          </div>
        </div>
      </motion.div>

     
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Related Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter((p) => p.id !== product.id)
            .map((rel) => (
              <motion.div
                key={rel.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-full h-40 object-contain"
                />
                <h3 className="mt-3 font-medium text-gray-700">{rel.name}</h3>
                <p className="text-blue-600 font-semibold">{rel.price}</p>
              </motion.div>
            ))}
        </div>
      </div>

     
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
        <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
