import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Controller from "./Controller/Controller.jsx";
import "./App.css";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Admin" element={<Controller />}></Route>
        <Route path="*" element={<Navigate to="/Login" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
