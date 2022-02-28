// Hooks
import { useState } from "react";
// Styles
import styles from "./ContactsList.module.css";
// Components
import ContactItem from "..//ContactItem/ContactItem";
import Contact from "../Contact";

const ContactsList: React.FC<{
  items: Contact[];
  onRemoveContact: (id: any) => void;
}> = (props) => {
  const [filter, setFilter] = useState<string>("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const filtered = props.items.filter(
    (item) =>
      item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      item.lastName.toLowerCase().includes(filter.toLowerCase()) ||
      item.phoneNumber.toString().includes(filter)
  );

  let list = filtered ? filtered : props.items;
  return (
    <div className={styles.list}>
      <input
        className={styles.filter}
        type="text"
        placeholder="Search for a contact"
        onChange={changeHandler}
      />
      <ul className={styles.contacts}>
        {list.map((item) => (
          <ContactItem
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            phoneNumber={item.phoneNumber}
            onRemoveContact={props.onRemoveContact.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
