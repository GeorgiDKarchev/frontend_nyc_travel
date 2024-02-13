import React, { useState } from "react";
import axios from "axios";

const SignupPage = ({ setUser }) => {
  const [name, setName] = useState("");
  //const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/members", {
        name,
        email,
        password,
        photo,
        age,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (error) {}
  
    console.log("Signup button clicked");
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>{" "}
         
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage