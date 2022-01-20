import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./Login";

const UnauthenticatedApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);

export default UnauthenticatedApp;
