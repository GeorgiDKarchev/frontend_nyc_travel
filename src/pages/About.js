import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function About() {
  const [weather, setWeather] = useState(null);
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
        <div>
            <h1>Current weather</h1>
            <div>
                {weather?(
                    weather.map((w) => <h3>{w.description}</h3>)
                    ) : (
                        <p>Loading.......</p>
                )}
            </div>
        </div>
    );
}



export default About;