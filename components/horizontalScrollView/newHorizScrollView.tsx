"use client";
import items from "@/data/items";
import React from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ScrollViewItem from "./scrollViewItem";

function NewHorizScrollView(title: string) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <>
      <h1 className="text-3xl font-semibold ">{title}</h1>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row"
        >
          {items.map((item) => (
            <ScrollViewItem category={item.name} imgUrl={item.imgUrl} />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

export default NewHorizScrollView;
