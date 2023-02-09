import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import { menu } from "./menu";

const AdminLayout = () => {
  const { darkMode } = useSelector((state) => {
    return state.layout;
  });
  return (
    <div className={`w-full mx-auto ${darkMode ? "dark" : ""}`}>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <div className="flex items-start justify-between">
          <AdminSidebar menu={menu} />
          <div className="flex flex-col w-full pl-0 md:p-5 md:space-y-4 ">
            <AdminHeader />
            <div className="h-screen pt-2 pb-24 pl-2 pr-2  md:pt-0 md:pr-0 md:pl-0 overflow-auto admin-main">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
