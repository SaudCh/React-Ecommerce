import React, { useEffect, useState } from "react";

export default function CheckOut(props) {
  const { cart } = props;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let tot = 0;
    cart.map((e) => (tot = parseInt(e.price) + tot));
    setTotal(tot);
  }, [props.cart]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <h4>Billing Details</h4>
        </div>
        <div className="col-6">
          <div className="border bg-light">
            <h5>Cart Summary</h5>
            <ul>
              <li className="border-bottom"></li>
              <li>
                Sub Total $<strong>{total}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
