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
  