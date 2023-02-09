import axios from "axios";

import {
  auth,
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "../../firebase-config";
let appVerifier;
export const sendOtp = async ({ values, cbSuccess, cbFailure }) => {
  try {
    const { phone } = values;
    if (!appVerifier) {
      appVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log(
              "🚀 ~ file: index.js:21 ~ sendOtp ~ response",
              response
            );
          },
        },

        auth
      );
    } else {
      appVerifier.verify();
    }

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phone,
      appVerifier
    );

    window.confirmationResult = confirmationResult;
    cbSuccess({ status: 201, message: "Otp sent successfully" });
  } catch (error) {
    cbFailure({ status: 400, message: error.message });
  }
};
export const verifyOtp = async ({ values, cbSuccess, cbFailure }) => {
  const { otp } = values;
  try {
    let result = await window.confirmationResult.confirm(otp);
    const user = await result.user;
    cbSuccess({ status: 201, message: "Otp verify successfully" });
  } catch (error) {
    cbFailure({ status: 400, message: error.message });
  }
};
export const signUpCustomer = async ({
  customerInfo,
  cbSuccess,
  cbFailure,
}) => {
  try {
    const { data, status } = await axios.post(
      "http://localhost:4000/auth/register",
      {
        ...customerInfo,
      }
    );
    localStorage.setItem("app-token", data.token);
    status == 201
      ? cbSuccess({
          status: 201,
          message: "signUp successfully",
          data: data.token,
        })
      : cbFailure({ status: 400, data: data.error });
  } catch (error) {
    cbFailure({ status: 400, message: error.message });
  }
};
export const signInCustomer = async ({ phone, cbSuccess, cbFailure }) => {
  try {
    const { data, status } = await axios.post(
      "http://localhost:4000/auth/login",
      { phone }
    );
    localStorage.setItem("app-token", data.token);
    status == 201
      ? cbSuccess({
          status: 201,
          message: "login successfully",
          data: data.token,
        })
      : cbFailure({ status: 400, data: data.error });
  } catch (error) {
    cbFailure({ status: 400, message: error.message });
  }
};
export const getUserInfo = async () => {
  try {
    // Make a GET request to the protected route on the server
    const { data } = await axios.get(
      `http://localhost:4000/auth/get-user-info`,
      {
        headers: { token: localStorage.getItem("app-token") },
      }
    );

    // Return the user information
    return data.user;
  } catch (error) {
    // Return an error if the request fails
    return error;
  }
};

export const userExist = async (values) => {
  console.log("🚀 ~ file: index.js:98 ~   ~ values", values);
  try {
    const { data } = await axios.post(`http://localhost:4000/auth/user-exist`, {
      ...values,
    });

    return data.flag;
  } catch (error) {
    console.log("🚀 ~ file: index.js:105 ~ userExist ~ error", error);
    return false;
  }
};

export const adminLogin = async ({ values, cbSuccess, cbFailure }) => {
  try {
    const { email, password } = values;
    const { data } = await axios.post(
      "http://localhost:4000/auth/admin/login",
      values
    );
    localStorage.setItem("admin-app-token", data.token);
    cbSuccess(data);
  } catch (error) {
    console.log("🚀 ~ file: index.js:27 ~ signInWithEmail ~ error", error);
    if (error.message == "Request failed with status code 403") {
      cbFailure(error.response.data.message);
    } else cbFailure(error.message);
  }
};
