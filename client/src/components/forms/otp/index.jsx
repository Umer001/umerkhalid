import React from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { slice } from "../../../store/slices/auth";
import { Label, TextInput, Button } from "flowbite-react";
import {
  verifyOtp,
  signUpCustomer,
  getUserInfo,
} from "../../../services/http-services/auth";
import { otpValidationSchema } from "../../../utils/formik-validations";
import { useNavigate } from "react-router-dom";

const OtpForm = ({ signup, handleOtp }) => {
  const dispatch = useDispatch();

  const { customerInfo } = useSelector((state) => {
    return state.auth;
  });
  const { showAuthPop } = useSelector((state) => {
    return state.auth;
  });
  const navigate = useNavigate();

  const registerCustomer = async () => {
    console.log(
      "🚀 ~ file: index.jsx:35 ~ customerInfo ~ customerInfo",
      customerInfo
    );
    await signUpCustomer({
      customerInfo,
      cbSuccess: async ({ status, message, data }) => {
        if (status == 201 && data != "") {
          dispatch(slice.actions.setShowAuthPop(false));
          handleOtp(false);
          dispatch(slice.actions.setCustomerInfo({}));
          const user = await getUserInfo();
          dispatch(slice.actions.setCurCustomerInfo(user));
          navigate("/dashboard");
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
        console.log(status, message);
        if (signup) {
          registerCustomer();
        } else {
          navigate("/dashboard");
        }
      },
      cbFailure: ({ status, message }) => {
        setSubmitting(false);
        console.log(status, message);
      },
    });
  };
  return (
    <Formik
      initialValues={{ otp: "123456" }}
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
              Verify Otp
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default OtpForm;
