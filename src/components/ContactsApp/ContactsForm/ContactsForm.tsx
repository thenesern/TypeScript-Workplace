import styles from "./ContactsForm.module.css";

const ContacsForm = () => {
  return (
    <form className={styles.form}>
      <ul className={styles.list}>
        <li className={styles.li}>
          <label className={styles.labels} htmlFor="firstName">
            First Name
          </label>
          <input className={styles.inputs} type="text" id="firstName" />
        </li>
        <li className={styles.li}>
          <label className={styles.labels} htmlFor="lastName">
            Last Name
          </label>
          <input className={styles.inputs} type="text" id="lastName" />
        </li>
        <li className={styles.li}>
          <label className={styles.labels} htmlFor="phoneNumber">
            Phone Number
          </label>
          <input className={styles.inputs} type="number" />
        </li>
        <li>
          <button className={styles.button}>Add</button>
        </li>
      </ul>
    </form>
  );
};

export default ContacsForm;
