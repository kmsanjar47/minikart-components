import React from "react";

function ItemCard() {
  return (
    <div className="flex flex-col mb-4">
      <div className="bg-[url('../public/assets/img/Children-Literature-2.webp')] bg-cover h-96 w-72 cursor-pointer rounded-md mb-3"></div>
      <h4 className="hover:text-orange-500 hover:cursor-pointer font-semibold mb-2 text-lg">
        The Adventures of TinTin
      </h4>
      <h6 className="text-gray-400 font-light mb-2 text-sm">
        by{" "}
        <span className="hover:text-orange-500 cursor-pointer font-medium">
          Jimmy P bullard
        </span>
      </h6>
      <h4 className="text-orange-500 font-semibold">300$ - 350$</h4>
    </div>
  );
}

export default ItemCard;
