"use client";

import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutTeam from "@/components/about/AboutTeam";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutTestimonials />
      <AboutCTA />
    </>
  );
};

export default AboutPage;
