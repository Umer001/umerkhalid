import AppLayout from "../layout";
import AdminLayout from "../layout/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Cart,
  Checkout,
  AdminLogin,
  Thankyou,
  Orders,
  Profile,
  AdminDashboard,
  AdminOrders,
} from "../pages";
import { ProtectedRoutes } from "./protected-routes";
import { AdminProtectedRoutes } from "./admin-protected-routes";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />

        <Route element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoutes>
                <AdminDashboard />
              </AdminProtectedRoutes>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <AdminProtectedRoutes>
                <AdminOrders />
              </AdminProtectedRoutes>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <AdminProtectedRoutes>
                <AdminDashboard />
              </AdminProtectedRoutes>
            }
          />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoutes>
                <Checkout />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/thankyou"
            element={
              <ProtectedRoutes>
                <Thankyou />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoutes>
                <Orders />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
