import React from "react";
import {
  FaFileArchive,
  FaPencilAlt,
  FaPalette,
  FaBuilding,
} from "react-icons/fa";
import ServiceBox from "./ServiceBox";

const AllServices = () => {
  const servicesData = [
    {
      title: "طراحی معماری",
      description:
        "ارائه خدمات حرفه‌ای در زمینه طراحی معماری ساختمان‌ها و ایجاد فضاهای منحصر به فرد و جذاب.",
      icon: <FaFileArchive />,
    },
    {
      title: "طراحی داخلی",
      description:
        "طراحی فضاهای داخلی با توجه به آخرین ترند‌ها و نیازهای مشتریان، ایجاد محیط‌های راحت و زیبا.",
      icon: <FaPalette />,
    },
    {
      title: "مشاوره معماری",
      description:
        "ارائه مشاوره تخصصی در زمینه‌های مختلف معماری، بهبود عملکرد ساختمانی و بهینه‌سازی فضاها.",
      icon: <FaBuilding />,
    },
    {
      title: "طراحی لوگو و برندینگ",
      description:
        "طراحی لوگوها و ایجاد برند منحصر به فرد برای کسب‌وکارها با توجه به هویت و اهداف آنها.",
      icon: <FaPencilAlt />,
    },
    {
      title: "طراحی مناظر",
      description:
        "طراحی مناظر سبز و فضاهای باز با هدف ایجاد محیطی زیبا و ارتباط مستمر با طبیعت.",
      icon: <FaBuilding />,
    },
    {
      title: "پروژه‌های ساخت و ساز",
      description:
        "مدیریت و نظارت بر پروژه‌های ساخت و ساز با رویکرد بهبود فرآیندها و کنترل هزینه‌ها.",
      icon: <FaFileArchive />,
    },
  ];

  return (
    <section className="bg-white rounded shadow-xl border p-10">
      <div className="flex flex-col gap-y-8  text-center mb-12">
        <h1 className="font-bold text-xl text-main">خدمات معماری و طراحی</h1>

        <p className="text-justify leading-7">
          با تکیه بر تخصص و تجربه ما در حوزه معماری و طراحی، خدمات متنوعی ارائه
          می‌دهیم تا به نیازها و اهداف شما پاسخ دهیم. از طراحی معماری گرفته تا
          طراحی داخلی و مشاوره تخصصی، تیم ما با همت و الهام به ارائه راهکارهای
          خلاقانه و کارآمد می‌پردازد.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {servicesData.map((el) => (
          <ServiceBox
            icon={el.icon}
            title={el.title}
            description={el.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
