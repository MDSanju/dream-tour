import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";

// Footer Component
const Footer = () => {
  const history = useHistory();

  const contactAgency = () => {
    history.push("/contactUs");
  };
  return (
    <div className="footer-start" style={{ marginTop: "75px" }}>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fas fa-plane-departure"></i>
              <span className="logo_name"> Dream Tour</span>
            </div>
            <div className="media-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li onClick={contactAgency}>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="#">Five star hotels</a>
              </li>
              <li>
                <a href="#">Special boat package</a>
              </li>
              <li>
                <a href="#">Seasonal and holiday deals</a>
              </li>
              <li>
                <a href="#">Healthy food</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Prefrences</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Other Services</li>
              <li>
                <a href="#">Investor relations</a>
              </li>
              <li>
                <a href="#">Trip.com rewards</a>
              </li>
              <li>
                <a href="#">Affiliate program</a>
              </li>
              <li>
                <a href="#">Become a tours vendor</a>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2021 <a href="#">Giethoorn Tour.</a>All rights
              reserved
            </span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
