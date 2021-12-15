import React from "react";
import Carousel from "./Carousel";
import { getItems } from "../data/items";

export default function home() {
  const items = getItems();
  return (
    <div>
      <Carousel />
      <div>
        <h3>Today Deals</h3>
        {items.map((e) => (
          <h6>Hello</h6>
        ))}
      </div>
    </div>
  );
}
