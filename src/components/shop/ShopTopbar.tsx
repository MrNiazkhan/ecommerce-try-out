"use client";

import React, { useState } from "react";

const ShopTopbar: React.FC = () => {
  const [sortOption, setSortOption] = useState("latest");
  const totalResults = 48;
  const showingResults = 12;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 md:gap-0">
      
      <p className="text-gray-600 text-sm md:text-base">
        Showing 1–{showingResults} of {totalResults} results
      </p>

      
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
      >
        <option value="latest">Sort by Latest</option>
        <option value="priceLowHigh">Sort by Price: Low to High</option>
        <option value="priceHighLow">Sort by Price: High to Low</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>
  );
};

export default ShopTopbar;
