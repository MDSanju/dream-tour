import React from "react";
import SendIcon from "@material-ui/icons/Send";
import { Card } from "@material-ui/core";
import { Button, CardContent, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
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
            <form action="">
              <TextField
                id="outlined-textarea"
                label="Full Name"
                placeholder="John Doe"
                multiline
                sx={{ width: "300px" }}
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
