// Styles
import styles from "./ToDoItem.module.css";

const ToDoItem: React.FC<{
  inputValue: string;
  onRemoveToDo: (id: any) => void;
}> = (props) => {
  return (
    <li className={styles.todo} onClick={props.onRemoveToDo}>
      <p>{props.inputValue}</p>
    </li>
  );
};

export default ToDoItem;
