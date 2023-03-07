import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import axios from "axios";
import Login from "./Router/Login";
import HomeLogged from "./Router/HomeLogged";
import Admin from "./Router/Admin";
import WishList from "./Router/WishList";
import Woman from "./Router/Woman";
import Kids from "./Router/Kids";
import Man from "./Router/Man";
export const instance = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home/:userid" element={<HomeLogged />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Home/:userid/WishList" element={<WishList />} />
        <Route path="/Home/:userid/Woman" element={<Woman />} />
        <Route path="/Home/:userid/Man" element={<Man />} />
        <Route path="/Home/:userid/Kids" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;
