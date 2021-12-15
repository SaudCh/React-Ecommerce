import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { item } = props;
  return (
    <div className="col-6 col-md-2 m-0 p-1">
      <div class="card m-0 p-0 mx-md-2">
        <div className="card-img text-center mt-1">
          <img src={item.img} alt="" style={{ height: 100 }} />
        </div>
        <div class="card-body p-2">
          <Link
            to={`/product/${item.id}/${item.name}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <h5 style={{ fontSize: 17 }}>{item.name.substring(0, 30)}...</h5>
          </Link>
          {item.oldprice ? (
            <p
              class="card-tex text-secondary mb-0 pb-0 bird-detail d-inline"
              style={{ textDecoration: "line-through" }}
            >
              {item.oldprice} Rs
            </p>
          ) : null}
          <p class="card-text text-end p-0 my-1 d-inline">{item.price} Rs</p>
          <Link href="#" class="btn btn-secondary btn-sm d-block">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
      </div>
    </div>
  );
}
