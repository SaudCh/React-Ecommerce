import React, { useEffect, useState } from "react";

export default function CheckOut(props) {
  const { cart } = props;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let tot = 0;
    cart.map((e) => (tot = parseInt(e.price) + tot));
    setTotal(tot);
  }, [cart]);
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-6">
          <h4>Billing Details</h4>
          <form action="">
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-4">
          <div className="border bg-light p-2">
            <h5>Cart Summary</h5>
            <ul style={{ listStyle: "none" }}>
              {cart.map((e) => (
                <li className="border-bottom my-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>
                        {e.quantity} x {e.name.substr(0, 30)}...
                      </strong>
                    </div>
                    <div>Rs {e.price * e.quantity}</div>
                  </div>
                </li>
              ))}
              <li className="text-end">
                Sub Total Rs<strong>{total}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
