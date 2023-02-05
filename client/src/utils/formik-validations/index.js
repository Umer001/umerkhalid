import * as Yup from "yup";

export const checkoutValidationSchema = Yup.object({
  address: Yup.string().trim().min(5).required("Enter valid address"),
  special_instructions: Yup.string().min(3).max(50).notRequired(),
});
export const registerValidationSchema = Yup.object({
  fullname: Yup.string()
    .min(3)
    .max(50)
    .required("Please enter your full name."),
  email: Yup.string().email().required("Please enter your valid email."),
  phone: Yup.string()
    .matches(/^\+923\d{9}$/, "Invalid phone number format")
    .length(13)
    .required("Please enter your valid phone number e.g +923XXXXXXXXX."),
});

// export const loginValidationSchema = Yup.object({
//     email: Yup.string().email().required("Please enter your valid email."),
//     password: Yup.string()
//         .required("No password provided.")
//         .min(6, "Password is too short - should be 8 chars minimum.")
//         .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
// });

export const loginValidationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\+923\d{9}$/, "Invalid phone number format")
    .length(13)
    .required("Please enter your valid phone number e.g +923XXXXXXXXX."),
});
export const otpValidationSchema = Yup.object({
  otp: Yup.string().length(6).required("Please enter your valid otp."),
});
