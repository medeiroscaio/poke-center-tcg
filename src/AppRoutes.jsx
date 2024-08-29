import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Home from "./Home/Home.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="*" element={<Navigate to="/Login" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
