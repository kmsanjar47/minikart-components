import React from "react";
import ScrollViewItem from "./scrollViewItem";

const horizontalScrollView = (props: { items: Array<any>; title: string }) => {
  let items = props.items.map((item) => {
    return <ScrollViewItem imgUrl="dummy" category="Comic Books" />;
  });
  return (
    <div className="mx-12 flex flex-col mt-8">
      <h1 className="text-3xl font-semibold ">{props.title}</h1>
      <div className="mt-4">
        <div className="self-center flex flex-nowrap overflow-x-scroll">
          <div className="flex flex-row">{items}</div>
        </div>
      </div>
    </div>
  );
};

export default horizontalScrollView;
