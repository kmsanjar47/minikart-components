import React from "react";
import ItemCard from "@/components/itemCard/ItemCard";
import Navbar from "@/components/navbar/navbar";

import HorizontalScrollView from "@/components/horizontalScrollView/horizontalScrollView";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-12 flex flex-col mt-8">
        <h1 className="text-3xl font-semibold ">Popular Products</h1>
        <div className=" flex flex-row justify-between flex-wrap mt-4">
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
      <div className="mx-12 flex flex-col mt-8">
        <h1 className="text-3xl font-semibold ">Which Book You Like to See?</h1>
        <div className="mt-4">
          <HorizontalScrollView />
        </div>
      </div>
      <div className="mx-12 flex flex-col mt-8">
        <h1 className="text-3xl font-semibold ">New Arrival Books</h1>
        <div className=" flex flex-row justify-between flex-wrap mt-4">
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
    </div>
  );
}

export default Home;
