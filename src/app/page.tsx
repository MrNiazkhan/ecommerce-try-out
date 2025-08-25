"use client";

import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeFeatures from "../components/home/HomeFeatures";
import HomeProducts from "../components/home/HomeProducts";
import HomeTestimonials from "../components/home/HomeTestimonials";
import HomeCTA from "../components/home/HomeCTA";

const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeProducts />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
};

export default HomePage;
