import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

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
    <div>
      <h2 className="fw-bold mt-5 mb-4">My All Orders!</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          {orders.map((order) => (
            <div key={order._id} order={order}>
              <div className="col">
                <div style={{ height: "420px" }} className="card card-custom">
                  <div
                    className="card-header"
                    style={{
                      backgroundColor: "#003580",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    {order.status}
                  </div>
                  <div className="card-body">
                    <h5 className="card-text text-start p-2">
                      Service: {order.title}
                    </h5>
                    <h5 className="card-text text-start p-2">
                      User Name: {order.name}
                    </h5>
                    <h5 className="card-text text-start mb-3 p-2">
                      Address: {order.address}
                    </h5>
                  </div>
                  <div className="mb-4">
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-danger mx-auto"
                      style={{ width: "175px" }}
                    >
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
