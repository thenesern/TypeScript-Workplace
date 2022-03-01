// Hooks
import { useRef } from "react";
// Styles
import styles from "./ToDoForm.module.css";

const ToDoForm: React.FC<{ onAddToDo: (inputValue: string) => void }> = (
  props
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current!.value;
    props.onAddToDo(inputValue);
    inputRef.current!.value = "";
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a to do"
        ref={inputRef}
      />
    </form>
  );
};

export default ToDoForm;
