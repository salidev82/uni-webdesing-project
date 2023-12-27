import React from "react";

const ServiceBox = ({ icon, title, description }) => {
  return (
    <div className="w-full bg-white border-2 p-5 flex flex-col gap-y-4 hover:bg-green-900 hover:text-white hover:ease-in-out delay-100">
      <div className="bg-main w-fit p-5 rounded-full text-xl text-white shadow-main shadow-lg">
        {icon}
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-justify leading-6">{description}</p>
    </div>
  );
};

export default ServiceBox;
