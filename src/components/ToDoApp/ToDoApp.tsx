// Hooks
import { useState } from "react";
// Styles
import styles from "./ToDoApp.module.css";
// Components
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList/ToDoList";
import Button from "../HomeButton/Button";

const ToDoApp = () => {
  const [toDos, setToDos] = useState<ToDo[]>([
    new ToDo("Learn React"),
    new ToDo("Learn TypeScript"),
  ]);

  const addToDoHandler = (inputValue: string) => {
    const newToDo = new ToDo(inputValue);
    setToDos((prevToDos) => {
      return prevToDos.concat(newToDo);
    });
  };
  console.log(toDos);
  const onRemoveToDo = (id: any) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className={styles.container}>
      <Button />
      <div className={styles.app}>
        <ToDoForm onAddToDo={addToDoHandler} />
        <ToDoList items={toDos} onRemoveToDo={onRemoveToDo} />
      </div>
    </div>
  );
};

export default ToDoApp;
