import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AdditionalTours from './pages/AdditionalTours';
import About from './pages/About';
import Cart from './pages/Cart';
import  LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer'

import React, { useEffect, useState } from "react";


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
    <div className='body' >
      {/* Wrapping the application with BrowserRouter, to enable client-side routing */}
      <BrowserRouter>
        <NavBar></NavBar>,

        <Routes>
          <Route path='/' element={<Home tours={tours}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/AdditionalTours' element={<AdditionalTours/>}></Route>
            <Route path=':/tourId' element={<About/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>  
        <Footer></Footer>
         
      </BrowserRouter>
      
    </div>
  );
}

export default App;