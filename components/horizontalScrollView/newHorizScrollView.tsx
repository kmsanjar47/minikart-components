"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import items from "@/data/items";
import React from "react";
import ScrollViewItem from "./scrollViewItem";

function NewHorizScrollView(props: { title: string }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const product = items.map((item) => (
    <ScrollViewItem category={item.name} imgUrl={item.imgUrl} />
  ));

  return (
    <>
      <div className="mx-12 mt-8">
        <h1 className="text-3xl font-semibold mb-4">{props.title}</h1>

        <Carousel
          responsive={responsive}
          swipeable={true}
          centerMode={true}
          infinite={true}
        >
          {product}
        </Carousel>
      </div>
    </>
  );
}

export default NewHorizScrollView;
