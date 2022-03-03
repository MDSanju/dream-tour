import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import HashLoader from "react-spinners/HashLoader";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import { AccountCircle } from "@material-ui/icons";
import SendIcon from "@material-ui/icons/Send";
import "./Comments.css";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 300px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

// Home page comment section
const Comments = () => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);

  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // data post to mongodb for each comment from user
  const onSubmit = (data) => {
    fetch("https://obscure-springs-93029.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
          window.location.reload();
        }
      });
  };

  // get comments data from mongodb
  useEffect(() => {
    fetch(`https://obscure-springs-93029.herokuapp.com/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  // delete comment oparetion
  const handleDeleteComment = (id) => {
    fetch(`https://obscure-springs-93029.herokuapp.com/comments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        const remainingComments = comments.filter(
          (comment) => comment._id !== id
        );
        setComments(remainingComments);
      });
  };

  // use react hook form for comment section
  return (
    <div className="container" style={{ marginTop: "125px" }}>
      <h2 className="mb-5 text-center add-font-family">
        Please Write Your Comment Down Below!
      </h2>
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          defaultValue={user.displayName}
          {...register("name", { required: true })}
          placeholder="Write your Name..."
        />
        <br />
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Add a comment..."
            variant="standard"
            sx={{ width: "100%" }}
            {...register("comment", { required: true })}
          />
        </Box>

        <br />

        <Button
          type="submit"
          variant="contained"
          sx={{ float: "right" }}
          endIcon={<SendIcon />}
        >
          Comment
        </Button>
      </form>
      <br />
      <br />
      <br />
      {/* show comments on UI */}
      {comments.length ? (
        <div className="text-start mt-5 add-font-family">
          <h3 className="mb-3">{comments.length} Comments:</h3>
          {comments.map((comment) => (
            <div key={comment._id}>
              <Card>
                <Box sx={{ background: "#EBF2CC" }}>
                  <CardContent>
                    <div className="row d-flex align-items-center">
                      <div className="col-12 col-sm-10 col-md-10">
                        <AccountCircle
                          sx={{ color: "action.active", mr: 1, my: 0.7 }}
                        />
                        <small style={{ fontSize: "14px" }} className="fw-bold">
                          {comment.name}
                        </small>
                        <br />
                        <small style={{ fontSize: "14px" }}>
                          {comment.comment}
                        </small>
                      </div>
                      {/* <div className="col-12 col-sm-4 col-md-4">
                <div
                  className="btn-group mt-1"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    onClick={() => handleDeleteComment(comment._id)}
                    className="btn btn-outline-danger mx-0"
                  >
                    Delete
                  </button>
                </div>
              </div> */}
                    </div>
                  </CardContent>
                </Box>
              </Card>
              <br />
            </div>
          ))}
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

export default Comments;
