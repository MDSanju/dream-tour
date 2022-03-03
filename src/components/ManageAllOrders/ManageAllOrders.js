import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import HashLoader from "react-spinners/HashLoader";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

// manage all orders component
const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  // manage all orders loading
  const [isLoading, setIsloading] = useState(true);

  // data find from mongodb for manage all order page
  useEffect(() => {
    setIsloading(true);
    fetch("https://obscure-springs-93029.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
    setIsloading(false);
  }, []);

  // manage all orders page spinner setup
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

  // delete oparetion
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to Cancel this Order?"
    );
    if (proceed) {
      fetch(`https://obscure-springs-93029.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Cancel Confirm!");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  // update oparetion for pending status update as approved
  const handleUpdateStatus = (id) => {
    fetch(`https://obscure-springs-93029.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          history.push("/approved/order");
        }
      });
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "75px", marginBottom: "100px" }}
    >
      <h2 className="mt-5 mb-4 add-font-family">Manage All Orders!</h2>
      {orders.length ? (
        <div className="container add-font-family">
          <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
            {orders.map((order) => (
              <div key={order._id} order={order}>
                <div className="col">
                  <div
                    style={{ height: "420px", background: "#EBF2CC" }}
                    className="card card-custom"
                  >
                    <div
                      className="card-header"
                      style={{
                        backgroundColor: "#10ac84",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      {order.status}
                    </div>
                    <div className="card-body">
                      <h5 className="card-text text-start p-2">
                        <b>Service:</b> {order.title}
                      </h5>
                      <h5 className="card-text text-start p-2">
                        <b>User Name:</b> {order.name}
                      </h5>
                      <h5 className="card-text text-start mb-3 p-2">
                        <b>Address:</b> {order.address}
                      </h5>
                    </div>
                    <div className="mb-4">
                      <Button
                        onClick={() => handleUpdateStatus(order._id)}
                        className="mx-1"
                        variant="contained"
                        style={{ width: "150px", marginBottom: "5px" }}
                      >
                        Approved
                      </Button>
                      <Button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="mx-1"
                        style={{ width: "150px", marginBottom: "5px" }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <HashLoader color={"#140b5c"} size={60} />
        </div>
      )}
    </div>
  );
};

export default ManageAllOrders;
