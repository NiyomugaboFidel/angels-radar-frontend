import * as Yup from "yup";

const VerifyCodeValidationSchema = Yup.object().shape({
    otpcode: Yup.string()
      .min(6, "Code must be exactly 6 numbers")
      .max(6, "Code must be exactly 6 numbers")
      .required("Code is required"),
  });
  export default VerifyCodeValidationSchema