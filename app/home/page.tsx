import React from "react";
import Navbar from "@/components/navbar/navbar";
import HorizontalScrollView from "@/components/horizontalScrollView/horizontalScrollView";
import ItemGroup from "@/components/itemGroup/itemGroup";
import Modal from "@/components/utils/modal";
import items from "../../data/items";
import NewHorizScrollView from "@/components/horizontalScrollView/newHorizScrollView";

function Home() {
  return (
    <div>
      <Navbar />
      <ItemGroup title="Popular Products" items={items} />
      {/* <HorizontalScrollView title="Which Book You Like to See?" items={items} /> */}
      <NewHorizScrollView title="" />
      <ItemGroup title="New Arrived" items={items} />
    </div>
  );
}

export default Home;
