import { Route, Routes } from "react-router-dom";
import EditPassword from "../pages/EditPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password/reset" element={<ResetPassword />} />
      <Route path="/users/password/edit" element={<EditPassword />} />
    </Routes>
  );
}
export default AppRoutes;
