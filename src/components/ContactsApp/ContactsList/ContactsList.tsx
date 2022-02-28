import styles from "./ContactsList.module.css";
import ContactItem from "..//ContactItem/ContactItem";
import Contact from "../Contact";

const ContactsList: React.FC<{
  items: Contact[];
  onRemoveContact: (id: any) => void;
}> = (props) => {
  return (
    <div className={styles.list}>
      <input
        className={styles.filter}
        type="text"
        placeholder="Search for a contact"
      />
      <ul className={styles.contacts}>
        {props.items.map((item) => (
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
