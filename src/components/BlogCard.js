import React from "react";

const BlogCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4">
      <a href={link} rel="noopener noreferrer">
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
          <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;