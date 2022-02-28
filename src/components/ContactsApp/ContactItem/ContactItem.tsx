import styles from "./ContactItem.module.css";

const ContactItem: React.FC<{
  firstName: string;
  lastName: string;
  phoneNumber: number;
  onRemoveContact: (id: any) => void;
}> = (props) => {
  return (
    <li className={styles.li} onClick={props.onRemoveContact}>
      <h6 className={styles.name}>
        {props.firstName} {props.lastName}
      </h6>
      <span>{props.phoneNumber}</span>
    </li>
  );
};

export default ContactItem;
