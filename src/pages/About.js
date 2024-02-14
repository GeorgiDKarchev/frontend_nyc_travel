import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function About() {
  const [weather, setWeather] = useState(null);
  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      //current weather condition in NYC
        const res = await fetch("http://dataservice.accuweather.com/currentconditions/v1/349727?apikey=FSrkgDB0ufNDPv8sCGGRlm0AiEGEgKCs");
      //1 day weather NYC
      //const res = await fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/349727?apikey=FSrkgDB0ufNDPv8sCGGRlm0AiEGEgKCs");
      const data = await res.json();
      console.log(data);

      setWeather(data);
    };
    fetchData();
  }, []);



 
    return (
      <div className="weatherPge">
          <div className="weatherBox">
            <h1>Current weather in New York City</h1>
            <div className="weather">
                {weather?(
                    weather.map((w) => 
                    <h3> 
                    Date: ( {w.LocalObservationDateTime} )
                    <br/> Weather: {w.WeatherText}
                    <br/>Temperature in F: {w.Temperature.Imperial.Value}
                    <br/>Temperature in C: {w.Temperature.Metric.Value}</h3>,
                    )
                    // <WeatherItem weather={w} key={w} />)
                    ) : (
                        <p>Loading.......</p>
                )}
            </div>
            
        </div>
      </div>
    );
}



export default About;