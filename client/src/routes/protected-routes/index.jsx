import React from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verify-token";

export const ProtectedRoutes = ({ children }) => {
  if (!verifyToken()) return <Navigate to="/" replace={true} />;
  return children;
};
