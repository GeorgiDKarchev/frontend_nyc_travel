import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
//import diferent pages
import Home from "./pages/Home";
import AdditionalTours from "./pages/AdditionalTours";
import About from "./pages/About";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
//import Tour components
import TourDetails from "./components/TourDetails";
import TourItem from "./components/TourItem";
import ToursList from "./components/ToursList";

function App() {
  const [tours, setTours] = useState([]);

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/tours");
      const data = await res.json();
      console.log(data);
      //set the data to the state tours variable
      setTours(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>,
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/additional-tours" element={<AdditionalTours />}></Route>
          <Route path=":/tourId" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
          
           {/* route path for tours (it does not work at the moment!!!!????) */}
          <Route path="/tours" element={<ToursList tours={tours}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
