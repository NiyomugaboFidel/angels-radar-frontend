import { signin, SignInPayload, signup } from "@/app/libs/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"; // For redirecting users
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: SignInPayload) => signin(data),
    onSuccess: (data) => {
      toast.success("Sign in successful!");
      localStorage.setItem("ANGELS_RADAR_JWT", data.token);

      Cookies.set(
        "user",
        JSON.stringify(data.user),
        { expires: 7, path: "/" }
      );
      const userCookie = Cookies.get("user");

      // Decode and parse the cookie content
      const user = userCookie ? JSON.parse(userCookie) : null;
      console.log({user})      
    //   setTimeout(() => {
    //     router.push(`/auth/user`);
    //   }, 1500);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data.errors
        ? error.response?.data.errors[0]
        : error.response?.data?.message || "Signup failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};
export default useLogin;
