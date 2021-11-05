import React, { useEffect, useState } from "react";
import BookService from "../BookService/BookService";

// services section component on Home Page, all data reload from mongodb
const Booking = () => {
  const [services, setServices] = useState([]);
  // preloading spinner
  const [isLoading, setIsloading] = useState(true);

  // fetch data from mongodb booking_services
  useEffect(() => {
    setIsloading(true);
    fetch("https://obscure-springs-93029.herokuapp.com/booking_services")
      .then((res) => res.json())
      .then((data) => setServices(data));
    setIsloading(false);
  }, []);

  // spinner setup for home page services
  if (isLoading) {
    return (
      <div
        className="spinner-border text-dark"
        style={{ marginTop: "20vh" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  // doing map and giving data to BookService by props drilling
  return (
    <div style={{ marginTop: "90px" }}>
      <h2 className="container mt-5 fw-bold mb-5">
        Please Book Your Favourite Tour Service!
      </h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          {services.map((service) => (
            <BookService key={service._id} service={service}></BookService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
