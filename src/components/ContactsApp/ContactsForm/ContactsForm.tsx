import styles from "./ContactsForm.module.css";
import { useRef } from "react";

const ContactsForm: React.FC<{
  onAddContact: (
    firstName: string,
    lastName: string,
    phoneNumber: number
  ) => void;
}> = (props) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const firstName = firstNameRef.current!.value;
    const lastName = lastNameRef.current!.value;
    const phoneNumber = phoneNumberRef.current!.value;

    props.onAddContact(firstName, lastName, Number(phoneNumber));
    firstNameRef.current!.value = "";
    lastNameRef.current!.value = "";
    phoneNumberRef.current!.value = "";
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <ul className={styles.list}>
        <li className={styles.li}>
          <label className={styles.labels} htmlFor="firstName">
            First Name
          </label>
          <input
            className={styles.inputs}
            type="text"
            id="firstName"
            ref={firstNameRef}
            required
          />
        </li>
        <li className={styles.li}>
          <label className={styles.labels} htmlFor="lastName">
            Last Name
          </label>
          <input
            className={styles.inputs}
            type="text"
            id="lastName"
            ref={lastNameRef}
            required
          />
        </li>
        <li className={styles.li}>
          <label className={styles.labels} htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className={styles.inputs}
            type="number"
            id="phoneNumber"
            ref={phoneNumberRef}
            required
          />
        </li>
        <li>
          <button className={styles.button}>Add</button>
        </li>
      </ul>
    </form>
  );
};

export default ContactsForm;
