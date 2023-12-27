import React from "react";

const ProjectBox = ({ projectName, projectType, completionYear, imageUrl , description }) => {
  return (
    <div>
      <img src={imageUrl} className="rounded-md " />
      <h1 className="text-lg text-blue-500 my-2">{projectName}</h1>
      <div className="flex items-center gap-2">
        <p className="bg-gray-200 p-2 w-fit rounded">{projectType}</p>
        <p className="bg-gray-200 p-2 w-fit rounded">{completionYear}</p>
      </div>
      <p className="text-justify leading-6 mt-2 text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default ProjectBox;
