import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = ({ menu }) => {
  const { pathname } = useLocation();
  return (
    <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
      <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
        <div className="flex items-center justify-center pt-6">
          <Link className="flex items-center" to="/admin/dashboard">
            <img
              src="https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Flogo%2F1649325481.png&w=1920&q=90"
              className="mr-3 h-6 sm:h-9"
              alt="Cheezious Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Cheezious
            </span>
          </Link>
        </div>
        <nav className="mt-6">
          <div>
            {menu.map((item) => {
              return (
                <Link
                  key={item.id}
                  className={`flex items-center    justify-start w-full p-4   font-thin uppercase transition-colors duration-200  ${
                    item.path === pathname
                      ? "text-white  bg-red-700  "
                      : "text-gray-500  dark:text-white hover:text-red-700"
                  }`}
                  to={item.path}
                >
                  <span className="text-left">
                    <i className={`fa fa-${item.icon}`}></i>
                  </span>
                  <span className="mx-4 text-sm font-normal ">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
