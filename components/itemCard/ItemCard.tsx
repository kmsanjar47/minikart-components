"use client";

import React from "react";
import Modal from "../utils/modal";

function ItemCard(props: {
  name: string;
  authorName: string;
  imgUrl: string;
  price: string;
}) {
  return (
    <div
      onClick={() => {
        return <Modal />;
      }}
      className="flex flex-col mb-4"
    >
      <div
        className={`bg-[url("../public/assets/img/Children-Literature-2.webp")] bg-cover h-96 w-72 cursor-pointer rounded-md mb-3`}
      ></div>
      <h4 className="hover:text-orange-500 hover:cursor-pointer font-semibold mb-2 text-lg">
        {props.name}
      </h4>
      <h6 className="text-gray-400 font-light mb-2 text-sm">
        by{" "}
        <span className="hover:text-orange-500 cursor-pointer font-medium">
          {props.authorName}
        </span>
      </h6>
      <h4 className="text-orange-500 font-semibold">{props.price}</h4>
    </div>
  );
}

export default ItemCard;
