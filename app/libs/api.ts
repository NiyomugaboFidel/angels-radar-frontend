
import api from './Axios';


export interface SignupPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
export interface SignInPayload {
  email: string;
  password: string;
}
export interface VerifyEmailPayload {
  token: string;
  otp: number;

}
export interface ChooseAccountTypePayload {
  role:string
}

export const signup = async (data: SignupPayload) => {
  const response = await api.post('/users/create', data);
  return response.data; 
};

export const signin = async (data: SignInPayload) => {
  const response = await api.post('/users/login', data);
  return response.data; 
};
export const verifyEmail = async (data: VerifyEmailPayload) => {
  const response = await api.post('/users/verify-email', data);
  return response.data; 
};
export const chooseAcountType = async (data : ChooseAccountTypePayload) => {
  const response = await api.put('/users/role', data);
  return response.data; 
};
export const logOut = async () => {
  const response = await api.post('/users/logout', {});
  return response.data; 
};
