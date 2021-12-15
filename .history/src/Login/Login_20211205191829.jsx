import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="text-center py-5">
      <p className="p-0 m-0 h1 mb-2">Login</p>
      <form
        className="col-10 col-sm-6 col-md-4 text-start bg-light p-4"
        style={{ margin: "0px auto" }}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input type="email" class="form-control" id="exampleInputEmail1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <p className="m-0 p-0">FOR NEW PEOPLE</p>
      <Link to="/register ">Register Here</Link>
    </div>
  );
}
