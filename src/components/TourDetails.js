import React from "react"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TourDetails() {
  const params = useParams();
  const [tour, setTour] = useState(null);
  

  useEffect(() => {
    // func to fetch a tour by the id
    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/tours${params.id}`);
            const data = await res.json();
            console.log(data);
            setTour(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();

  }, [params.id]);

  return (
    <div>
      {tour && (
        <>
            <h3>Tour details</h3>
            <h4>{tour.tour_name}</h4>
        </>
      )}
    </div>
  );
}

export default TourDetails;