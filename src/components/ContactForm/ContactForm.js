import React, { useRef, useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_giethoorn",
        "template_giethoorn",
        form.current,
        "hXp5PhjAC0rq9Oum7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleClickOpen();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Contact with the Tourist Agency!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This message has been sent successfully! Thank you!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(reset())}>OK</Button>
        </DialogActions>
      </Dialog>
      ;
      <div className="contact-form-page">
        <img
          src="https://i.ibb.co/QDnrHty/Contact-Us-Vector-Illustration-Part-02-1.jpg"
          className="contact-form-img"
          alt=""
        />
        <div className="form-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="https://i.ibb.co/PZq24Fk/png-transparent-eventloop-service-information-machining-marketing-contact-us-miscellaneous-blue-text.png"
              style={{ width: "40%" }}
              alt=""
            />
            <br />
            <br />
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="outlined-textarea"
                label="Full Name"
                placeholder="John Doe"
                multiline
                sx={{ width: "300px" }}
                {...register("name")}
                required
              />
              <br />
              <br />
              <TextField
                type="email"
                id="outlined-textarea"
                label="Email"
                placeholder="Example@gmail.com"
                multiline
                sx={{ width: "300px" }}
                {...register("email")}
                required
              />
              <br />
              <br />
              <TextField
                id="outlined-textarea"
                label="Subject"
                placeholder="RE: to appear when you..."
                multiline
                sx={{ width: "300px" }}
                {...register("subject")}
                required
              />
              <br />
              <br />
              <TextField
                type="text"
                id="outlined-textarea"
                label="Message"
                placeholder="Write your message here..."
                multiline
                rows={4}
                sx={{ width: "300px" }}
                {...register("message")}
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
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
