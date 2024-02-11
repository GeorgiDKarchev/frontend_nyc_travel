import React from "react"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function TourItem({ tour }) {
  const { _id, tour_name, img_src, description, price} = tour;

  return (

    <div className="card">
        <h2>Tours list</h2>
       <ul>
        <li>{tour._id}</li>
        <li>{tour.tour_name}</li>
        <li>{tour.img_src}</li>
        <li>{tour.description}</li>
        <li>{tour.price}</li>
       </ul>
    </div>


    // <Card
    //   style={{ width: "14rem", margin: "10px", backgroundColor: "#ffffff" }}
    // >
    //   <Link to={`/tours/${_id}`} style={{ color: "black" }}>
    //     <Card.Title>{tour_name}</Card.Title>

    //     {img_src ? (
    //       <Card.Img src={img_src} alt={tour_name} />
    //     ) : (
    //       <Card.Img
    //         src="https://images.pexels.com/photos/2274729/pexels-photo-2274729.jpeg?auto=compress&cs=tinysrgb&w=600"
    //         alt=""
    //       />
    //     )}
    //   </Link>
    // </Card>
  );
}

export default TourItem;