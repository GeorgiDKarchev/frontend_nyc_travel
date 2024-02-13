import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

//   const Home = ({tours}) => {
    return (
        <div>
            <h1>Current weather</h1>
            <div className="bodyTours">
                {weather.length>=1?(
                    weather.map((w) => <Weather w={w} key={w._id} />)
                    ) : (
                        <p>Loading.......</p>

                )}
            </div>
        </div>
    );
}


export default Weather;
