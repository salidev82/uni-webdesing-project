import React from "react";
import project_img from "../assets/images/project.jpg";
import ProjectBox from "../components/page/Project/ProjectBox";
import ProjectBrands from "../components/page/Project/ProjectBrands";

const Projects = () => {
  const companyProjects = [
    {
      projectName: "پروژه رستوران بیسترو گرین",
      projectType: "تجاری",
      completionYear: 2023,
      imageUrl: project_img,
      description:
        "رستوران بیسترو گرین یک پروژه تجاری است که با طراحی شیک و امکانات رفاهی، یک تجربه غذایی منحصر به فرد ارائه می‌دهد. این پروژه در قلب شهر واقع شده است.",
    },
    {
      projectName: "پروژه ویلای مدرن ساحلی",
      projectType: "مسکونی",
      completionYear: 2022,
      imageUrl: project_img,
      description:
        "ویلا مدرن ساحلی یک پروژه مسکونی لوکس با طراحی معماری مدرن و دسترسی مستقیم به ساحل است. با امکانات برجسته، این ویلا یک منزل آرامش‌بخش و زیباست.",
    },
    {
      projectName: "پروژه پارک سبز بوستان",
      projectType: "فضای باز",
      completionYear: 2021,
      imageUrl: project_img,
      description:
        "پارک سبز بوستان یک فضای باز زیبا و آرام برای استراحت و تفریح است. با باغ‌های گل و امکانات ورزشی، این پارک محلی ایده‌آل برای خانواده‌ها و علاقه‌مندان به فعالیت‌های فضای باز است.",
    },
    {
      projectName: "پروژه آپارتمان مسکونی گلدیس",
      projectType: "مسکونی",
      completionYear: 2022,
      imageUrl: project_img,
      description:
        "پروژه آپارتمان مسکونی گلدیس یک پروژه مسکونی لوکس با معماری مدرن و امکانات به روز است. این پروژه در منطقه‌ای امن و دسترسی آسان واقع شده است.",
    },
    {
      projectName: "پروژه مجتمع تجاری نیکان",
      projectType: "تجاری",
      completionYear: 2021,
      imageUrl: project_img,
      description:
        "مجتمع تجاری نیکان یک پروژه بسیار پویا و حاشیه‌نشین با فضای باز و مغازه‌های متنوع است. این مجتمع به تجربه یک خرید خاص و جذاب تبدیل شده است.",
    },
    {
      projectName: "پروژه پارک علم و فناوری",
      projectType: "فضای باز",
      completionYear: 2020,
      imageUrl: project_img,
      description:
        "پارک علم و فناوری یک فضای باز برای ارتقاء تحقیقات و فعالیت‌های فناورانه است. این پروژه با هدف ایجاد امکانات تحقیقاتی و نوآورانه طراحی شده است.",
    },
  ];

  return (
    <div className="mt-2 bg-white p-5 rounded border shadow-md">
      <div className="text-center">
        <h1 className=" text-main text-2xl">پروژه های شرکت</h1>

        <p className="mt-2">
          با بیش از ۱۰۰ پروژه موفق، ما در طراحی و اجرای پروژه‌های معماری و طراحی
          پیشرو هستیم.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-8">
        {companyProjects.map((item) => (
          <ProjectBox
            imageUrl={item.imageUrl}
            projectName={item.projectName}
            projectType={item.projectType}
            completionYear={item.completionYear}
            description={item.description}
          />
        ))}
      </div>
      <div className="mt-18"><ProjectBrands /></div>
    </div>
  );
};

export default Projects;
