import { useParams } from "react-router";
import CardProduct from "../../components/CardProduct/CardProduct";
import styles from "./styles.module.css";
import useFetch from "../../hooks/useFetch";

import Spinner from "../../components/Spinner/Spinner";
import MessageUI from "../../components/MessageUI/MessageUI";

const Category = () => {
  const { category } = useParams();
  const url = "https://dummyjson.com/products";
  const { data, error, loading } = useFetch(url);

  const datafilteredByCategory = data?.products?.filter(
    (product) => product.category === category,
  );

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
      <h3>Category</h3>
      <div className={styles.grid}>
        {datafilteredByCategory.map((product) => (
          <CardProduct data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
