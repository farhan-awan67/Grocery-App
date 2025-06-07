import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import EmailSection from "../components/EmailSection";

const Home = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <Hero />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <EmailSection />
    </div>
  );
};

export default Home;
