import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useRef, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


function LoginSignup({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://backend-nyc-travel.onrender.com/members/login', {
        email,
        password,
      })
      if (res.status === 200){
        navigate('/memberPage')
      }else{
        navigate('/')
      }
      console.log(res.data);
      setUser(res.data);
    
    } catch (error) {
      console.log(error)
    }
    // console.log("Logged In");
   
  };

  

  return (
    <div className="loginPage">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
         
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
}

export default LoginSignup;
