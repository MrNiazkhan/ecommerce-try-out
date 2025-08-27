"use client";

import React, { useState, useMemo } from "react";
import ShopBanner from "@/components/shop/ShopBanner";
import ShopTopbar from "@/components/shop/ShopTopbar";
import ShopSidebarFilters from "@/components/shop/ShopSidebarFilters";
import ShopProductsGrid from "@/components/shop/ShopProductsGrid";
import ShopCTA from "@/components/shop/ShopCTA";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
  rating: number;
}

const allProducts: Product[] = [
  { id: 1, name: "Smart Watch", price: 199, category: "Electronics", img: "https://file.aiquickdraw.com/imgcompressed/img/compressed_10bc64b044f7b628ae9c772d27355c0e.webp", rating: 4 },
  { id: 2, name: "Wireless Headphones", price: 149, category: "Electronics", img: "https://pngimg.com/d/headphones_PNG101980.png", rating: 5 },
  { id: 3, name: "Gaming Laptop", price: 999, category: "Electronics", img: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-powerful-gaming-laptop-on-a-white-background-png-image_15836491.png", rating: 4 },
  { id: 4, name: "Sneakers", price: 89, category: "Clothing", img: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png", rating: 3 },
];

const ShopPage: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(1000);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>("latest");

  const filteredProducts: Product[] = useMemo(() => {
    const filtered = allProducts.filter((p) => {
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchPrice = p.price <= priceRange;
      const matchRating = selectedRating === null || p.rating >= selectedRating;
      return matchCategory && matchPrice && matchRating;
    });

    switch (sortOption) {
      case "priceLowHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategories, priceRange, selectedRating, sortOption]);

  return (
    <>
      <ShopBanner />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="hidden lg:block">
          <ShopSidebarFilters
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
        </aside>

        <div className="lg:col-span-3 space-y-4">
          <ShopTopbar
            showingResults={filteredProducts.length}
            totalResults={allProducts.length}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <ShopProductsGrid products={filteredProducts} />
        </div>
      </div>

      <ShopCTA />
    </>
  );
};

export default ShopPage;
