import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div class="logo_products">
        <div class="container">
          <div class="w3ls_logo_products_left1">
            <ul class="phone_email">
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>Order online or
                call us :{" "}
              </li>
            </ul>
          </div>
          <div class="w3ls_logo_products_left">
            <h1>
              <a href="index.php"> Shopping Cart</a>
            </h1>
          </div>
          <div class="w3l_search">
            <form action="search.php" method="post">
              <input
                type="search"
                name="search"
                placeholder="Search for a Product..."
                required=""
              />
              <button
                type="submit"
                class="btn btn-default search"
                aria-label="Left Align"
              >
                <i class="fa fa-search" aria-hidden="true">
                  {" "}
                </i>
              </button>
              <div class="clearfix"></div>
            </form>
          </div>

          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}
