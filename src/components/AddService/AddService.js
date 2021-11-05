import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
// add a new service to mongodb as well as on UI
const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Add!");
    if (proceed) {
      fetch("https://obscure-springs-93029.herokuapp.com/booking_services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("A New Service Added Successfully. Thanks!");
            reset();
          }
        });
    }
  };

  // used react hook form to add new service to mongodb and on the UI as well
  return (
    <div>
      <h2 className="mt-5 fw-bold">Add A New Service!</h2>
      <div className="add-new-service col-10 col-sm-10 col-md-6 mx-auto">
        <form className="add-neworder-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control mt-4"
            {...register("title", { required: true })}
            placeholder="Service Title"
          />
          <input
            className="form-control mt-3"
            {...register("img", { required: true })}
            placeholder="Image Url"
          />
          <textarea
            className="form-control mt-3"
            style={{ height: "100px" }}
            {...register("description", { required: true })}
            placeholder="Description"
          />
          {errors.descriptionRequired && <span>This field is required</span>}

          <input
            className="btn btn-primary mx-auto w-100 mt-3"
            type="submit"
            value="Add New Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
