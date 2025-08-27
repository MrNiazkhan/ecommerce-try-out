"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: number;
  setPriceRange: (val: number) => void;
  selectedRating: number | null;
  setSelectedRating: (val: number | null) => void;
}

const ShopSidebarFilters: React.FC<Props> = ({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  selectedRating,
  setSelectedRating,
}) => {
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
    <aside className="sticky top-4 space-y-8 p-4 bg-white rounded-lg shadow-md w-full max-w-xs">
   
      <section>
        <h2 className="font-semibold text-gray-800 mb-3 text-lg">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-indigo-600 rounded"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

    
      <section>
        <h2 className="font-semibold text-gray-800 mb-3 text-lg">Price Range</h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">$10</span>
          <input
            type="range"
            min={10}
            max={1000}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <span className="text-gray-600">${priceRange}</span>
        </div>
      </section>

     
      <section>
        <h2 className="font-semibold text-gray-800 mb-3 text-lg">Rating</h2>
        <ul className="space-y-2">
          {ratings.map((rating) => (
            <li
              key={rating}
              className={`flex items-center gap-2 cursor-pointer ${
                selectedRating === rating ? "text-indigo-600" : "text-gray-700"
              }`}
              onClick={() =>
                setSelectedRating(selectedRating === rating ? null : rating)
              }
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span>& up</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default ShopSidebarFilters;
