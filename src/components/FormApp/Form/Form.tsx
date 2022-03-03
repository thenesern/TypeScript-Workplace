import { useState, useEffect } from "react";
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
  const firstNameHandler = (e: any) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e: any) => {
    setLastName(e.target.value);
  };
  const emailHandler = (e: any) => {
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
    if (email.trim().length < 1 && emailBlur) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email, emailBlur]);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["control-group"]}>
        <div /* className={firstNameStyles} */>
          <label htmlFor="name">First Name</label>
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
        <div /*  className={lastNameStyles} */>
          <label htmlFor="name">Last Name</label>
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
      </div>
      <div /* className={emailStyles} */>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailHandler}
          onBlur={() => setEmailBlur(true)}
        />
        {emailError && <p className={styles["error-text"]}>Invalid Email</p>}
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