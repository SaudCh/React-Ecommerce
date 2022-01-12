import React from "react";

export default function CheckOut() {
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
                Sub Total $<strong>120</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
