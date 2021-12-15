import React from "react";
import Carousel from "./Carousel";
import { getItems } from "../data/items";
import Card from "./Card";

export default function home() {
  const items = getItems();
  return (
    <div>
      <Carousel />
      <div>
        <h3>Today Deals</h3>
      </div>
      <div className="container-fluid">
        <div className="row">
          {items.map((e) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
}
