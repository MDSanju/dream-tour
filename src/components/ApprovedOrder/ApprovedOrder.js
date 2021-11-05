import React from "react";
import { useHistory } from "react-router";

// Order Approved Message Showing
const ApprovedOrder = () => {
  // use history for go to order page
  const history = useHistory();

  // go to manage all orders page
  const handleManageAllOrders = () => {
    history.push("/manageAllOrders");
  };

  return (
    <div className="container">
      <div className="mt-5" style={{ marginBottom: "55vh", color: "#b33939" }}>
        <h2>Your Order Has Been Approved Successfully!</h2>
        <button
          onClick={handleManageAllOrders}
          className="btn btn-primary mx-auto mt-4"
        >
          Go To Check Order Approved
        </button>
      </div>
    </div>
  );
};

export default ApprovedOrder;
