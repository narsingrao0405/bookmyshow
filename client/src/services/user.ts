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
    console.log("Get Current User Request ::::::::::::::::");
    console.log("Token in Get Current User Request ::::::::::::::::", localStorage.getItem("token"));
    // const token = localStorage.getItem("token");
    // if (!token) {
    //     throw new Error("No token found. Please log in.");
    // }
    try{
        const response = await axiosInstance.get(`${API_USER_URL}/get-current-user`);
        console.log("Response in Get Current User Request ::::::::::::::::", response.data);
        return response.data;

    }catch(error:any){
        console.log("Error in Sending the Current User Request",error.message);
        throw new Error(error.message);
    }
}



