import { useState } from "react";
import ListProducts from "../../components/ListProducts/ListProducts";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div style={{ margin: 20 }}>
        <input
          type="text"
          placeholder="Buscar Producto"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <ListProducts searchValue={value} />
    </div>
  );
};

export default Home;
