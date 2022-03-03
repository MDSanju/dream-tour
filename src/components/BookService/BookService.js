import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import "./BookService.css";

// show data from mongodb on Home page service section by service card
const BookService = ({ service }) => {
  const { _id, description, img, title } = service;
  const history = useHistory();

  const handleBookNow = () => {
    history.push(`/order/${_id}`);
  };

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="240" image={img} alt="..." />
          <CardContent sx={{ height: 210 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "left" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "left" }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleBookNow} size="small" color="primary">
            Book Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BookService;
