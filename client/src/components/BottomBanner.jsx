import React from "react";
import { assets } from "../assets/greencart_assets/assets";
import BottomBannerCards from "./BottomBannerCards";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_image}
        alt="bottom_banner_img"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="bottom_banner_img"
        className="w-full md:hidden"
      />

      {/* texts */}
      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Why We Are the Best?
          </h2>
          <BottomBannerCards
            img={assets.delivery_truck_icon}
            title={"Fastest Delivery"}
            subtitle={"Groceries delivered in under 30 minutes."}
          />
          <BottomBannerCards
            img={assets.leaf_icon}
            title={"Freshness Guaranteed"}
            subtitle={"Fresh produce straight from the source."}
          />
          <BottomBannerCards
            img={assets.coin_icon}
            title={"Affordable Prices"}
            subtitle={"Quality groceries at unbeatable prices."}
          />
          <BottomBannerCards
            img={assets.trust_icon}
            title={"Trusted by Thousands"}
            subtitle={"Loved by 10,000+ happy customers."}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
