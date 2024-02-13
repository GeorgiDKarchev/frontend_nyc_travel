import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useRef, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";


function LoginSignup({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:4000/api/members', {
        email,
        password,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      
    }
    console.log("Logged In");
  };

  return (
    <div>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
}

export default LoginSignup;
