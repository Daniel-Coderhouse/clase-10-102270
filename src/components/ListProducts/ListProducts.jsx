import { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import styles from "./styles.module.css";
import { Link } from "react-router";

/*
TODO: 
1) Incluir estados de error y loading
2) Refactorizar llamada HTTP GET utilizando sintaxis async/await 
3) Incluir UI de Spinner / Loader
4) Abstraer logica de llamada HTTP a un Custom Hook
*/

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h3>Lista de Products</h3>

      <div className={styles.grid}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <CardProduct data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
