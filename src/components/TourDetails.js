import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



function TourDetails() {
  const params = useParams();
  const [tour, setTour] = useState(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    // func to fetch a tour by the id
    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/tours/${params.id}`);
            const data = await res.json();
            console.log(data);
            setTour(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();

  }, [params.id]);


////////////////////////////////////////////////
  //catching what is in the input fild
const handelInput = (e) => {
    e.preventDefault();
    const { price, value } = e.target;
    console.log(price, value);
    setTour({ ...tour, [price]: value });
  };

  //on submit(update)
const handelSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/api/tours/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tour),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(true);
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
      })
  };
//when click a delete button
const handelDelete = async (id) => {
    console.log("id : -", id);
    setIsLoading(true);
    try {
        //curent tour description
        const response = fetch(`http://localhost:4000/api/tours/${params.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setTour(tour.id !== id);
      //setTour(tour.filter((item) => item.id !== id));
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {tour && (
        <>
            <h3>Tour details</h3>
            <h4>{tour.tour_name}</h4>
            <h4>{tour.description}</h4>
            <img src={`${tour.img_src}`}/>
            <h4>{tour.notes}</h4>
            <Link to={`/home/${tour.tour_name}`}></Link> 
            
            
            <label for="price">price</label>
            <input type="text"value={tour.price} onChange={handelInput}/>
            <button>Update onSubmit{handelSubmit}</button> 
            <button>Delete onSubmit{handelDelete}</button>  
        </>
      )}
    </div>
  );
}

export default TourDetails;