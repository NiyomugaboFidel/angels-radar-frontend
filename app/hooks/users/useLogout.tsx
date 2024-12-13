import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"; 
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { logOut } from "@/app/libs/api";


const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: logOut,
    onSuccess: () => {

      localStorage.removeItem("ANGELS_RADAR_JWT");
      Cookies.remove("user");
      Cookies.remove("ANGELS_RADAR_JWT");
      Cookies.remove("role");

      toast.success("You have been logged out.");
      setTimeout(() => {
        router.push(`/auth/login`);
      }, 1500);
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || "Logout failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};

export default useLogout;
