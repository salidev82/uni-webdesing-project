import React from "react";
import Button from "./Button";
import { ImClock } from "react-icons/im";

const PostCard = ({ img, title, description, date }) => {
  return (
    <div className="w-full bg-white rounded-md cursor-pointer shadow-xl">
      <img className="w-full rounded-md bg-contain" src={img} alt={title} />
      <h1 className="text-xl mt-4">{title}</h1>
      <p className="text-right m-4 mb-0 flex items-center gap-2">
        <ImClock />  {date}
      </p>
      <p className="text-xs text-justify my-2 px-4 leading-7">{description}</p>
      <div className="text-left my-8">
        <Button>مشاهده</Button>
      </div>
    </div>
  );
};

export default PostCard;
