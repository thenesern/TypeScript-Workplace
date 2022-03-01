// Styles
import styles from "./ToDoList.module.css";
// Components
import ToDo from "../ToDo";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList: React.FC<{
  items: ToDo[];
  onRemoveToDo: (id: any) => void;
}> = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <ToDoItem
          key={item.id}
          inputValue={item.inputValue}
          onRemoveToDo={props.onRemoveToDo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
