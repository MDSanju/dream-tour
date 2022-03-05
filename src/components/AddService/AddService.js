import React from "react";
import SendIcon from "@material-ui/icons/Send";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import "./AddService.css";
// add a new service to mongodb as well as on UI
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
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
    <div style={{ marginTop: "70px", marginBottom: "155px" }}>
      <h2 className="mt-5 text-center add-font-family">Add A New Service!</h2>
      {/* <div className="add-new-service col-10 col-sm-10 col-md-6 mx-auto">
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
      </div> */}

      <div>
        <div className="add-service-page">
          <img
            src="https://i.ibb.co/sFv8qLj/industry-tour-big.jpg"
            className="contact-form-img"
            alt=""
          />
          <div className="service-cart">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://i.ibb.co/xC48fB8/network-service-icon-world-14.png"
                style={{ width: "40%" }}
                alt=""
              />
              <br />
              <br />
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  id="outlined-textarea"
                  label="Service Name"
                  placeholder="Write service title..."
                  multiline
                  sx={{ width: "300px" }}
                  {...register("title")}
                  required
                />

                <br />
                <br />
                <TextField
                  id="outlined-textarea"
                  label="Image"
                  placeholder="Put service image url..."
                  multiline
                  sx={{ width: "300px" }}
                  {...register("img")}
                  required
                />
                <br />
                <br />
                <TextField
                  type="text"
                  id="outlined-textarea"
                  label="Description"
                  placeholder="Write service description here..."
                  multiline
                  rows={4}
                  sx={{ width: "300px" }}
                  {...register("description")}
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
                  Add Service
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
