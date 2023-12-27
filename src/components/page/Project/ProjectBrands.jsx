import React from "react";
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa";

const ProjectBrands = () => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-xl font-bold text-main">برخی از مشتریان ما</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 text-center py-8">
        <div className="text-cente w-full flex items-center justify-center">
          <FaApple className="text-5xl text-gray-700" />
        </div>
        <div className="text-cente w-full flex items-center justify-center">
          <FaGoogle className="text-5xl text-gray-700" />
        </div>
        <div className="text-cente w-full flex items-center justify-center">
          <FaMicrosoft className="text-5xl text-gray-700" />
        </div>
        <div className="text-cente w-full flex items-center justify-center">
          <FaAmazon className="text-5xl text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default ProjectBrands;
