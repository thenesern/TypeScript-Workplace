import { nanoid } from "nanoid";

class Contact {
  id: any;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  constructor(firstName: string, lastName: string, phoneNumber: any) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.id = nanoid();
  }
}

export default Contact;
