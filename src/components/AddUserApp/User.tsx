import { nanoid } from "nanoid";

class User {
  id: any;
  userName: string;
  userAge: number;
  constructor(userName: string, age: number) {
    this.id = nanoid();
    this.userName = userName;
    this.userAge = age;
  }
}

export default User;
