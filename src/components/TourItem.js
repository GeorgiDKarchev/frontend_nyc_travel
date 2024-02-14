import React from "react"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";


function TourItem({ tour }) {
  const { _id, tour_name, img_src, description, price } = tour;

  return (
    <Card style={{ width: "600px", margin: "10px", backgroundColor: "beige" }}>
      <Link to={`/home/${_id}`} style={{ color: "black" }}>
        {img_src ? (
          <Card.Img
            style={{ height: "230px", width: "200" }}
            variant="top"
            src={img_src}
            alt={tour_name}
          />
        ) : (
          <Card.Img
            src="https://images.pexels.com/photos/2274729/pexels-photo-2274729.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        )}
        <Card.Body>
          <Card.Title>{tour_name}</Card.Title>
          <Card.Text style={{ decoration: "None" }}>{description}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <button variant="primary">Modify tour info</button>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default TourItem;
