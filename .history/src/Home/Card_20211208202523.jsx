import React from "react";

export default function Card(props) {
  const { item } = props;
  return (
    <div className="col-2">
      <div class="card">
        <img
          src={item.img}
          style={{ height: "200px", width: "100px", alignSelf: "center" }}
          class="card-img-top mt-2"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{item.name.substring(0, 20)}...</h5>
          <p class="card-text p-0 m-0">{item.price} Rs</p>
          <p className="card-text p-0 m-0 mb-2">{item.time}</p>
          <p className="card-text p-0 m-0">{item.oldprice} Rs</p>
          <button
            href="#"
            class="btn btn-sm text-white"
            style={{ backgroundColor: "#fe9126" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
