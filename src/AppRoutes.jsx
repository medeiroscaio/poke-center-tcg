import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Table from "./Table/Table.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Table" element={<Table />}></Route>
        <Route path="*" element={<Navigate to="/Login" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
