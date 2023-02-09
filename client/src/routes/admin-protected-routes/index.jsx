import React from "react";
import { Navigate } from "react-router-dom";
import { adminVerifyToken } from "../../utils/verify-token";

export const AdminProtectedRoutes = ({ children }) => {
  if (!adminVerifyToken()) {
    console.log("no");
    return <Navigate to="/admin" replace={true} />;
  }
  return children;
};
