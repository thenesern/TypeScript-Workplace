// Hooks
import { useState, useEffect } from "react";
// Styles
import styles from "./Form.module.css";

const Form = () => {
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameBlur, setFirstNameBlur] = useState(false);
  const [lastNameBlur, setLastNameBlur] = useState(false);
  const [emailBlur, setEmailBlur] = useState(false);
  console.log(firstNameBlur, lastNameBlur, emailBlur);
  console.log(firstName, lastName, email);
  const firstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    if (firstName.trim().length < 1 && firstNameBlur) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  }, [firstName, firstNameBlur]);

  useEffect(() => {
    if (lastName.trim().length < 1 && lastNameBlur) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  }, [lastName, lastNameBlur]);

  useEffect(() => {
    if (
      (email.trim().length < 3 || !email.includes("@") === true) &&
      emailBlur
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email, emailBlur]);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      firstNameBlur &&
      lastNameBlur &&
      emailBlur
    ) {
      alert("Form Submitted");
      setFirstName("");
      setLastName("");
      setEmail("");
      setFirstNameBlur(false);
      setLastNameBlur(false);
      setEmailBlur(false);
    } else {
      setFirstNameError(true);
      setLastNameError(true);
      setEmailError(true);
    }
  };

  const firstNameStyles = firstNameError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];

  const lastNameStyles = lastNameError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];

  const emailStyles = emailError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["control-group"]}>
        <div className={firstNameStyles}>
          <label htmlFor="name">First Name: </label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameHandler}
            onBlur={() => setFirstNameBlur(true)}
          />
          {firstNameError && (
            <p className={styles["error-text"]}>Invalid First Name</p>
          )}
        </div>
        <div className={lastNameStyles}>
          <label htmlFor="name">Last Name: </label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameHandler}
            onBlur={() => setLastNameBlur(true)}
          />
          {lastNameError && (
            <p className={styles["error-text"]}>Invalid Last Name</p>
          )}
        </div>
        <div className={emailStyles}>
          <label htmlFor="name">E-Mail Address: </label>
          <input
            type="text"
            id="name"
            value={email}
            onChange={emailHandler}
            onBlur={() => setEmailBlur(true)}
          />
          {emailError && <p className={styles["error-text"]}>Invalid Email</p>}
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button className={styles.button} /* disabled={!formIsValid} */>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
