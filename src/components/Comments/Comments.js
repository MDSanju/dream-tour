import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

// Home page comment section
const Comments = () => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);

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
      <h2 className="mb-5 fw-bold">Please Write Your Comment Down Below!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          defaultValue={user.displayName}
          {...register("name", { required: true })}
          placeholder="Write your Name"
        />

        <textarea
          className="form-control mt-3 mb-1"
          style={{ height: "125px" }}
          {...register("comment", { required: true })}
          placeholder="Add a public comment..."
        />

        {errors.description && (
          <span className="text-danger">This field is required</span>
        )}

        <input
          className="btn btn-primary w-100 mt-3 mx-auto"
          type="submit"
          value="Comment"
        />
      </form>
      {/* show comments on UI */}
      <div className="text-start mt-5">
        <h3 className="mb-3">{comments.length} Comments:</h3>
        {comments.map((comment) => (
          <div key={comment._id}>
            <div className="row d-flex align-items-center">
              <div className="col-12 col-sm-10 col-md-10">
                <small style={{ fontSize: "14px" }} className="fw-bold">
                  {comment.name}
                </small>
                <br />
                <small style={{ fontSize: "14px" }}>{comment.comment}</small>
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
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
