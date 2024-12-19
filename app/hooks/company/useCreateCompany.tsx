import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { createCampany, createCompanyType } from "@/app/libs/company";

const useCreateCompany = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: createCompanyType) => createCampany(data),
    onSuccess: (data) => {
      toast.success("Company create successful!");
      setTimeout(() => {
        router.push(`/`);
      }, 1500);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data.errors
        ? error.response?.data.errors[0]
        : error.response?.data?.message || "Create Company failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};
export default useCreateCompany;
