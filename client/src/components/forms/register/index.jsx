import React, { useState } from "react";
import { Formik } from "formik";
import { Label, TextInput, Checkbox, Button, Spinner } from "flowbite-react";
import { slice } from "../../../store/slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { sendOtp } from "../../../services/http-services/auth";
import { registerValidationSchema } from "../../../utils/formik-validations";
import OtpForm from "../otp";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showOtp, setshowOtp] = useState(false);
  const { showRegisterForm, customerInfo } = useSelector((state) => {
    return state.auth;
  });

  const handleSubmit = async (values, setSubmitting) => {
    dispatch(slice.actions.setCustomerInfo(values));

    sendOtp({
      values,
      cbSuccess: ({ status, message }) => {
        setSubmitting(false);
        setshowOtp(true);
        console.log(status, message);
      },
      cbFailure: ({ status, message }) => {
        setSubmitting(false);
        console.log(status, message);
      },
    });
  };

  return (
    <>
      {showOtp ? (
        <OtpForm signup={true} handleOtp={() => setshowOtp(false)} />
      ) : (
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            phone: "",
          }}
          validationSchema={registerValidationSchema}
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
            <form
              className="space-y-4 px-6 pb-4 sm:pb-6 "
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign up to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="text" value="Your phone" />
                </div>
                <TextInput
                  id="fullname"
                  placeholder="Your name"
                  name="fullname"
                  required={true}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                />
                <p className="text-red-500 text-xs">
                  {errors.fullname && touched.fullname && errors.fullname}
                </p>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
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
                  <Label htmlFor="text" value="Your phone" />
                </div>
                <TextInput
                  id="phone"
                  placeholder="+923XXXXXXXXX"
                  name="phone"
                  required={true}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <p className="text-red-500 text-xs">
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </div>

              <div className="w-full">
                <Button color="failure" type="submit" disabled={isSubmitting}>
                  Create account{" "}
                  {isSubmitting ? (
                    <div className="ml-2">
                      <Spinner size="sm" light={true} color="failure" />
                    </div>
                  ) : (
                    ""
                  )}
                </Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have account?{" "}
                <a
                  onClick={() =>
                    dispatch(slice.actions.setShowRegister(!showRegisterForm))
                  }
                  className="text-red-700 hover:underline dark:text-blue-500 cursor-pointer"
                >
                  Login
                </a>
              </div>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

export default RegisterForm;
