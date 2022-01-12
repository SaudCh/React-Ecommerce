import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Cart(props) {
  return (
    <div className="p-5">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((e, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={e.img} width={80} alt="" />
              </td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>
                <div className="d-flex">
                  <p className="bg-danger">-</p>
                  <p>1</p>
                  <p className="bg-info" style={{ width: 20 }}>
                    +
                  </p>
                </div>
              </td>
              <td>
                <button
                  onClick={() => props.removeCart(e.id)}
                  className="btn btn-danger btn-sm"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
