import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import HashLoader from "react-spinners/HashLoader";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

// show only the user's placed orders by this component
const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  // loading time spinner
  const [isLoading, setIsloading] = useState(true);

  // get data by email from mongodb
  useEffect(() => {
    setIsloading(true);
    fetch(`https://obscure-springs-93029.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    setIsloading(false);
  }, []);

  // loading spinner setup
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

  // delete oparetion for my order delete
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to Cancel this Order?"
    );
    if (proceed) {
      fetch(`https://obscure-springs-93029.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            alert("Cancel Confirm!");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  // show only user's orders on UI
  return (
    <div
      style={{ textAlign: "center", marginTop: "75px", marginBottom: "100px" }}
    >
      <h2 className="add-font-family mt-5 mb-4">My All Orders!</h2>
      {orders.length ? (
        <div className="container">
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
                        onClick={() => handleDeleteOrder(order._id)}
                        className="mx-auto"
                        style={{ width: "175px" }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                      >
                        Cancel Order
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

export default MyOrders;
