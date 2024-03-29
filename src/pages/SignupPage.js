import React, { useState } from "react";
import axios from "axios";

const SignupPage = ({ setUser }) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");

  const [phone, setPhone] = useState("");
  const [address, setAddress] =useState("");
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/members", {
        member_name: name,
        email,
        password,
        photo,
        age,
        phone,
        address,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (error) {}
  
    console.log("Signup button clicked");
  };

  return (
    <div className="signup">
      <h2>Create New Member Account</h2>
      <form onSubmit={handleSignup} className="signupform">
        <div>
          <label htmlFor="Name" >Name:</label>
          <input
            type="text"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="       Required"
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
          <label htmlFor="password">Password:</label>{" "}
         
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="       Required"
          />
        </div>
        {/* <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div> */}
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>


        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage