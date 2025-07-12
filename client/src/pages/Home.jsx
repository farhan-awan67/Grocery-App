import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import EmailSection from "../components/EmailSection";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <EmailSection />
    </div>
  );
};

export default Home;
