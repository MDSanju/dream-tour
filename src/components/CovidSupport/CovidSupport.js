import React from "react";
import ilogo from "../../images/ilogo.png";
import "./CovidSupport.css";

// a little part just below the header navbar for Covid-19 support
const CovidSupport = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff0e0",
        display: "flex",
        alignItems: "center",
        lineHeight: "38px",
        textAlign: "left",
      }}
    >
      <img className="ms-4 i-logo" src={ilogo} alt="" />
      <span className="col-8 col-sm-8 col-md-6 covid-support">
        Coronavirus (COVID-19) support
      </span>
    </div>
  );
};

export default CovidSupport;
