import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactsApp from "./components/ContactsApp/ContactsApp";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contacts" element={<ContactsApp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
