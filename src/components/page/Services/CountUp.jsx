import React from "react";
import CountUp from "react-countup";

const CountUps = () => {
  const companyStats = [
    {
      title: "پروژه‌های موفق",
      value: 100,
      unit: "+",
    },
    {
      title: "رضایت مشتریان",
      value: 95,
      unit: "%",
    },
    {
      title: "پروژه‌های بین‌المللی",
      value: 5,
      unit: "+",
    },
    {
      title: "جوایز صنعتی",
      value: 12,
      unit: "+",
    },
  ];

  return (
    <div className="mt-8 w-full bg-green-200 h-auto p-5 rounded">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {companyStats.map((item) => {
          return (
            <div dir="ltr" className="w-full text-center text-2xl  py-4 flex flex-col items-center ">
              <CountUp className="text-left" end={item.value} prefix={item.unit} />
              <h1 className="mt-2">{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountUps;
