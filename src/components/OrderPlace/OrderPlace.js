import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { Button, TextField } from "@mui/material";
import SendIcon from "@material-ui/icons/Send";
import "./OrderPlace.css";

// order place form component
const OrderPlace = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const status = "Pending";

  useEffect(() => {
    fetch(
      `https://obscure-springs-93029.herokuapp.com/booking_services/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const submitOrder = {
      name: user.displayName,
      email: user.email,
      status: status,
      title: service.title,
      address: data.address,
      phone: data.phone,
    };

    const proceed = window.confirm("Please confirm to Place Order!");
    if (proceed) {
      fetch("https://obscure-springs-93029.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submitOrder),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("Booking Successfully!");
            reset();
          }
        });
    }
  };

  // order place with react hook form
  return (
    <div style={{ marginTop: "115px", marginBottom: "135px" }}>
      <div className="order-booking-page">
        <div class="wrapper">
          <div class="checkout_wrapper">
            <div class="product_info">
              <img src={service.img} alt="product" />
              <div class="order-content">
                <h3>{service.title}</h3>
              </div>
            </div>
            <div class="checkout_form">
              <p>Place An Order</p>
              <div class="order-details">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    type="text"
                    id="outlined-textarea"
                    label="Address"
                    placeholder="Write your address..."
                    multiline
                    fullWidth
                    {...register("address")}
                    required
                  />
                  <br />
                  <br />
                  <TextField
                    type="text"
                    id="outlined-textarea"
                    label="City"
                    placeholder="Write your city..."
                    multiline
                    fullWidth
                    {...register("city")}
                    required
                  />
                  <br />
                  <br />
                  <TextField
                    type="text"
                    id="outlined-textarea"
                    label="Phone"
                    placeholder="Contact No..."
                    multiline
                    fullWidth
                    {...register("phone")}
                    required
                  />
                  <br />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ float: "right" }}
                    endIcon={<SendIcon />}
                  >
                    Order
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlace;
