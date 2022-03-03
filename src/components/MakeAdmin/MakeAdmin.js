import React from "react";
import SendIcon from "@material-ui/icons/Send";
import { Card } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Button, CardContent, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Make user to Admin!");
    if (proceed) {
      const user = data;
      console.log(user);
      fetch("https://obscure-springs-93029.herokuapp.com/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            reset();
            alert("Admin has been made successfully!");
          } else {
            reset();
            alert("Wrong Person!");
          }
        });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Card sx={{ marginTop: "80px", marginBottom: "100px", height: "500px" }}>
        <Box sx={{ background: "#EBF2CC", height: "500px" }}>
          <CardContent sx={{ padding: "40px 70px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://i.ibb.co/0GRVxsD/263-2636271-sign-in-to-start-your-session-admin-png.png"
                alt=""
                style={{ width: "100px" }}
              />
              <h2 className="mt-2 add-font-family">Make Admin</h2>
              <br />
              <br />
              <form onSubmit={handleSubmit(onSubmit)}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  type="email"
                  id="input-with-sx"
                  label="Email"
                  variant="standard"
                  fullWidth
                  {...register("email")}
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
                  Admin
                </Button>
              </form>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default MakeAdmin;
