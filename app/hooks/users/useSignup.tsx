import { signup, SignupPayload } from '@/app/libs/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation'; // For redirecting users
import { toast } from 'react-hot-toast';

const useSignup = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: SignupPayload) => signup(data),
    onSuccess: (data) => {
      toast.success('Signup successful! Check your email to verify your account.');
 
      setTimeout(() => {
        router.push(`/auth/verify-email?evt=${data?.token}`); 
      }, 1500); 
    },
    onError: (error: any) => {
   
      const errorMessage = error.response?.data.errors ?error.response?.data.errors[0]  :error.response?.data?.message || 'Signup failed. Please try again.';
      toast.error(errorMessage);
    },
  });
};
export default useSignup