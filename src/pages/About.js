import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// function Weather({w}){
//     return(

//         <div className="card">
//             <h2>{w.tour_name}</h2>
//         </div>

//     );
// }

function Weather() {
  const [weather, setWeather] = useState([]);
  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      //   const res = await fetch("http://dataservice.accuweather.com/currentconditions/v1/349727?apikey=FSrkgDB0ufNDPv8sCGGRlm0AiEGEgKCs");
      const res = await fetch("http://localhost:4000/api/tours");
      const data = await res.json();
      console.log(data);

      setWeather(data);
    };
    fetchData();
  }, []);

  return (
    <div className="Weather">
      <h2>Current Weather condition </h2>
      <div>
        <div className="bodyTours">
          {weather.map((weather) => {
            return <Weather weather={weather} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Weather;
