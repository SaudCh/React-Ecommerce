import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let tot = 0;
    props.cart.map((e) => (tot = parseInt(e.price) + tot));
    setTotal(tot);
  }, [props.cart]);

  if (props.cart.length === 0) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <h5>There is no Item in Cart</h5>
      </div>
    );
  }

  const decQuan = (id) => {
    const newdata = props.cart.map((p) =>
      p.id === id
        ? {
            id: p.id,
            name: p.name,
            price: p.price,
            oldprice: p.oldprice,
            time: p.time,
            img: p.img,
            quantity: p.quantity <= 1 ? 0 : p.quantity - 1,
          }
        : p
    );
    props.setCart(newdata);
  };

  const incQuan = (id) => {
    const newdata = props.cart.map((p) =>
      p.id === id
        ? {
            id: p.id,
            name: p.name,
            price: p.price,
            oldprice: p.oldprice,
            time: p.time,
            img: p.img,
            quantity: p.quantity + 1,
          }
        : p
    );
    props.setCart(newdata);
  };

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
                  <p
                    className="bg-danger text-white"
                    style={{ width: 20, paddingLeft: "7px" }}
                    onClick={() => decQuan(e.id)}
                  >
                    -
                  </p>
                  <p className="mx-2">{e.quantity}</p>
                  <p
                    className="bg-info text-white"
                    style={{ width: 20, paddingLeft: "5px" }}
                    onClick={() => incQuan(e.id)}
                  >
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
      <div
        className="bg-danger d-flex justify-content-center rounded "
        style={{
          position: "absolute",
          right: "30px",
          width: 250,
          height: 30,
          paddingTop: 1,
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to="/checkout"
          className="text-white fw-bold"
        >
          Total: {total} Rs Continue <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
