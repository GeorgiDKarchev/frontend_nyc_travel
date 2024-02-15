

import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



function TourDetails() {
  const params = useParams();
  const [tour, setTour] = useState(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] =useState({
    id : params.id,
    price : '',
  })

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

//Update tour price  
useEffect(()=>{
  
  axios.get(`http://localhost:4000/api/tours/${params.id}`)
  
  .then(res => 
    setValues({...values, price: res.data.price})
    )
  .catch(err=> console.log(err))
   
},[])

const handleSubmit =(e) => {
  e.preventDefault();
  axios.put(`http://localhost:4000/api/tours/${params.id}`, values)
  
  .then(res => 
    console.log(res),
    )
  .catch(err=> console.log(err))

}

//Delete

const handleDelete =(e)=>{
  axios.delete(`http://localhost:4000/api/tours/${params.id}`)
  .then(res => 
    console.log('Delete!', res),
    )
  .catch(err=> console.log(err))

  

}
  return (
    <div className="TourDetails">
      {tour && (
        <>
            <h3>Tour details</h3>
            <h4>{tour.tour_name}</h4>
           
            <div className="imageDescription">
              <img src={`${tour.img_src}`}/>
              <h4>{tour.description}</h4>
            </div>

            {/* notes section added */}
            <label for="Notes">Notes</label>
            <input className='notesTours' type="text"value={tour.notes}/>
            <h4>{tour.notes}</h4>
            
            <Link to={`/home/${tour.tour_name}`}></Link> 
            
            <form onSubmit={handleSubmit}>
              <label >Price</label>
              <input type="text" value={values.price} onChange={e=> setValues({...values, price: e.target.value})}/>
              <button>Update </button> 
              <button onClick={(e) => handleDelete(params.id)}>Delete </button> 
            </form>
        </>
      )}
    </div>
  );
}

export default TourDetails;



