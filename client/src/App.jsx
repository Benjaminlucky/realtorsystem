import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import "flowbite/dist/flowbite.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/:username"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<RedirectToDashboard />} />
          <Route path="/dashboard/:username" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/estates" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const RedirectToDashboard = () => {
  const username = localStorage.getItem("username");
  return username ? (
    <Navigate to={`/dashboard/${username}`} replace />
  ) : (
    <Navigate to="/signin" replace />
  );
};
