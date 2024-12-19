import { getCompanyProfile, getCompanyProfileById } from "@/app/libs/company";
import {
    useQuery,
  } from "@tanstack/react-query";

  export const useCompanyProfile = () => {
    return useQuery({
      queryKey: ['companyProfile'],
      queryFn: () => getCompanyProfile(),
      staleTime: 30 * 1000,
      refetchOnWindowFocus: true, 
      refetchOnReconnect: true, 
      refetchInterval: false,
      refetchOnMount: false,
    });
  };
  
  export const useCompanyProfileById = (id:string) => {
    return useQuery({
      queryKey: ['companyProfileById'],
      queryFn: () => getCompanyProfileById(id),
      staleTime: 30 * 1000,
      refetchOnWindowFocus: true, 
      refetchOnReconnect: true, 
      refetchInterval: false,
      refetchOnMount: false,
    });
  };
  