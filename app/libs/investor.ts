import api from "./Axios";

export interface createInvestorType{
    interestedTags:string[],
    companyType:string,
    investmentsType:string,
    companyStage:string,
    ticketSize:number,
}
export const createInvestor = async (data:createInvestorType) => {
    const response = await api.post('/investor', data);
    return response.data; 
  };
  
export const getInvestor = async () => {
    const response = await api.get('/investor', {});
    return response.data; 
  };
  