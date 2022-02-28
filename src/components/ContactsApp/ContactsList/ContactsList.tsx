import styles from "./ContactsList.module.css";

const ContactsList = () => {
  return (
    <div className={styles.list}>
      <input
        className={styles.filter}
        type="text"
        placeholder="Search for a contact"
      />
      <ul className={styles.contacts}>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
        <li className={styles.li}>
          <h6 className={styles.name}>John Doe</h6>
          <span>0123456789</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactsList;
