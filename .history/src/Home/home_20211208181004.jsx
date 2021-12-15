import React from "react";
import Carousel from "./Carousel";
import { getItems } from "../data/items";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function home() {
  const items = getItems();
  return (
    <div>
      <Carousel />
      <div className="d-flex justify-content-between mt-3 px-2">
        <h5>Today Deals</h5>
        <Link className="text-decoration-none">See More</Link>
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
