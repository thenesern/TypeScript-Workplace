import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactsApp from "./components/ContactsApp/ContactsApp";
import ToDoApp from "./components/ToDoApp/ToDoApp";
import AddUserApp from "./components/AddUserApp/AddUserApp";
import FormApp from "./components/FormApp/FormApp";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contacts" element={<ContactsApp />} />
      <Route path="/todo" element={<ToDoApp />} />
      <Route path="/adduser" element={<AddUserApp />} />
      <Route path="/form" element={<FormApp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
