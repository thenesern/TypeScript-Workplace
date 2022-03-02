import { useState, useRef } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from "./AddUserForm.module.css";

const AddUserForm: React.FC<{
  onAddUser: (enteredUsername: string, enteredAge: number) => void;
}> = (props) => {
  const [error, setError] = useState<any>();
  const usernameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let enteredUsername = usernameRef.current!.value;
    let enteredAge = ageRef.current!.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError({
        title: "Invalid Username or Age.",
        message: "Please enter a valid username and age.",
      });
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age.",
        message: "Please enter a valid age.",
      });
    }
    props.onAddUser(enteredUsername, Number(enteredAge));
    enteredUsername = "";
    enteredAge = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          className={styles.username}
        />
        <label htmlFor="age">Age: </label>
        <input className={styles.age} type="number" id="age" ref={ageRef} />
        <button className={styles.button}>Submit</button>
      </form>
    </>
  );
};

export default AddUserForm;
