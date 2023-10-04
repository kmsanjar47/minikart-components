import React from "react";
import ScrollViewItem from "./scrollViewItem";

const horizontalScrollView = () => {
  return (
    <div className="self-center flex flex-nowrap overflow-x-scroll">
      <div className="flex flex-row">
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
        <ScrollViewItem />
      </div>
    </div>
  );
};

export default horizontalScrollView;
