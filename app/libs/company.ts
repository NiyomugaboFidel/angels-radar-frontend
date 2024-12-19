import api from "./Axios";

export interface createCompanyType{
    interestedTags:string[],
    companyName:string,
    jobTitle:string,

}
export const createCampany = async (data:createCompanyType) => {
    const response = await api.post('/company/create', data);
    return response.data; 
  };
  
export const getCompanyProfile = async () => {
    const response = await api.get('/company-profiles');
    return response.data; 
  };
  
export const getCompanyProfileById = async (id:string) => {
    const response = await api.get(`/company-profiles/${id}`);
    return response.data; 
  };
  

  export interface Filters {
    [key: string]: string | number | undefined;
  }
  
 
interface CompanyProfile {
  _id: string;
  logo: string;
  tagline: string;
  description: string;
  background: string;
  fundRaiseDetails: {
    stage: string;
  };
  companyId: {
    companyName: string;
    interestedTags: string[];
  };
  investmentsType: string[];
  metrics: {
    valuation: number;
    evaluationScore: number;
    growthRate: number;
    mrr: number;
    angelOffering: boolean;
    fundingRequired: number;
  };
}

export interface GetCompanyProfileResponse {
  data: CompanyProfile[];
}

export const getCompanyProfileFilter = async (filters: Filters, search: string): Promise<GetCompanyProfileResponse> => {
  // Make sure filters has the correct types
  const params: { [key: string]: string | number } = {
    ...filters,
    search,
  };

  console.log(params);  // Check the structure of params before sending the request
  
  const response = await api.get('/search', { params });
  return response.data;
};
