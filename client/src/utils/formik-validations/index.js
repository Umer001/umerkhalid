import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
  fullname: Yup.string()
    .min(3)
    .max(50)
    .required("Please enter your full name."),
  email: Yup.string().email().required("Please enter your valid email."),
  phone: Yup.string().required("Please enter your valid phone number."),
});

// export const loginValidationSchema = Yup.object({
//     email: Yup.string().email().required("Please enter your valid email."),
//     password: Yup.string()
//         .required("No password provided.")
//         .min(6, "Password is too short - should be 8 chars minimum.")
//         .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
// });

export const loginValidationSchema = Yup.object({
  phone: Yup.string().required("Please enter your valid phone."),
});
export const otpValidationSchema = Yup.object({
  otp: Yup.string().required("Please enter your valid otp."),
});
