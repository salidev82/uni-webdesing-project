import React from "react";
import PostCard from "../../share/PostCard";
import Projects_1 from "../../../assets/projects_1.png";

const Posts = () => {
  const fakeData = [
    {
      id: 1,
      title: "به روز ترین متد های طراحی داخلی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
      img: Projects_1,
      date: "سیزده فروردین",
    },
    {
      id: 2,
      title: "به روز ترین متد های طراحی داخلی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
      img: Projects_1,
      date: "سیزده فروردین",
    },
    {
      id: 3,
      title: "به روز ترین متد های طراحی داخلی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
      img: Projects_1,
      date: "سیزده فروردین",
    },
  ];

  return (
    <div>
      <div className="text-center mt-10 mx-2">
        <p className="text-main">وبلاگ</p>
        <h2 className="text-black text-2xl">
          آخرین اخبار معماری و طراحی در بخش بلاگ ما
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-8">
          {fakeData.map((item) => {
            return (
              <PostCard
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
