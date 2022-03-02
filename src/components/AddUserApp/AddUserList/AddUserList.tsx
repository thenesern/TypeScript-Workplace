import React from "react";
import User from "../User";
import UserItem from "../UserItem/UserItem";
import styles from "./AddUserList.module.css";

const AddUserList: React.FC<{
  users: User[];
}> = (props) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.header}>Users List</h3>
      <ul className={styles.users}>
        {props.users.map((user) => (
          <UserItem key={user.id} name={user.userName} age={user.userAge} />
        ))}
      </ul>
    </div>
  );
};

export default AddUserList;
