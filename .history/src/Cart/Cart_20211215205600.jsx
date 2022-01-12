import React from "react";

export default function Cart(props) {
  return (
    <div className="p-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((e) => (
            <tr>
              <th scope="row">{e.id}</th>
              <td>
                <img src={e.img} alt="" />
              </td>
              <td>{e.name}</td>
              <td>{e.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}