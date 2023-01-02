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
import Cars from "../containers/cars";
import CarDetail from "../containers/car-details";
import Colors from "../containers/colors";
import DarkLight from "../containers/dark-light";
import FormValidation from "../containers/formvalidation";
import Dogs from "../containers/dogs";
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
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/darklight" element={<DarkLight />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/form" element={<FormValidation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
