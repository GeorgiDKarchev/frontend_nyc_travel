import React from "react"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function TourItem({ tour }) {
  const { _id, tour_name, img_src, description, price} = tour;

  return (
    <Card
      style={{ width: "14rem", margin: "10px", backgroundColor: "#221f1f" }}
    >
      <Link to={`/tours/${_id}`} style={{ color: "#f5f5f1" }}>
        <Card.Title>{tour_name}</Card.Title>

        {img_src ? (
          <Card.Img src={img_src} alt={tour_name} />
        ) : (
          <Card.Img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        )}
      </Link>
    </Card>
  );
}

export default TourItem;