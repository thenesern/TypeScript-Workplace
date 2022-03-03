import { Link } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h3 className={styles.header}>
        React (TypeScript) Workplace - Enes Eren
      </h3>
      <section className={styles.section}>
        <article className={styles.pages}>
          <Link to="/contacts">
            <div className={styles.works}>
              <h3 className={styles.headers}>Contacts App</h3>
              <img
                className={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/TypeScript-Workplace/master/src//assets/ContactsApp/ContactsApp.png"
                alt="Contacts App"
                title="Contacts App"
              />
            </div>
          </Link>
        </article>

        <article className={styles.pages}>
          <Link to="/todo">
            <div className={styles.works}>
              <h3 className={styles.headers}>To Do App</h3>
              <img
                className={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/TypeScript-Workplace/master/src//assets/ToDoApp/ToDoApp.png"
                alt="To Do App"
                title="To Do App"
              />
            </div>
          </Link>
        </article>

        <article className={styles.pages}>
          <Link to="/adduser">
            <div className={styles.works}>
              <h3 className={styles.headers}>Add User App</h3>
              <img
                className={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/TypeScript-Workplace/master/src//assets/AddUserApp/AddUserApp.png"
                alt="Add User App"
                title="Add User App"
              />
            </div>
          </Link>
        </article>

        <article className={styles.pages}>
          <Link to="/form">
            <div className={styles.works}>
              <h3 className={styles.headers}>Form Validation App</h3>
              <img
                className={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/TypeScript-Workplace/master/src//assets/FormApp/FormApp.png"
                alt="Form App"
                title="Form App"
              />
            </div>
          </Link>
        </article>

        <article className={styles.pages}></article>

        <article className={styles.pages}></article>

        <article className={styles.pages}></article>

        <article className={styles.pages}></article>

        <article className={styles.pages}></article>

        <article className={styles.pages}></article>

        <article className={styles.pages}></article>

        <article className={styles.pages}></article>

        <article className={styles.pages}></article>
      </section>
    </div>
  );
}

export default App;
