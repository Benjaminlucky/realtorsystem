// components/PublicRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken");
  return !authToken ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
