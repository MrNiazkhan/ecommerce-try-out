"use client";

import React from "react";

interface ShopTopbarProps {
  showingResults: number;
  totalResults: number;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

const ShopTopbar: React.FC<ShopTopbarProps> = ({
  showingResults,
  totalResults,
  sortOption,
  setSortOption,
}) => {
  const sortOptions = [
    { value: "latest", label: "Sort by Latest" },
    { value: "priceLowHigh", label: "Price: Low to High" },
    { value: "priceHighLow", label: "Price: High to Low" },
    { value: "rating", label: "Rating" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 mb-6">
      <p className="text-gray-600 text-sm md:text-base">
        Showing 1–{showingResults} of {totalResults} results
      </p>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 text-sm md:text-base
                   focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShopTopbar;
