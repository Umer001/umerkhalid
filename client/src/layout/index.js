import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "./footer";
import AppNavbar from "./navbar";
import { getUserInfo, signUpCustomer } from "../services/http-services/auth/";

import { useSelector, useDispatch } from "react-redux";
import { slice } from "../store/slices/auth";
import { verifyToken } from "../utils/verify-token";
const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (verifyToken()) {
        const user = await getUserInfo();
        dispatch(slice.actions.setCurCustomerInfo(user));
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" bg-[#F8F9FA]">
      <div className="container mx-auto">
        <AppNavbar />
        <div className="flex flex-col py-3 m-0 w-full h-full">
          <div className="flex-fill">
            <Outlet />
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default Layout;
