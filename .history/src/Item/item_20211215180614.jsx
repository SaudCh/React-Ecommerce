import React from "react";
import { useParams } from "react-router-dom";
import { getAllItems } from "../data/AllItems";

export default function Item() {
  const allItems = getAllItems();
  const { pid } = useParams();
  return (
    <div class="card border-white mb-3">
      <div class="row g-0">
        <div class="col-md-4 text-center">
          <img
            src="https://propakistani.pk/price/wp-content/uploads/2021/08/iphone-13-pro-price-1.png"
            class="img-fluid rounded-start"
            width={300}
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{allItems[pid].name}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">{allItems[pid].name}</small>
              {pid}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
