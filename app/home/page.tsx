import React from "react";
import ItemCard from "@/components/itemCard/ItemCard";
import Navbar from "@/components/navbar/navbar";
import ItemGroup from "@/components/itemGroup/itemGroup";

function Home() {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-row justify-center flex-wrap">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default Home;
