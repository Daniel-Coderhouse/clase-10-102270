import React from "react";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Contact</h2>
      <button onClick={() => navigate("/")}>Volver a home</button>
    </div>
  );
};

export default Contact;
