import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import AddUser from "./components/Dashboard/NewUsers/AddUser";
import Users from "./components/Dashboard/Users/Users";
import Navbar from "./components/Navbar/Navbar";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="add" element={<AddUser />} />
      <Route path="customers" element={<Users />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);