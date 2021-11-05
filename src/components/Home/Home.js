import React from "react";
import useAuth from "../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Comments from "../Comments/Comments";
import CovidSupport from "../CovidSupport/CovidSupport";
import GiethoornFAQ from "../GiethoornFAQ/GiethoornFAQ";

// Main Home Page
const Home = () => {
  const { isLoading } = useAuth();

  // setup a preload spinner on Home Page UI
  if (isLoading) {
    return (
      <div
        className="spinner-border text-dark"
        style={{ marginTop: "35vh" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <CovidSupport></CovidSupport>
      <Banner></Banner>
      <Booking></Booking>
      <GiethoornFAQ></GiethoornFAQ>
      <Comments></Comments>
    </div>
  );
};

export default Home;
