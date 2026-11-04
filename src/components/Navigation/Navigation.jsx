import styles from "./styles.module.css";
import { Link } from "react-router";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={styles.link}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.link}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/beauty" className={styles.link}>
            Beauty
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/fragrances" className={styles.link}>
            Fragrances
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/groceries" className={styles.link}>
            Groceries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
