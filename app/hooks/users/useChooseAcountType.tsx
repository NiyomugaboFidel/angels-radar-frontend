import { ChooseAccountTypePayload, chooseAcountType} from "@/app/libs/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
const useChooseAccountType = () => {

  return useMutation({
    mutationFn: (data: ChooseAccountTypePayload) => chooseAcountType(data),
    onSuccess: (data) => {
      toast.success(`Account type Changed to " ${data.user.role} " successful!`);
  
      Cookies.set(
        "role",
        data.user.role,
        { expires:1, path: "/" }
      );


    },
    onError: (error: any) => {
      const errorMessage = error.response?.data.errors
        ? error.response?.data.errors[0]
        : error.response?.data?.message || "Choose Account failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};
export default useChooseAccountType;
