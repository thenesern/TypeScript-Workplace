import { nanoid } from "nanoid";

class ToDo {
  id: any;
  inputValue: string;
  constructor(inputValue: string) {
    this.id = nanoid();
    this.inputValue = inputValue;
  }
}

export default ToDo;
