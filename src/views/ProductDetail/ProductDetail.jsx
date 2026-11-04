import { useParams } from "react-router";
import CardProduct from "../../components/CardProduct/CardProduct";
import styles from "./styles.module.css";
import useFetch from "../../hooks/useFetch";

import Spinner from "../../components/Spinner/Spinner";
import MessageUI from "../../components/MessageUI/MessageUI";

const ProductDetail = () => {
  const { id } = useParams();
  const url = "https://dummyjson.com/products";
  const { data, error, loading } = useFetch(url, id);

  if (error) {
    return <MessageUI text={error} severity="error" />;
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3>Detalle de Producto</h3>

      {data && (
        <CardProduct data={data}>
          <p>{data.description}</p>
        </CardProduct>
      )}
    </div>
  );
};

export default ProductDetail;
