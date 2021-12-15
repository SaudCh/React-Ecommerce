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
        <h4>Today Deals</h4>
      </div>
      <div className="container-fluid">
        <div className="row">
          {items.map((e) => (
            <Card item={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
