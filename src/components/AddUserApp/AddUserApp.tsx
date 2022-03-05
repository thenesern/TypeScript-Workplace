// Hooks
import { useState } from "react";
// Styles
import styles from "./AddUserApp.module.css";
// Components
import AddUserForm from "./AddUserForm/AddUserForm";
import AddUserList from "./AddUserList/AddUserList";
import User from "./User";
import Button from "../HomeButton/Button";

const AddUserApp = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const onAddUser = (userName: string, userAge: number) => {
    const newUser = new User(userName, userAge);
    setUsersList((prevUserList) => {
      return prevUserList.concat(newUser);
    });
  };
  return (
    <div className={styles.container}>
      <Button />
      <div className={styles.app}>
        <AddUserForm onAddUser={onAddUser} />
        <AddUserList users={usersList} />
      </div>
    </div>
  );
};

export default AddUserApp;
