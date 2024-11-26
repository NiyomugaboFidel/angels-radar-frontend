import * as Yup from 'yup';
const SigninValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),

  });

  export default SigninValidationSchema