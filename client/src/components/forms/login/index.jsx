import React, { useState } from "react";
import { Formik } from "formik";
import { Label, TextInput, Checkbox, Button, Spinner } from "flowbite-react";
import { slice } from "../../../store/slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { sendOtp, userExist } from "../../../services/http-services/auth";
import { loginValidationSchema } from "../../../utils/formik-validations";
import toast from "react-hot-toast";
import OtpForm from "../otp";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [showOtp, setshowOtp] = useState(false);
  const [mobile, setMobile] = useState("");
  const { showRegisterForm, showAuthPop, currentUser } = useSelector(
    (state) => {
      return state.auth;
    }
  );
  const handleSubmit = async (values, setSubmitting) => {
    const falg = await userExist(values);

    if (falg == true) {
      await sendOtp({
        values,
        cbSuccess: ({ status, message }) => {
          setSubmitting(false);
          setMobile(values.phone);
          setshowOtp(true);
          toast.success("Otp send");
        },
        cbFailure: ({ status, message }) => {
          setSubmitting(false);
          toast.error(status, message);
        },
      });
    } else {
      toast.error("Please sign up first");
      dispatch(slice.actions.setShowRegister(true));
    }
    setSubmitting(false);
  };
  return (
    <>
      {showOtp ? (
        <OtpForm phone={mobile} handleOtp={() => setshowOtp(false)} />
      ) : (
        <Formik
          initialValues={{ phone: "+923324455796" }}
          validationSchema={loginValidationSchema}
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
                Sign in to our platform
              </h3>
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
                  Log in to your account
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
                Not registered?{" "}
                <a
                  onClick={() =>
                    dispatch(slice.actions.setShowRegister(!showRegisterForm))
                  }
                  className="text-red-700 hover:underline dark:text-blue-500 cursor-pointer"
                >
                  Create account
                </a>
              </div>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

export default LoginForm;
