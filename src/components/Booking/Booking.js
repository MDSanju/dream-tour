import React, { useEffect, useState } from "react";
import BookService from "../BookService/BookService";
import HashLoader from "react-spinners/HashLoader";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

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
      <h2 className="container mt-5 mb-5 text-center add-font-family">
        Please Book Your Favourite Tour Service!
      </h2>
      {services.length ? (
        <Box sx={{ flexGrow: 1 }}>
          <Container>
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {services.map((service) => (
                <BookService key={service._id} service={service}></BookService>
              ))}
            </Grid>
          </Container>
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "38px",
          }}
        >
          <HashLoader color={"#140b5c"} size={60} />
        </div>
      )}
    </div>
  );
};

export default Booking;
