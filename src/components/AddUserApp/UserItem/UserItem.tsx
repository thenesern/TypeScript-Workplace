import styles from "./UserItem.module.css";

const UserItem: React.FC<{ name: string; age: number }> = (props) => {
  return (
    <li className={styles.li}>
      {props.name} {props.age} years old.
    </li>
  );
};

export default UserItem;
