import { useEffect } from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <div>
      <h2>Esa ruta no es valida</h2>
    </div>
  );
};

export default Error;
