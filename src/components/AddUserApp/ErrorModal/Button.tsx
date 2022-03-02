// Styles
import styles from "./Button.module.css";

const Button: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <button className={styles.button} type="submit" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
