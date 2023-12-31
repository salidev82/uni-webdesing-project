import React from "react";
import BannerGreen from "../../../assets/images/Banner-green.png";
import BannerRed from "../../../assets/images/Banner-red.png";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:m-0 mx-8">
      <div className="mb-12 relative -top-1  mx-auto w-full flex  items-center justify-center">
        <a href="#">
          <img src={BannerGreen} alt="banner_green" />
        </a>
      </div>
      <div className="mb-12 relative -top-14  mx-auto w-full flex  items-center justify-center">
        <a href="#">
          <img src={BannerRed} alt="banner_red" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
