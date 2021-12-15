import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav className="cotainer-fluid">
        <div className="row">
          <div className="col-4">
            <p>Call us at </p>
          </div>
          <div className="col-4">Shopping Cart</div>
          <div className="col-4"></div>
        </div>
      </nav>
      <nav
        class="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#fe9126" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" href="#"></Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
              <li class="nav-item">
                <Link class="nav-link  text-white" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  text-white" to="#">
                  Items
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Checkout
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Login
                </Link>
              </li>
            </ul>
            <button className="btn text-white">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
