import { verifyEmail, VerifyEmailPayload } from "@/app/libs/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"; // For redirecting users
import { toast } from "react-hot-toast";

const useVerifyEmail = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (values: VerifyEmailPayload) => verifyEmail(values),
    onSuccess: (data) => {
      toast.success("Account verification successful! Please Login.");

      setTimeout(() => {
        router.push(`/auth/login`);
      }, 1500);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data.errors
        ? error.response?.data.errors[0]
        : error.response?.data?.message ||
          "Account verification failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};
export default useVerifyEmail;
