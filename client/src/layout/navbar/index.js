import React, { useState } from "react";
import { Navbar, Dropdown, Avatar, Label } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { slice } from "../../../src/store/slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { CartSidebar, Popup, RegisterForm, LoginForm } from "../../components/";
import { slice as redirectSlice } from "../../../src/store/slices/redirect";
import { verifyToken } from "../../utils/verify-token";
import toast from "react-hot-toast";
const AppNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showRegisterForm, showAuthPop, currentUser } = useSelector(
    (state) => {
      return state.auth;
    }
  );
  const { totalQuantity } = useSelector((state) => {
    return state.cart;
  });

  const navbarData = [{ id: 1, title: "Menu", pathName: "/" }];
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { pathname } = useLocation();
  const handleLogout = () => {
    try {
      localStorage.removeItem("app-token");
      dispatch(slice.actions.setCurCustomerInfo({}));
      toast.success("Logged Out");
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ file: index.jsx:16 ~ handleLogout ~ error", error);
    }
  };
  const handlePopup = () => {
    dispatch(redirectSlice.actions.setRedirect(""));
    dispatch(slice.actions.setShowAuthPop(false));
  };

  return (
    <>
      <Navbar fluid={true} rounded={true} className="bg-[#FFCB04] py-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Flogo%2F1649325481.png&w=1920&q=90"
            className="mr-3 h-6 sm:h-9"
            alt="Cheezious Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Cheezious
          </span>
        </Link>
        <div className="flex md:order-2 items-center justify-center h-full gap-6">
          {pathname != "/checkout" ? (
            <Link onClick={() => setIsOpen(!isOpen)}>
              <div
                style={{
                  position: "relative",
                }}
              >
                <div className="mini-counter">{totalQuantity}</div>
                <i
                  className="fa fa-shopping-cart text-red-700 "
                  style={{ fontSize: "28px" }}
                ></i>
              </div>
            </Link>
          ) : (
            ""
          )}

          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <>
                <i
                  onClick={() =>
                    !currentUser || !verifyToken()
                      ? dispatch(slice.actions.setShowAuthPop(!showAuthPop))
                      : ""
                  }
                  className="fa fa-user-circle-o  text-red-700 "
                  style={{ fontSize: "28px" }}
                ></i>
                <span className="inline-block text-sm px-2 text-black-700 capitalize">
                  {currentUser?.fullname}
                </span>
              </>
            }
          >
            {currentUser && verifyToken() ? (
              <>
                <Dropdown.Header>
                  <span className="block truncate text-sm font-medium">
                    {currentUser?.email}
                  </span>
                </Dropdown.Header>
                <Link to="/orders">
                  <Dropdown.Item>My Orders</Dropdown.Item>
                </Link>
                <Link to="/profile">
                  <Dropdown.Item>My Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </>
            ) : (
              ""
            )}
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navbarData.map((item) => (
            <li
              key={item.id}
              className={`block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-lg  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${
                item.pathName === pathname ? "text-red-700" : "text-gray-700"
              }`}
            >
              <Link to={item.pathName}>{item.title}</Link>
            </li>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <CartSidebar open={isOpen} changeHandler={() => setIsOpen(!isOpen)} />
      <Popup isOpen={showAuthPop} isClose={handlePopup}>
        {showRegisterForm ? <RegisterForm /> : <LoginForm />}
      </Popup>
    </>
  );
};

export default AppNavbar;
