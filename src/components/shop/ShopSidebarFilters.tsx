"use client";

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ShopSidebarFilters: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(500);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const categories = ["Clothing", "Electronics", "Accessories", "Home & Living"];
  const ratings = [5, 4, 3];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="space-y-8 p-4 bg-white rounded-lg shadow-md w-full max-w-xs">
      {/* Categories */}
      <div>
        <h2 className="font-semibold text-gray-800 mb-3 text-lg">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600 rounded "
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span className="text-gray-700">{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h2 className="font-semibold text-gray-800 mb-3 text-lg">Price Range</h2>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-gray-600">${10}</span>
          <input
            type="range"
            min={10}
            max={1000}
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <span className="text-gray-600">${priceRange}</span>
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h2 className="font-semibold text-gray-800 mb-3 text-lg">Rating</h2>
        <ul className="space-y-2">
          {ratings.map((rating) => (
            <li
              key={rating}
              className={`flex items-center space-x-2 cursor-pointer ${
                selectedRating === rating ? "text-indigo-600" : "text-gray-700"
              }`}
              onClick={() =>
                setSelectedRating(selectedRating === rating ? null : rating)
              }
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, idx) =>
                  idx < rating ? (
                    <FaStar key={idx} className="text-yellow-400" />
                  ) : (
                    <FaStarHalfAlt key={idx} className="text-gray-300" />
                  )
                )}
              </div>
              <span>& up</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopSidebarFilters;
