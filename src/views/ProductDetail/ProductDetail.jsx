import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CardProduct from "../../components/CardProduct/CardProduct";
import styles from "./styles.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  console.log("product", product);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className={styles.container}>
      <h3>Detalle de Producto</h3>

      {product && (
        <CardProduct data={product}>
          <p>{product.description}</p>
        </CardProduct>
      )}
    </div>
  );
};

export default ProductDetail;
