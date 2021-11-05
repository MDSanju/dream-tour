import React from "react";
import payment from "../../images/payment-getway.jpg";
import "./Footer.css";

// Footer Component
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container mb-5 footer-items">
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-12 col-sm-6 col-md-3">
            <span className="fw-bold fs-4" style={{ cursor: "pointer" }}>
              Dream Tour
            </span>
            <p className="mt-4">Address: 58 Zuid-Holland, 2584 HH</p>
            <p>Phone: 06-68120426</p>
            <p>Email: lisetkilinç@gmail.com</p>
            <div></div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h4>Our Supports</h4>
            <p className="mt-4">Unique places to stay</p>
            <p>Hotels in Giethoorn</p>
            <p>Travel communities</p>
            <p>Seasonal and holiday deals</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 open-time">
            <h4>Contact Hours</h4>
            <p className="mt-4">Monday to Friday</p>
            <p>Time: 09:00 am - 10.00 pm</p>
            <p>Saturday and Sunday Closed</p>
          </div>
          <div
            style={{ textAlign: "left" }}
            className="col-12 col-sm-6 col-md-3"
          >
            <small style={{ fontSize: "18px" }} className="fw-bold">
              Choose your payment method:
            </small>
            <img
              style={{
                width: "100%",
                borderRadius: "4px",
                marginTop: "7px",
                cursor: "pointer",
              }}
              src={payment}
              alt=""
            />
          </div>
        </div>
      </div>
      <p
        className="fw-bold"
        style={{
          fontSize: "16px",
          color: "white",
        }}
      >
        Copyright © 1996–2021 Dream-Tour.com™. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
