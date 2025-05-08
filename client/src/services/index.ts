import axios from "axios";

const token = localStorage.getItem("token");


export const axiosInstance= axios.create({
    headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
    },
    baseURL: "http://localhost:3000",
    //withCredentials: true,
    
});

axiosInstance.interceptors.request.use(
    function(config: any){
        const token = localStorage.getItem("token");
        console.log("Token in Axios Interceptor ::::::::::::::::", token);
        if(token){
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;

    }, function(error){
        return Promise.reject(error);
    }
)



