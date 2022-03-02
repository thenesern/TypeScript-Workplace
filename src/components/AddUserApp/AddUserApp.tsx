import styles from "./AddUserApp.module.css";
import AddUserForm from "./AddUserForm/AddUserForm";
import AddUserList from "./AddUserList/AddUserList";

const AddUserApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <AddUserForm onAddUser={onAddUser} />
        <AddUserList />
      </div>
    </div>
  );
};

export default AddUserApp;
