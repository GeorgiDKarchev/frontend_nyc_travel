import React from "react";
import { useNavigate } from "react-router-dom";

const MemberPage = ({ member }) => {

  //const navigate = useNavigate();
console.log(member)


  return (
    <main>
      <div className="container">
        <h1>Welcome,{member}</h1>
        <p>{member}</p>
      </div>
    </main>
  );
};

export default MemberPage;