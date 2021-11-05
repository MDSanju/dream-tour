import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
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
    const proceed = window.confirm("Please confirm to Place Order!");
    if (proceed) {
      fetch("https://obscure-springs-93029.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
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
    <div>
      <div className="mt-5">
        <h2 className="fw-bold mb-4">Details About Your Clicked Service!</h2>
        <div className="card mx-auto" style={{ maxWidth: "570px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={service.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title ms-3">
                  Service Name: {service.title}
                </h5>
                <p className="card-text ms-3">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-5 fw-bold">Place Your Order!</h2>
      <div className="add-new-service col-10 col-sm-10 col-md-6 mx-auto">
        <form className="order-submit-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control mt-4"
            defaultValue={user.displayName}
            {...register("name")}
          />
          <input
            className="form-control mt-3"
            defaultValue={user.email}
            {...register("email")}
          />
          <input
            className="form-control mt-3"
            defaultValue={status}
            {...register("status")}
          />
          <input
            className="form-control mt-3"
            {...register("title", { required: true })}
            placeholder="Copy and Paste the Service Name Above"
          />
          <input
            className="form-control mt-3"
            {...register("address", { required: true })}
            placeholder="Address"
          />
          <input
            className="form-control mt-3"
            {...register("city", { required: true })}
            placeholder="City"
          />
          <input
            className="form-control mt-3"
            {...register("phone", { required: true })}
            placeholder="Phone"
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            className="btn btn-primary mx-auto w-100 mt-3"
            type="submit"
            value="Place Order"
          />
        </form>
      </div>
    </div>
  );
};

export default OrderPlace;
