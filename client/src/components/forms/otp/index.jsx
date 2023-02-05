import React from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { slice } from "../../../store/slices/auth";
import { slice as redirectSlice } from "../../../store/slices/redirect";
import { Label, TextInput, Button, Spinner } from "flowbite-react";
import {
  verifyOtp,
  signUpCustomer,
  getUserInfo,
  signInCustomer,
} from "../../../services/http-services/auth";
import { otpValidationSchema } from "../../../utils/formik-validations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const OtpForm = ({ signup, handleOtp, phone }) => {
  const dispatch = useDispatch();

  const { customerInfo, showAuthPop } = useSelector((state) => {
    return state.auth;
  });

  const { redirect } = useSelector((state) => {
    return state.redirect;
  });
  const navigate = useNavigate();

  const registerCustomer = async () => {
    await signUpCustomer({
      customerInfo,
      cbSuccess: async ({ status, message, data }) => {
        if (status == 201 && data != "") {
          dispatch(slice.actions.setShowAuthPop(false));
          handleOtp(false);
          dispatch(slice.actions.setCustomerInfo({}));
          const user = await getUserInfo();
          dispatch(slice.actions.setCurCustomerInfo(user));
          redirect ? navigate(redirect) : navigate("/");
          dispatch(redirectSlice.actions.setRedirect(""));
        } else {
          console.log(status, message);
        }
      },
      cbFailure: ({ status, message }) => {
        console.log(status, message);
      },
    });
  };
  const loginCustomer = async () => {
    await signInCustomer({
      phone,
      cbSuccess: async ({ status, message, data }) => {
        if (status == 201 && data != "") {
          dispatch(slice.actions.setShowAuthPop(false));
          const user = await getUserInfo();
          dispatch(slice.actions.setCurCustomerInfo(user));
          redirect ? navigate(redirect) : navigate("/");
          dispatch(redirectSlice.actions.setRedirect(""));
        } else {
          console.log(status, message);
        }
      },
      cbFailure: ({ status, message }) => {
        console.log(status, message);
      },
    });
  };
  const handleSubmit = (values, setSubmitting) => {
    verifyOtp({
      values,
      cbSuccess: ({ status, message }) => {
        setSubmitting(false);
        handleOtp(false);
        toast.success(message);
        if (signup) {
          registerCustomer();
        } else {
          loginCustomer();
        }
      },
      cbFailure: ({ status, message }) => {
        setSubmitting(false);
        toast.error(message);
      },
    });
  };
  return (
    <Formik
      initialValues={{ otp: "" }}
      validationSchema={otpValidationSchema}
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
        <form className="space-y-4 px-6 pb-4 sm:pb-6 " onSubmit={handleSubmit}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Verify Otp
          </h3>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="text"
                value="Please enter otp send to your mobile number"
              />
            </div>
            <TextInput
              id="otp"
              name="otp"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.otp}
            />
            <p className="text-red-500 text-xs">
              {errors.otp && touched.otp && errors.otp}
            </p>
          </div>

          <div className="w-full">
            <Button color="failure" type="submit" disabled={isSubmitting}>
              Verify Otp{" "}
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
      )}
    </Formik>
  );
};

export default OtpForm;
