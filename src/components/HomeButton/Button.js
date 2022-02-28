// Dependencies
import { Link } from "react-router-dom";
// Styles
import styles from "./Button.module.css";

const Button = () => {
  return (
    <Link to="/">
      <button className={styles.button}>&#10092;</button>
    </Link>
  );
};

export default Button;
