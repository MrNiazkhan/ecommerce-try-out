"use client";

import React from "react";
import ShopBanner from "@/components/shop/ShopBanner";
import ShopTopbar from "@/components/shop/ShopTopbar";
import ShopSidebarFilters from "@/components/shop/ShopSidebarFilters";
import ShopProductsGrid from "@/components/shop/ShopProductsGrid";
import ShopCTA from "@/components/shop/ShopCTA";

const ShopPage: React.FC = () => {
  return (
    <>
    
      <ShopBanner />

 
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
       
        <aside className="hidden lg:block">
          <ShopSidebarFilters />
        </aside>

       
        <div className="lg:col-span-3">
         
          <ShopTopbar />

          
          <ShopProductsGrid />
        </div>
      </div>

     
      <ShopCTA />
    </>
  );
};

export default ShopPage;
