import React from "react";
import { useNavigate } from "react-router-dom";

const MemberPage = ({ member }) => {
  const navigate = useNavigate();

  if (!member?.email) {
    return navigate("/");
  }

  return (
    <main>
      <div className="container">
        <h1>Welcome, {member.username}</h1>
        <p>Name: {member.first_name}</p>
        <p>Email: {member.email}</p>
      </div>
    </main>
  );
};

export default MemberPage;