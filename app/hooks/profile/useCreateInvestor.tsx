import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { createInvestor, createInvestorType } from "@/app/libs/investor";
const useCreateInvestor = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: createInvestorType) => createInvestor(data),
    onSuccess: (data) => {
      toast.success("Profile create successful!");
      router.push('/');
     
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data.errors
        ? error.response?.data.errors[0]
        : error.response?.data?.message || "Create Investor profile failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};
export default useCreateInvestor;
