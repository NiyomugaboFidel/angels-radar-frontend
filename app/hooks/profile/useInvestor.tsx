import { getInvestor } from "@/app/libs/investor";
import {
    useQuery,
  } from "@tanstack/react-query";

  export const useInvestor = () => {
    return useQuery({
      queryKey: ['investors'],
      queryFn: () => getInvestor(),
      staleTime: 30 * 1000,
      refetchOnWindowFocus: true, 
      refetchOnReconnect: true, 
      refetchInterval: false,
      refetchOnMount: false,
    });
  };
  