import React from "react";

const BottomBannerCards = ({ img, title, subtitle }) => {
  return (
    <div className="flex gap-4 mt-2">
      <div>
        <img className="md:w-11 w-9" src={img} alt="img" />
      </div>

      <div className="text-left">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-gray-500/70 text-xs md:text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default BottomBannerCards;
