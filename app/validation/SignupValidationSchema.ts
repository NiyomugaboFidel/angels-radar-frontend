import * as Yup from 'yup';
const SignupValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
  });

  export default SignupValidationSchema