// Hooks
import { useState } from "react";
// Styles
import styles from "./ContactsApp.module.css";
// Components
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import Contact from "./Contact";
import HomeButton from "../HomeButton/Button";

const ContactsApp = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    new Contact("John", "Doe", "0123456789"),
    new Contact("Robert", "Doe", "9876543210"),
    new Contact("Jennifer", "Doe", "0000000000"),
    new Contact("William", "Doe", "1111111111"),
    new Contact("Mary", "Doe", "2222222222"),
    new Contact("Michael", "Doe", "3333333333"),
    new Contact("Skyler", "Doe", "4444444444"),
    new Contact("Sarah", "Doe", "5555555555"),
  ]);
  const addContactHandler = (
    firstName: string,
    lastName: string,
    phoneNumber: number
  ) => {
    const newContact = new Contact(firstName, lastName, phoneNumber);
    setContacts((prevContacts) => {
      return prevContacts.concat(newContact);
    });
  };

  const removeContactHandler = (id: any) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };
  return (
    <div className={styles.container}>
      <HomeButton />
      <div className={styles.app}>
        <ContactsForm onAddContact={addContactHandler} />
        <ContactsList items={contacts} onRemoveContact={removeContactHandler} />
      </div>
    </div>
  );
};

export default ContactsApp;
