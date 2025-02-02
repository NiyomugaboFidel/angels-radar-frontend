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

      Cookies.set("user", JSON.stringify(data.user), { expires: 1, path: "/" });
      Cookies.set("ANGELS_RADAR_JWT", data.token, { expires: 1, path: "/" });


      Cookies.set("role", data.user.role, { expires: 1, path: "/" });
      router.push(`/`);
      // setTimeout(() => {
      //   router.push(`/`);
      // }, 1500);
    },
    onError: (error: any) => {
      console.log(error);
      const errorMessage = error.response?.data.errors
        ? error.response?.data.errors[0]
        : error.response?.data?.message || "Sign in failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};
export default useLogin;
