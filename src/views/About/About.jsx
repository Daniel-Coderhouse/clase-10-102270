import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About</h2>
      <button onClick={() => navigate("/")}>Volver a home</button>
    </div>
  );
};

export default About;
