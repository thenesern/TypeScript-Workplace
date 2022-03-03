// Styles
import styles from "./FormApp.module.css";
// Components
import Form from "./Form/Form";
import Button from "../HomeButton/Button";

const FormApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Form />
      </div>
      <Button />
    </div>
  );
};

export default FormApp;
