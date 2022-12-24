import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "../containers/account";
import Home from "../containers/home";
import ProductDetail from "../containers/product-details";
import Product from "../containers/products";
import AppLayout from "../layout";
import Dashboard from "../containers/dashboard";
import Profile from "../containers/profile";
import Posts from "../containers/products-react-query";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/products-react-query" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
