import AppLayout from "../layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Cart, Checkout, Dashboard, Thankyou } from "../pages";
import { ProtectedRoutes } from "./protected-routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
