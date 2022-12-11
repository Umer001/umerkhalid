import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "../containers/account";
import Home from "../containers/dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
