import CardProduct from "../CardProduct/CardProduct";
import styles from "./styles.module.css";
import Spinner from "../Spinner/Spinner";
import MessageUI from "../MessageUI/MessageUI";
import { Link } from "react-router";

import useFetch from "../../hooks/useFetch";

const ListProducts = ({ searchValue }) => {
  const url = "https://dummyjson.com/products";
  const { data, error, loading } = useFetch(url);

  if (error) {
    return <MessageUI text={error} severity="error" />;
  }

  const filteredData = data?.products?.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  if (loading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3>Lista de Products</h3>

      <div className={styles.grid}>
        {filteredData.map((product) => (
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
