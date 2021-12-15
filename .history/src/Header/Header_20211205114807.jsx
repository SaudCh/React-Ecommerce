import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link  text-white" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link  text-white" to="#">
                Link
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link text-white"
                to="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </Link>
            </li>
          </ul>
          <button>Cart</button>
        </div>
      </div>
    </nav>
  );
}
