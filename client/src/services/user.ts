import { axiosInstance } from ".";

//const API_USER_URL = process.env.REACT_APP_API_USER_URL || "/api/user";

const API_USER_URL =  "/api/users";
console.log("API_USER_URL:", API_USER_URL);


export const RegisterUser = async(values:any) => {
    
    try{
        const response = await axiosInstance.post(`${API_USER_URL}/register`, values);
        return response.data;

    }catch(error:any){
        console.log("Error in Sending the Registration Request",error.message);
        throw new Error(error.message);
    }

};

export const LoginUser = async (values:any) =>{
    console.log("Login User Values are ::::::::::::::::", values);
    try{
        const response = await axiosInstance.post(`${API_USER_URL}/login`, values);
        return response.data;

    } catch(error:any){
        console.log("Error in Sending the Login Request",error.message);
        throw new Error(error.message);
    }
}

export const getCurrentUser = async () => {
    try{
        const response = await axiosInstance.get(`${API_USER_URL}/current`);
        return response.data;

    }catch(error:any){
        console.log("Error in Sending the Current User Request",error.message);
        throw new Error(error.message);
    }
}



