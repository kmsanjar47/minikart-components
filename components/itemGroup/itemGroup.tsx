import React from "react";
import ItemCard from "../itemCard/ItemCard";

function itemsGroup(props: { items: Array<any>; title: string }) {
  let items = props.items.map((item, index) => {
    return (
      <ItemCard
        name={item.name}
        authorName={item.authorName}
        imgUrl={item.imgUrl}
        price={item.price}
      />
    );
  });
  return (
    <div className="mx-12 flex flex-col mt-8">
      <h1 className="text-3xl font-semibold ">{props.title}</h1>
      <div className=" flex flex-row justify-between flex-wrap mt-4">
        {items}
      </div>
    </div>
  );
}

export default itemsGroup;
