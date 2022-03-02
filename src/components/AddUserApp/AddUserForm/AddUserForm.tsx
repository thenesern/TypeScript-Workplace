import { useState, useRef } from "react";

const AddUserForm: React.FC<{
  onAddUser: (enteredUsername: string, enteredAge: number) => void;
}> = (props) => {
  const [error, setError] = useState({});
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
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" ref={usernameRef} />
      <label htmlFor="age">Age: </label>
      <input type="text" id="age" ref={ageRef} />
      <button>Submit</button>
    </form>
  );
};

export default AddUserForm;
