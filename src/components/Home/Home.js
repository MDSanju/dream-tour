import React from "react";
import useAuth from "../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Comments from "../Comments/Comments";
import CovidSupport from "../CovidSupport/CovidSupport";
import GiethoornFAQ from "../GiethoornFAQ/GiethoornFAQ";
import HashLoader from "react-spinners/HashLoader";

// Main Home Page
const Home = () => {
  const { isLoading } = useAuth();

  // setup a preload spinner on Home Page UI
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "35vh",
        }}
      >
        <HashLoader color={"#140b5c"} size={60} />
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
