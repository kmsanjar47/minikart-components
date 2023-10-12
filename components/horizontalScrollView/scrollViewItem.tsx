import React from "react";

const scrollViewItem = (props: { category: string; imgUrl: string }) => {
  return (
    <div className="flex flex-col mr-4">
      <h1 className="text-3xl font-semibold ">{props.title}</h1>
      <div className="bg-[url('../public/assets/img/Children-Literature-2.webp')] bg-cover h-48 w-40  ease-in-out duration-300 cursor-pointer rounded-md mb-3 hover:scale-105"></div>
      <h4 className="hover:text-orange-500 hover:cursor-pointer font-semibold text-gray-700 mb-2 text-md">
        Comic Books
      </h4>
    </div>
  );
};

export default scrollViewItem;
