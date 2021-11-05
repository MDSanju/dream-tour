import React from "react";
import { useHistory } from "react-router";
import "./BookService.css";

// show data from mongodb on Home page service section by service card
const BookService = ({ service }) => {
  const { _id, description, img, title } = service;
  const history = useHistory();

  const handleBookNow = () => {
    history.push(`/order/${_id}`);
  };

  return (
    <div>
      <div className="col">
        <div className="card card-custom">
          <img
            style={{ height: "250px" }}
            src={img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="mb-4 card-btn">
            <button onClick={handleBookNow} className="btn btn-primary mx-auto">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
