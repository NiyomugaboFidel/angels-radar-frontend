import { Filters, getCompanyProfile, getCompanyProfileById, getCompanyProfileFilter, GetCompanyProfileResponse } from "@/app/libs/company";
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
  
  export const useCompanyProfileFiter = (filters: Filters, search: string) => {
    return useQuery<GetCompanyProfileResponse>({
      queryKey: ['companyProfile', filters, search], // Include filters and search in the query key
      queryFn: () => getCompanyProfileFilter(filters, search), // Pass filters and search to the API call
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
  