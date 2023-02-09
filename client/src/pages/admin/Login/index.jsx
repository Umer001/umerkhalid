import React, { useState } from "react";
import { Formik } from "formik";
import { Label, TextInput, Checkbox, Button, Spinner } from "flowbite-react";
import { adminLoginValidationSchema } from "../../../utils/formik-validations";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../../services/http-services/auth";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, setSubmitting) => {
    adminLogin({
      values,
      cbSuccess: (data) => {
        setSubmitting(false);
        toast.success(data.message);
        navigate("/admin/dashboard");
      },
      cbFailure: (message) => {
        setSubmitting(false);
        toast.error(message);
        console.log(message);
      },
    });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={adminLoginValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="flex h-screen place-content-center  px-4 sm:px-0 flex-col bg-[#FFCB04]">
          <a className="text-center" href="/">
            <img
              src="https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Flogo%2F1649325481.png&w=256&q=90"
              className="w-[100px] mx-auto"
              alt="Cheezious Logo"
            />
          </a>
          <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-4 text-center">
            Welcome to Admin Panel
          </h1>
          <form
            className="space-y-4 px-6   py-8 max-w-[500px] mx-auto w-full shadow rounded-xl border-1 bg-white border-black-700"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Sign in
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                placeholder="Your email"
                name="email"
                required={true}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="text-red-500 text-xs">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Password" />
              </div>
              <TextInput
                id="password"
                placeholder="Your password"
                name="password"
                required={true}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                type="password"
              />
              <p className="text-red-500 text-xs">
                {errors.password && touched.password && errors.password}
              </p>
            </div>

            <div className="w-full">
              <Button color="failure" type="submit" disabled={isSubmitting}>
                Submit{" "}
                {isSubmitting ? (
                  <div className="ml-2">
                    <Spinner size="sm" light={true} color="failure" />
                  </div>
                ) : (
                  ""
                )}
              </Button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default AdminLogin;
